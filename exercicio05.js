/*Atividade 5: Sistema de Registro de Funcionários
Descrição: Você vai criar um sistema para adicionar, atualizar e exibir informações de funcionários. Cada funcionário será representado por um objeto com nome, departamento, cargo e anos de serviço.

Tarefa: Iniciar o readline e o array de funcionários: Use readline para capturar entradas do usuário, Mantenha um array chamado funcionarios para armazenar objetos que representam cada funcionário, Adicionar Funcionários: Permita que o usuário adicione novos funcionários inserindo nome, departamento, cargo e anos de serviço.
Exibir Funcionários: Permita que o usuário veja todos os funcionários registrados.
Buscar Funcionário por Nome: Permita que o usuário busque um funcionário pelo nome para ver seus detalhes.
Encerrar o Programa: Permita que o usuário encerre o programa.*/

const ler = require('readline-sync');

let funcionarios = [];

let check = true;

while(check){
    let nome = ler.question("digite o nome do funcionarios: ").toLowerCase();
    let dep = ler.question("digite o departamento do funcionarios: ").toLowerCase();
    let cargo = ler.question("digite o cargo do funcionarios: ").toLowerCase();
    let anos = ler.questionInt("digite o tempo do funcionarios: ");

    funcionarios.push({nome:nome,dep:dep,cargo:cargo,anos:anos});

    let x = ler.question("Dados cadastrados! 'enter' cadastrar outro funcionario ou 'sair' para finalizar: " ).toLowerCase();

    if (x ==="sair") {
        check= false;
        console.log("Finalizado");
        
    } 
}

check = true;

while(check){
console.log("-------- menu de opçao -------");
console.log("0. finalizar.");
console.log("1. listar funcionarios.");
console.log("2. Pesquisar funcionarios.");
console.log("3. Cadastrar Funcionario");
console.log("------------------------------");
let opt = ler.questionInt("=> ");

switch (opt) {
    case 0:
        console.log("finalizado");
        check= false;
        break;
    case 1:
        console.table(funcionarios);
        break;
    case 2:
        let pesquisa = ler.question("digite o nome do funcionario: ").toLowerCase();
        let result = funcionarios.filter(busca => busca.nome === pesquisa);
        if(result === ""){
            console.log("Funcionario inezistente ou não cadastrado")
        }else{
            console.table(result);
        }
        break;
    case 3: 
        let nome = ler.question("digite o nome do funcionarios: ").toLowerCase();
        let dep = ler.question("digite o departamento do funcionarios: ").toLowerCase();
        let cargo = ler.question("digite o cargo do funcionarios: ").toLowerCase();
        let anos = ler.questionInt("digite o tempo do funcionarios: ");

        funcionarios.push({nome:nome,dep:dep,cargo:cargo,anos:anos});
        break;

    default:
        console.log("Opção invalida!");
        break;
}
}