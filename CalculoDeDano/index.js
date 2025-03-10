const nomeDoAtaque = prompt("Digite o nome do primeiro personagem:");
const poderDoAtaque = parseFloat(prompt("Digite o poder ataque do primeiro personagem :"))

const nomeDoDefensor = prompt("Digite o nome do segundo personagem:");
const poderDeDefesa = parseFloat(prompt("Digite o poder de defesa do segundo personagem: "))
let vidaDoDefensor = parseFloat(prompt("Digite a quantidade de pontos de vida do segundo personagem: "));
const escudo = prompt("Digite se ele possue escudo? (Sim/Não)")

let dano = 0
 
if (poderDoAtaque > poderDeDefesa && escudo === "Não") {
   dano = poderDoAtaque - poderDeDefesa
} else if(poderDoAtaque > poderDeDefesa && escudo === "Sim"){
  dano = (poderDoAtaque - poderDeDefesa) /2
}

vidaDoDefensor -= dano

alert(nomeDoAtaque + " causou " + dano + " pontos de dano em " + nomeDoDefensor)
alert(
nomeDoAtaque + "\nPoder de ataque: " + poderDoAtaque + "\n\n" +
  nomeDoDefensor + "\nPontos de vida: " + vidaDoDefensor +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)