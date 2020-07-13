class RepositorioGit{
    constructor(nomeProjRepo, urlRepo){
        this._nomeProjRepo = nomeProjRepo;
        this._urlRepo = urlRepo;
    }

    retornaRepoGit(){
        return {
            nomeProjRepo: this._nomeProjRepo,
            urlRepo: this._urlRepo
        }
    };
};