"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    numero;
    titular;
    saldoInical;
    // Atributo privado, tem convenção de underline
    _saldo;
    constructor(numero, titular, saldoInical) {
        this.numero = numero;
        this.titular = titular;
        this.saldoInical = saldoInical;
        this._saldo = saldoInical;
    }
    get saldo() {
        return this._saldo;
    }
    depositar(valor) {
        if (valor <= 0) {
            console.warn("Valor de deposito deve ser positivo");
        }
        //this._saldo = _saldo + valor;
        this._saldo += valor;
    }
    sacar(valor) {
        if (valor <= 0 || valor > this.saldo) {
            console.warn("Saldo Insuficiente");
            return false;
        }
        this._saldo -= valor;
        return true;
    }
}
const minhaConta = new ContaBancaria("123", "Romulo", 0);
console.log("Meu Saldo: R$" + minhaConta.saldo);
minhaConta.depositar(-500);
minhaConta.depositar(10000);
console.log("Meu Saldo: R$" + minhaConta.saldo);
minhaConta.sacar(100);
console.log("Meu Saldo: R$" + minhaConta.saldo);
//# sourceMappingURL=Encapsulamento.js.map