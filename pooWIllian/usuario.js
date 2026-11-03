const Genero = Object.freeze( {
    M:"M",
    F:"F",
    OUTRO:"Outro"
})



class Usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin
    constructor(id, nome, senha, dataNascimento, genero, isAdmin){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento)
        this.genero = genero;
        this.isAdmin = false;

        perfil(){
            return "Nome: " + this.nome + " - Data de Nascimento: " + this.dataNascimento.toString();
        }
    }

}

const user1 = new Usuario(1,"Willian Barbosa","2611","2010-11-26T00:30:00",Genero.M);
const user2 = new Usuario(1,"Ana Barbosa","2611","2020-11-26T00:30:00",Genero.M);
console.log(user1)
user1.nome = "Willian Barbosa";
console.log(user1)
console.log(user1.perfil())
console.log(user2.perfil())