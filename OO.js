class Conta {
    
    constructor (agencia, numero){
        this.numero = numero
        this.agencia = agencia
        this.saldo = 0    
    }

    get getAgencia(){
        return this.agencia
    }

    get getNumero(){
        return this.numero
    }

    get getSaldo(){
        return this.saldo
    }

    set setAgencia(agencia){
        this.agencia = agencia
    }

    set setNumero(numero){
        this.numero = numero
    }
    
    Depositar(valor){
        this.saldo += valor
    }

    Sacar(valor){
        if (valor > this.saldo) {
            throw Error("Você não tem saldo suficiente!")
        }
        
        this.saldo -= valor
    }

    Transferir(Conta, valor){
        this.Sacar(valor)
        Conta.Depositar(valor)
    }

}

class ContaEspecial extends Conta{

    constructor(agencia, numero){
        super(agencia, numero)
        this.limiteChequeEspecial = 0;
    }

    
    solicitarChequeEspecial(valor){
        if (this.saldo == 0) {
            this.saldo += valor
        }
    }
     
}


let contaMarcos = new Conta(1234, 554443)
contaMarcos.Depositar(150)
console.log(contaMarcos.getSaldo)

let contaSuelen = new Conta(1432, 67832) 
contaMarcos.Transferir(contaSuelen, 50)
console.log(contaSuelen.getSaldo)
console.log(contaMarcos.getSaldo)

let contaEspecialMarcos = new ContaEspecial(contaMarcos.getAgencia, contaMarcos.getNumero)
contaEspecialMarcos.solicitarChequeEspecial(100)
console.log(contaEspecialMarcos.getSaldo)


