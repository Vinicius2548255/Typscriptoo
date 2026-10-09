// Abordagem tradicional
class FuncionalTradicional{
    public id: number;
    public nome: string;
    public salario: number;

    constructor(id: number, nome: string, salario: number){
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }
}

// Abordagem moderna (Parameter Properties)
class FuncionarioModerno{
    constructor(
        public readonly id: number, 
        public nome: string,
        public salario: number
    ){}

    mostrarInfo(): string{
        return `ID: ${this.id} - NOME: ${this.nome} 
                - Salário: ${this.salario}`
    }
}

const dev = new FuncionarioModerno(1, "Maria Alves", 22000);
console.log(dev.mostrarInfo());


