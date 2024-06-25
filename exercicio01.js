/*Atividade 1: Organização de Inventário de Produtos
Contexto: Você está ajudando a gerenciar o inventário de um armazém. Precisa adicionar produtos e suas quantidades ao sistema e, em seguida, garantir que eles estão organizados alfabeticamente para facilitar a localização.

Tarefa: Utilize o readline para capturar o nome e a quantidade de vários produtos, Adicione esses produtos a um array, Filtre os produtos para remover aqueles cuja quantidade seja zero, Organize os produtos restantes alfabeticamente por nome, Exiba o array final de produtos.*/

const ler = require('readline-sync');

let produtos =[];

let check = true;

while(check){
    let prod = ler.question("digite qual o produto: ");
    let quant = ler.questionInt("digite sua quantidade: ");

    produtos.push({prod:prod,quant:quant});

    let x = ler.question("Dados cadastrados! 'enter' cadastrar outro produto ou 'sair' para finalizar: " ).toLowerCase();

    if (x ==="sair") {
        check= false;
        console.log("Finalizado");
        
    } 
}


let produtosFiltrados = produtos.filter(produto => produto.quant > 0);


let ordemAlfabetica = produtosFiltrados.sort((a, b) => a.prod.localeCompare(b.prod));

console.log("------- Itens Cadastrados em Ordem Alfabética -------");
console.table(ordemAlfabetica);