const turista = prompt("Digite seu nome:")
let visita = prompt("Você já visitou alguma cidade? (sim / não)")

let cidades = ""
let cidadeVisitadas = 0


while (visita === "sim") {
    let cidade = prompt("Qual foi a cidade que você visitou?")
    if (cidadeVisitadas === 0) {
        cidades += cidade
    } else {
        cidades += ", " + cidade
    }

    cidadeVisitadas++ 
    visita = prompt("Você visitou outra cidade? (sim / não)")
}


window.alert(
    "O turista " + turista + " já visitou " + cidadeVisitadas + 
    " cidade(s): " + "\n"  + cidades + "."
);
