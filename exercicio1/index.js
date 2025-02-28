let nome = prompt("Digite seu primeiro nome");
let sobrenome = prompt("Digite seu segundo nome");
let campo = prompt("Digite o seu campo de estudo");
let num = parseInt(prompt("Digite seu ano de nascimento"));

let date = new Date().getFullYear(); 
let idade = date - num;

window.alert(
    "Nome completo do sodaldo: " + nome + " " + sobrenome + "\n" +
    "Campo de estudo: " + campo + "\n" +
    "Idade: " + idade + " anos"
);
