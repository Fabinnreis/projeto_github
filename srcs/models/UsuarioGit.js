class UsuarioGit{
    constructor(avatar, usuario, nomeRepo, enderecoGit){
        this._avatar = avatar;
        this._usuario = usuario;
        this._nomeRepo = nomeRepo;
        this._enderecoGit = enderecoGit;
        
    }

    retornaUsuarioGit(){
        return {
            avatar: this._avatar,
            usuario: this._usuario,
            nomeRepo: this._nomeRepo,
            enderecoGit: this._enderecoGit
        }
    }
}