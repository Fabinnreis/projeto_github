class UsuarioGitView{
    constructor(){
        throw new Error('Não precisa de instância.');
    }

    static templateUsuarioGit(usuarioGit){
        return `
        <img src="${usuarioGit.avatar}" id="avatar">
        <div id="conteudoUsu">
            <p id="usuario">Usuário: ${usuarioGit.usuario}</p>
            <p id="nomeRepo">Repositorio: <a href='${usuarioGit.enderecoGit}'>${usuarioGit.enderecoGit}</a></p>
        </div>
        `;
    }
}