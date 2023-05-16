const button = document.querySelector(".app button")
let inputValor = document.querySelector(".inputValor")
let inputPorcentagem = document.querySelector('.inputNumeroPorcentagem')

button.onclick = function() {
    let valor = Number(inputValor.value)

    let porcentagem = Number(inputPorcentagem.value)
    if(inputValor.value === '' || inputPorcentagem.value === ''){
        alert("EXISTE UM CAMPO VAZIO")
    }else if(porcentagem > valor){
        alert("A PORCETAGEM INFORMADA É MAIOR QUE O VALOR.")
    }
    else if(valor && porcentagem){
        let calculo = ((valor * porcentagem) / 100)
        alert(`${porcentagem}% de ${valor} equivale a um total de ${calculo.toFixed(2)}`)
        inputPorcentagem.value = ''
        inputValor.value = ''
    }
    
}