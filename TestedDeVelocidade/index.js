const veiculo1 = prompt("Digite o nome do veiculo 1 :")
const veiculo2 = prompt("Digite o nome do veiculo 2 :")

const velocidade1 = parseFloat(prompt("Digite a velocidade do veiculo 1 em km :"))
const velocidade2 = parseFloat(prompt("Digite a velocidade do veiculo 2 em km :")) 

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido que " + veiculo2 + "!");
} else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " é mais rapido que " + veiculo1 + ".");
} else {
    alert(veiculo1 + " e " + veiculo2 + " têm a mesma velocidade.");
}
