class RepositorioGitView{
    constructor(){
        throw new Error('Não precisa de instância.');
    }

    static templateRepositorioGit(repositorioGit){
        return `
        <li>
            <p id="nomeProjRepo">${repositorioGit.nomeProjRepo}</p>
            <p id="urlRepo">${repositorioGit.urlRepo}</p>
        </li>
        `;
    }
}
