class RepositorioGitController{
    constructor(){
        throw new Error('Não precisa de instância.');
    }

    static retornaReposGit(){
        let requisicao = new XMLHttpRequest();
        requisicao.open("GET", `https://api.github.com/users/${usu}/repos`);
        requisicao.addEventListener("load", ()=>{
            let retornoJSON = JSON.parse(requisicao.responseText);
            for(let item of retornoJSON){
                let montaReq = new RepositorioGit(item.name, item.html_url);
                console.log(montaReq.retornaRepoGit());
            };
            
          
        });
        requisicao.send();
    };
}
