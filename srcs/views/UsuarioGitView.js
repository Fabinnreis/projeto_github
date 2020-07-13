class UsuarioGitView{
    constructor(){
        throw new Error('Não precisa de instância.');
    }

    static templateUsuarioGit(usuarioGit){
        return `
        <img src="${usuarioGit.avatar}" id="avatar">
        <p id="usuario">${usuarioGit.usuario}</p>
        <ul id="listaRepo">${usuarioGit.nomeRepo}</ul>
        `;
    }
}