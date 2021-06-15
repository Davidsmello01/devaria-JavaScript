const readline = require("readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const realizarCalculo = (num1, num2, operacao){
    switch (operacao){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;    
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default:
            return 0;

    }
}

leitor.question("Digite o primeiro numero: \n", (primeironumero) =>{
    console.log({primeironumero});

    leitor.question("Digite o segundo numero: \n", (segundonumero) =>{
        console.log({segundonumero});

        leitor.question("Digite o terceiro numero: \n", (terceironumero) =>{
            console.log({terceironumero});
        leitor.close();
        });
    });
});