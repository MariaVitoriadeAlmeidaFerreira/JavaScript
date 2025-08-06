const readline = require('readline/promises')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

async function contagem() {
    let n = await rl.question("Digite:\n")
   
    n = Number(n)


    for (let i = n; i >= 0; i--)
     
       
        console.log(i);

    rl.close()


}

contagem();