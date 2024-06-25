/*Atividade 3: Análise de Pesquisa de Livros
Contexto: Você está fazendo uma pesquisa para entender quais categorias de livros são as mais populares em uma biblioteca.

Tarefa: Utilize o readline para capturar títulos de livros e suas categorias, adicionando-os a um array de objetos, Use o método slice para selecionar uma quantidade específica de livros a serem analisados, Agrupe os livros por categoria e conte quantos livros há em cada uma, Exiba os resultados da contagem por categoria.*/

const ler = require('readline-sync');

let livros =[];

let check = true;
let tipo = "";

while(check){
    let livro = ler.question("digite o nome do livro: ");
    console.log("----- Categoria d0 livro -----");
    console.log("1. Romance");
    console.log("2. Ficção cientifica");
    console.log("3. Ação");
    console.log("4. Aventura");
    console.log("5. Drama");
    console.log("-----------------------------");
    let opt = ler.questionInt("=> ");
    switch (opt) {
        case 1:
             tipo = "romance";
            break;
        case 2:
             tipo = "ficcao cientifica";
            break;
        case 3:
             tipo = "acao"
            break;
        case 4:
             tipo = "aventura"
            break;
        case 5:
             tipo = "drama"
            break;
    
        default:
            break;
    }

    livros.push({livro:livro,tipo:tipo});

    let x = ler.question("Dados cadastrados! 'enter' cadastrar outro livro ou 'sair' para finalizar: " ).toLowerCase();

    if (x ==="sair") {
        check= false;
        console.log("Finalizado");
        
    } 
}

console.log("livros cadastrados e: "+(livros.length));
let quant = ler.questionInt("Informe a quantidade de itens que deseja analizar: ")

let analise = livros.slice(0,quant);

let livrosromance = analise.filter(tipo => tipo.tipo === "romance");
let livrosficcao = analise.filter(tipo => tipo.tipo === "ficcao cientifica");
let livrosacao = analise.filter(tipo => tipo.tipo === "acao");
let livrosaventura = analise.filter(tipo => tipo.tipo === "aventura");
let livrosdrama = analise.filter(tipo => tipo.tipo === "drama");

console.log("");
console.log("------- Analise de Livros por categoria ------");
console.log("1. Romance: "+(livrosromance.length));
console.log("2. Ficção Cientifica: "+(livrosficcao.length));
console.log("3. Ação: "+(livrosacao.length));
console.log("4. Aventura: "+(livrosaventura.length));
console.log("5. Drama: "+(livrosdrama.length));




