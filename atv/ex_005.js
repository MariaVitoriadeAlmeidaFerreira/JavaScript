const readline = require('readline/promises')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function tabuada() {

    let n = await rl.question("Escreva um numero:\n");
    n = Number(n)
    


    for (let i = 0; i <= 10; i++) {

        
        console.log(`${n * i}`)

    }

    rl.close()



}

tabuada()