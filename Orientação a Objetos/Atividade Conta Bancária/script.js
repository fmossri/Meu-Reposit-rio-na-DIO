class ContaBancaria {
    constructor(agencia, numero, tipo, saldo = 0.0) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = numbers(valor);
    }

    sacar(valor) {
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
        else console.log('Não autorizada');
    }
    depositar(valor) {
        this._saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoDeCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'Conta Corrente';
        this._cartaoDeCredito = cartaoDeCredito;
    }
    get cartaoDeCredito() {
        return this._cartaoDeCredito;
    }
    set cartaoDeCredito(valor) {
        this._cartaoDeCredito = numbers(valor);
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'Conta Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'Conta Universitária';
    }
    sacar(valor) {
        super.sacar();
        if (valor < this._saldo){
            if (valor < 500.0) {
                this._saldo -= valor;
            }
            else {
            console.log('O valor máximo permitido para saque é 500 reais');
            }   
        }
        else console.log('Não autorizada');
    }
}
