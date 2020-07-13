class UsuarioGit{
    constructor(avatar, usuario, nomeRepo){
        this._avatar = avatar;
        this._usuario = usuario;
        this._nomeRepo = nomeRepo;
    }

    retornaUsuarioGit(){
        return {
            avatar: this._avatar,
            usuario: this._usuario,
            nomeRepo: this._nomeRepo
        }
    }
}