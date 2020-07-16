let inputUsuario = document.querySelector('#inputUsuario');
let retornoRepo = document.querySelector('#retornoRepo');
let btnEnvio = document.querySelector('#btnBusca');
let retornaRepositorioGit = document.querySelector('#listaRepo');



let usu = "";

btnEnvio.addEventListener("click", ()=>{
    usu = inputUsuario.value;
    if(usu != ""){
        UsuarioGitController.montaUsuarioGit();
        RepositorioGitController.retornaReposGit();
    }else{
        alert('"Informe um usuário!"');
        throw new Error("Informe um usuário!");
        
    }
    
});


