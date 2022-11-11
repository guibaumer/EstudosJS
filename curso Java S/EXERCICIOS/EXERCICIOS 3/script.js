function verificar() {
var n1 = document.getElementById('valor1')
var n2 = document.getElementById('valor2')
var res = document.getElementById('res')
var n3 = Number(n1.value)
var n4 =Number(n2.value)
var resposta = n3 * n4
res.innerHTML = ` O resultado é ${resposta}.`
}