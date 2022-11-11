function checar() {
var n1 = document.getElementById('inicio')
var n2 = document.getElementById('fim')
var n3 = document.getElementById('passos')
var resultado = document.getElementById('res')

if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0 ) {
    window.alert(' Verifique os valores! Eles não devem ser nulos.') }
    else {
    res.innerHTML = 'CONTANDO...'
    var a = Number(n1.value)
    var b = Number(n2.value)
    var d = Number(n3.value)
    if (d <= 0) {
        window.alert('Passo inválido')
        d = 1
    }
    if (a < b) { for(var c = a; c <= b; c += d) {
        res.innerHTML += ` ${c} \u{1F449}`
     } } else {
        for(var c = a; c >= b; c -= d) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
     } 
} }