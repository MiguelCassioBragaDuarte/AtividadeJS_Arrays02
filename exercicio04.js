/*Atividade 4: Registro de Participantes de Conferência
Contexto: Você está organizando uma conferência virtual e precisa gerenciar o registro dos participantes.

Tarefa: Crie um array para manter a lista de participantes que ainda precisam ser registrados, Use o readline para adicionar nomes ao array, Implemente uma função para registrar um participante, removendo seu nome do array após ser registrado, Verifique se o participante está na lista antes de registrá-lo, usando indexOf, Exiba a lista atualizada de participantes ainda não registrados.
*/

const ler = require('readline-sync');

let participantes = [];

let check = true;

while(check){
    let nome = ler.question("digite o nome do participante: ").toLowerCase();

    participantes.push(nome);

    let x = ler.question("Dados cadastrados! 'enter' cadastrar outra emergencia ou 'sair' para finalizar: " ).toLowerCase();

    if (x ==="sair") {
        check= false;
        console.log("Finalizado");
        
    } 
}

check = true;

while(check){
console.log("-------- menu de opçao -------");
console.log("0. finalizar.");
console.log("1. listar pre participantes.");
console.log("2. cadastrar participante.");
console.log("------------------------------");
let opt = ler.questionInt("=> ");

switch (opt) {
    case 0:
        console.log("finalizado");
        check= false;
        break;
    case 1:
        console.table(participantes);
        break;
    case 2:
        let cadastro = ler.question("digite o nome do participante: ").toLowerCase();
        let x = participantes.indexOf(cadastro);
        if(x !== -1){
            console.log("Cadastro realizado!");
            participantes.splice(x,1)
            console.log("Tabela de pre Candidatos atualizados --------")
            console.table(participantes)
        }else{
            console.log("Usuario não e um pre participante!");
        }
        break;

    default:
        console.log("Opção invalida!");
        break;
}
}

