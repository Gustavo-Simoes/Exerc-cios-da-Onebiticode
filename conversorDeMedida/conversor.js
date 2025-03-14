const valor = parseFloat(prompt("Digite um valor em METROS"))
const opcao = prompt(
    "escolha a opção: \na-) milimetro\nb-) centimetro\nc-) dicimetro\nd-) decâmetro\ne-) hectômetro\nf-) quilômetro")

switch(opcao){
    case "a":
        alert("O valor final é de: " + valor  * 1000 + " mm")
        break
        case "b":
            alert("O valor final é de: " + valor   *100 + " cm")
            break
            case "c":
                alert("O valor final é de: " + valor   * 10 + " dm")
                break
                case "d":
                    alert("O valor final é de: " + valor   / 10 + " dam")
                    break
                    case "e":
                        alert("O valor final é de hm: " + valor  / 100 + " hm" )
                        break
                        case "f":
                            alert("O valor final é de: " + valor  /1000 + " km")
                            break
                            default:
                                alert("Opcão invalida")

}
