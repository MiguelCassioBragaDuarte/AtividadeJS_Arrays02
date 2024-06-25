/*Atividade 2: Gerenciamento de Chamadas de Emergência
Contexto: Você opera um centro de chamadas de emergência. Cada nova chamada deve ser registrada com seu tipo e uma mensagem breve.

Tarefa: Use o readline para inserir diversas chamadas no sistema, cada uma com seu tipo e mensagem, Armazene essas chamadas em um array, Implemente uma função para encontrar e priorizar chamadas de "Incêndio", removendo-as do array principal e movendo-as para um array de alta prioridade, Exiba o array de chamadas de alta prioridade e o array regular após a filtragem.*/

const ler = require('readline-sync');

let chamados =[];

let check = true;

while(check){
    let tipo = ler.question("digite qual tipo do emergencia: ").toLowerCase();
    let mensagem = ler.question("digite sua mensagem: ").toLowerCase();

    chamados.push({tipo:tipo,mensagem:mensagem});

    let x = ler.question("Dados cadastrados! 'enter' cadastrar outra emergencia ou 'sair' para finalizar: " ).toLowerCase();

    if (x ==="sair") {
        check= false;
        console.log("Finalizado");
        
    } 
}


let altaPrioridade = chamados.filter(chamado => chamado.tipo === "incendio");
let regular = chamados.filter(chamado => chamado.tipo !== "incendio");

console.log("------- Chamadas alta prioridade -------");
console.table(altaPrioridade);

console.log("------- Chamadas regular -------");
console.table(regular);