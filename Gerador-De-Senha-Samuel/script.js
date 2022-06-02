let senha = document.querySelector("#senha");
let containerSenha = document.querySelector("#container-senha");
let tamanhoSenha = document.querySelector("#valor");
let controleElemento = document.querySelector("#controle");
let buttonElement = document.querySelector("#button");
let novaSenha = "";
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
tamanhoSenha.innerHTML = controleElemento.value;


controle.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function generateSenha(){
    let pass = "";
    for(let i = 0, n = charset.length; i < controleElemento.value; ++i){
     pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerSenha.classList.remove("hide")
    senha.innerHTML = pass;
    novaSenha = pass
}

function copySenha(){
    navigator.clipboard.writeText(novaSenha);
}