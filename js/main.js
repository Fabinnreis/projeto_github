let inputUsuario = document.querySelector('#inputUsuario');
let retornoRepo = document.querySelector('#retornoRepo');
let btnEnvio = document.querySelector('#btnBusca');



let usu = "";

btnEnvio.addEventListener("click", ()=>{
    usu = inputUsuario.value;
    if(usu != ""){
        UsuarioGitController.montaUsuarioGit();
        RepositorioGitController.retornaReposGit();
    }else{
        throw new Error("Informe um usuário!");
    }
    
});


