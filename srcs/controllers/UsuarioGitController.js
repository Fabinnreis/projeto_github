class UsuarioGitController{
    constructor(){
        throw new Error('Não precisa de instância.');
    }

    static montaUsuarioGit(){
        let requisicao = new XMLHttpRequest();
        requisicao.open("GET", `https://api.github.com/users/${usu}`);
        requisicao.addEventListener("load", ()=>{
            let retornoJSON = JSON.parse(requisicao.responseText);
            let montaUsu = new UsuarioGit(retornoJSON.avatar_url, retornoJSON.login, retornoJSON.repos_url);
            let retornaUsuarioGit = document.querySelector('#retornoUsuGit');
            retornaUsuarioGit.innerHTML = UsuarioGitView.templateUsuarioGit(montaUsu.retornaUsuarioGit());
        })
        requisicao.send();
    };
}


