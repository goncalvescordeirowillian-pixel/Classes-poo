class Produto {
    id;
    nome;
    ativo;
    constructor(id,nome,ativo){
        this.id = id;
        this.nome = nome;
        this.ativo = true;
    }

}

const p1 =new Produto(1,"Carregador");
const p2 =new Produto(2,"capinha")