// AJAX (XMLHttpRequest) - Asynchronous JavaScript and XML

let btn = document.querySelector("#btn");

let input = document.querySelector("#input");

let divPai = document.querySelector("#criaApp");


btn.onclick = function () {

    divPai.innerHTML = "";

    let div = document.createElement(`div`);

    div.setAttribute(`class`, `col-6 col-ph-6`);
    div.setAttribute(`id`, `app`);

    let spanNome = document.createElement("p");

    spanNome.setAttribute(`id`, `span`);

    let txtNome = "";

    const url = `https://api.github.com/users/${input.value}`;

    fetch(url)
        .then((resp) => resp.json())

        .then(function (usuario) {

            if (usuario['message'] == 'Not Found') {


                console.log(`Deu pau! msg 'notfound'`);

                txtNome = document.createTextNode(`User not found!`);

                let img = document.createElement("img");

                img.setAttribute("src", `https://pbs.twimg.com/profile_images/1183307306995306496/P1K5Kt_5_400x400.jpg`);
                img.setAttribute(`alt`, `Usuário não encontrado!`);
                img.setAttribute(`id`, `img`);


                div.appendChild(img);

                spanNome.appendChild(txtNome);
                div.appendChild(spanNome);
                divPai.appendChild(div);

                input.value = ``;

            } else if (usuario[`name`] !== null) {

                console.log(`Usuário encontrado e com NOME`);

                txtNome = document.createTextNode(usuario['name']);

                let img = document.createElement("img");

                img.setAttribute("src", usuario[`avatar_url`]);
                img.setAttribute(`id`, `img`);
    
                div.appendChild(img);
    
                spanNome.appendChild(txtNome);
    
                div.appendChild(spanNome);
    
                divPai.appendChild(div);


            } else {

                console.log('Usuário encontrado e SEM nome!');

                txtNome = document.createTextNode(`Login : ${usuario['login']}`);

                let img = document.createElement("img");

                img.setAttribute("src", usuario[`avatar_url`]);
                img.setAttribute(`id`, `img`);
    
                div.appendChild(img);
    
                spanNome.appendChild(txtNome);
    
                div.appendChild(spanNome);
    
                divPai.appendChild(div);

            }


            input.value = ``;

        })
        .catch((error) => {
            console.log('Deu pau!');
            console.log(error);

            txtNome = document.createTextNode(`User not found!`);

            let img = document.createElement("img");

            img.setAttribute("src", `https://pbs.twimg.com/profile_images/1183307306995306496/P1K5Kt_5_400x400.jpg`);
            img.setAttribute(`alt`, `Usuário não encontrado!`);
            img.setAttribute(`id`, `img`);


            div.appendChild(img);

            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
            divPai.appendChild(div);

            input.value = ``;

        })

}






input.addEventListener("keydown", function (event) {

    if (event.key === `Enter`) {
        btn.onclick();
    }

}, true);

