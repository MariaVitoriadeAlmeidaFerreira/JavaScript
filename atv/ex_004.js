const readline = require('readline/promises')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function encontrar_n() {

    let n

    n = await rl.question("Escreva o valor de N: ")

    while (n != 1) {
        if (n % 2 == 0) {

            n /= 2

            console.log("é par\n")
        }
        else {
            n *= 3
            n++
            console.log("impar\n")
        }

    }
    rl.close()
}

encontrar_n();
