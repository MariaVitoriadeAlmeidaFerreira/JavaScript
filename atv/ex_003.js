//ajeita desgraça
const readline = require('readline/promises')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



async function calcular_imposto() {

    let imposto
    let salario 


    salario = await rl.question("Escreve o seu salario:")

    if (salario <= 2000) {
        console.log("isento")
    }
    else if (salario <= 3000) {
        imposto = salario - (salario * 0.08)
        console.log(imposto)
    }
    else if(salario <= 4500){
        imposto = salario - (salario * 0.18)
        console.log(imposto)
    }
    else {
        imposto = salario -(salario * 0.28)
        console.log(imposto)
    }

    rl.close()
}

calcular_imposto();

