   function calculo() {
    let lugar = document.getElementById("resposta")
    let valor = document.getElementById("inputnumero")
    let n1 = Number(valor.value)
    let respUm = n1 * 2
    let respDois = n1 * 3
    lugar.innerHTML = `O dobro deste número é ${respUm} e o triplo é ${respDois}.`
}

function tabuada() {
    let ntabuada = document.getElementById('inputdois')
    let lugardois = document.getElementById('resposta2')
    let n2 = Number(ntabuada.value)
    let respo1 = 1 * n2

    let tabuada = `1 X ${n2} = ${respo1} 2X ${n2} 3 X ${n2} 4 X ${n2} 5 X ${n2} 6 X ${n2} 7 X ${n2} 8 X ${n2} 9 X ${n2} 10 X ${n2}`
    lugardois.innerHTML = `${tabuada}`
}       
    

