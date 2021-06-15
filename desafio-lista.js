const listaPessoas = ["Jesus","Dimas","Doug","Bozo","Lula"];

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if (!listaPessoas.includes(nome)) {
    console.log("você não foi convidado! ");
    return;
}

if (idade< 18) {
    console.log("você não não tem idade para a festa! ");
    return;
}

console.log("Bem vindo a festa! ");