   function calculo() {
    let lugar = document.getElementById("resposta")
    let valor = document.getElementById("inputnumero")
    let n1 = Number(valor.value)
    let respUm = n1 * 2
    let respDois = n1 * 3
    lugar.innerHTML = `O dobro deste número é ${respUm} e o triplo é ${respDois}.`
}

function tabuada() {
    let place1 = document.getElementById("t1")
    let place2 = document.getElementById("t2")
    let place3 = document.getElementById("t3")
    let place4 = document.getElementById("t4")
    let place5 = document.getElementById("t5")
    let place6 = document.getElementById("t6")
    let place7 = document.getElementById("t7")
    let place8 = document.getElementById("t8")
    let place9 = document.getElementById("t9")
    let place10 = document.getElementById("t10")
    let ntabuada = document.getElementById('inputdois')
    let lugardois = document.getElementById('resposta2')
    let n2 = Number(ntabuada.value)
    let respo1 = 1 * n2
    let respo2 = 2 * n2
    let respo3 = 3 * n2
    let respo4 = 4 * n2
    let respo5 = 5 * n2
    let respo6 = 6 * n2
    let respo7 = 7 * n2
    let respo8 = 8 * n2
    let respo9 = 9 * n2
    let respo10 = 10 * n2

    place1.innerHTML = `1 x ${n2} = ${respo1}`
    place2.innerHTML = `2 x ${n2} = ${respo2}`
    place3.innerHTML = `3 x ${n2} = ${respo3}`
    place4.innerHTML = `4 x ${n2} = ${respo4}`
    place5.innerHTML = `5 x ${n2} = ${respo5}`
    place6.innerHTML = `6 x ${n2} = ${respo6}`
    place7.innerHTML = `7 x ${n2} = ${respo7}`
    place8.innerHTML = `8 x ${n2} = ${respo8}`
    place9.innerHTML = `9 x ${n2} = ${respo9}`
    place10.innerHTML = `10 x ${n2} = ${respo10}`







    
}       
    

