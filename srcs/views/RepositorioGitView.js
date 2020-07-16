class RepositorioGitView{
    constructor(){
        throw new Error('Não precisa de instância.');
    }

    static templateRepositorioGit(repositorioGit){
        return `
        <li id="listaRepoItem">
            <img id="liLogo" src="img/logo.jpg">
            <a href="https://fabinnreis.github.io/${repositorioGit.nomeProjRepo}/"><p id="nomeProjRepo">${repositorioGit.nomeProjRepo}</p></a>
            <p id="urlRepo"><a href="${repositorioGit.urlRepo}">${repositorioGit.urlRepo}</a></p>
        </li>
        `;
    }
}
