const valido =true;
//const marca = [volks, ford];

if (valido) {
    let idade = 20; //escopo apenas dentro dessas chaves
    console.log("expressao valida - idade = " + idade);
}

if (valido) {
    let idade = 26;
    console.log("segundo if - idade = " + idade);
}
const marca = process.argv[2];

    console.log()
switch  (marca) {
    case "volks":
        console.log("switch - volks");
        break;
    case "ford":
        console.log("switch - ford");
        break;
    default:
        console.log("switch - marca nao atendida");

}