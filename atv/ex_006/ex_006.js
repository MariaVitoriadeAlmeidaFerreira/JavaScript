
const readline = require('readline/promises')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})

async function somadasnotas() {
    let n1 = await rl.question("Digite primeiro valor:\n")
    let n2 = await rl.question("Digite segundo valor:\n")
    let n3 = await rl.question("Digite terceiro valor:\n")

    n1 = Number(n1)
    n2 = Number(n2)
    n3 = Number(n3)


    let soma = n1 + n2 + n3 / 3

    if (soma >= 7) {
        console.log("Aprovado(a)\n")


    }


    else {
        console.log("Reprovado(a)\n")
    }

    rl.close()

}

somadasnotas();