/*Atividade 6: Lista de Compras
Contexto: Você está organizando uma lista de compras para preparar um jantar especial. No entanto, você quer garantir que sua lista esteja organizada alfabeticamente para facilitar a busca enquanto você está no supermercado.

Tarefa: Crie um array com os itens: "Tomates", "Queijo", "Pão", "Cebolas", "Maçãs", Use o método sort para organizar a lista alfabeticamente, Exiba a lista ordenada.*/

let itens = ["Tomates", "Queijo", "Pão", "Cebolas", "Maçãs"];
let ordemAlfabetica = itens.sort();

console.log("------- Itens em Ordem Alfabética -------");
console.table(ordemAlfabetica);