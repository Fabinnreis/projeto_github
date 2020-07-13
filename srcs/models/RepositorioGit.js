class RepositorioGit{
    constructor(nomeRepo, urlRepo){
        this._nomeRepo = nomeRepo;
        this._urlRepo = urlRepo;
    }

    retornaRepoGit(){
        return {
            nomeRepo: this._nomeRepo,
            urlRepo: this._urlRepo
        }
    };
};