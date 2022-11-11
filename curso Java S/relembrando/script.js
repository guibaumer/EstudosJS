function contar() {
    let valor = document.getElementById('valor1')
    let valorDois = document.getElementById('valor2')
    let n1 = Number(valor.value)
    let n2 = Number(valorDois.value)
    let resposta = document.getElementById('aqui')
    let conta = n1 * n2
    resposta.innerHTML = `O resultado é ${conta}.`
}





/* function contar(n1, n2) {
    return n1 * n2 } */