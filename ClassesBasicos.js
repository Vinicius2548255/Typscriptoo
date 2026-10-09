"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abordagem tradicional
class FuncionalTradicional {
    id;
    nome;
    salario;
    constructor(id, nome, salario) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }
}
// Abordagem moderna (Parameter Properties)
class FuncionarioModerno {
    id;
    nome;
    salario;
    constructor(id, nome, salario) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }
    mostrarInfo() {
        return `ID: ${this.id} - NOME: ${this.nome} 
                - Salário: ${this.salario}`;
    }
}
const dev = new FuncionarioModerno(1, "Maria Alves", 22000);
console.log(dev.mostrarInfo());
//# sourceMappingURL=ClassesBasicos.js.map