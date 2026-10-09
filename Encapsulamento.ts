class ContaBancaria{
    // Atributo privado, tem convenção de underline
    private _saldo: number;

    constructor(
        public readonly numero: string,
        public titular: string,
        public saldoInical: number
    ){
        this._saldo = saldoInical; 
    }

    public get saldo(): number{
        return this._saldo;
    } 

    public depositar(valor: number):void{
        if(valor <=0){
            console.warn("Valor de deposito deve ser positivo");
        }
        //this._saldo = _saldo + valor;
        this._saldo += valor;

    }

    public sacar(valor:number):boolean{
        if(valor <= 0 || valor > this.saldo){
            console.warn("Saldo Insuficiente");
            return false;
        }
        this._saldo -= valor;
        return true;
    }
}


const minhaConta = new ContaBancaria("123", "Romulo", 0);
console.log("Meu Saldo: R$"  + minhaConta.saldo);
minhaConta.depositar(-500);
minhaConta.depositar(10000);
console.log("Meu Saldo: R$"  + minhaConta.saldo);
minhaConta.sacar(100);
console.log("Meu Saldo: R$"  + minhaConta.saldo);
