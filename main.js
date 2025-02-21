// Criando uma classe base abstrata
class Animal {
    constructor(nome, idade) {
        if (this.constructor === Animal) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.idade = idade;
    }
    
    emitirSom() {
        throw new Error("Método abstrato precisa ser implementado.");
    }
}

// Criando classes que herdam de Animal
class Cachorro extends Animal {
    emitirSom() {
        return "Au Au!";
    }
}

class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }
}

// Criando instâncias das classes
const cachorro1 = new Cachorro("Rex", 3);
const gato1 = new Gato("Mimi", 2);
const cachorro2 = new Cachorro("Bolt", 5);

// Testando os métodos
console.log(`${cachorro1.nome} diz: ${cachorro1.emitirSom()}`);
console.log(`${gato1.nome} diz: ${gato1.emitirSom()}`);
console.log(`${cachorro2.nome} diz: ${cachorro2.emitirSom()}`);
