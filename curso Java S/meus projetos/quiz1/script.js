


function begin() {
var pontos = 0

var bt = document.getElementById('botao')
var bt = ''
var t1 = 'Qual é a capital da Bolívia?'
var t2 = 'Em qual continente se localiza o Haiti?'
var t3 = 'Zagreb está localizada em qual destes países?'
var t4 = 'A) Lima; B) Santiago; C) Quito; D) Sucre;'
var t5 = 'A) África; B) América; C) Oceania; D) Europa;'
var q1 = document.getElementById('question')
var q2 = document.getElementById('qq2')
var r1 = document.getElementById('res')
q1.textContent = `${t1}`
qq2.textContent = `${t4}`
}
function verificar() {
    var t5 = 'A) África; B) América; C) Oceania; D) Europa;'
    var t2 = 'Em qual continente se localiza o Haiti?'
    var q2 = document.getElementById('qq2')
    var q1 = document.getElementById('question')
var r1 = document.getElementById('res')
var k = document.getElementById('inr')
if (k.value == 'D' || k.value == 'd') {
{ Save(); }
} else {
r1.textContent = 'ERRADO!'
} if (k.value == 'b') {r1.innerHTML = "ok"}

} function Save() {
    var t2 = 'Em qual continente se localiza o Haiti?'
    var t5 = 'A) África; B) América; C) Oceania; D) Europa;'
    var q2 = document.getElementById('qq2')
    var q1 = document.getElementById('question')
    q1.textContent = `${t2}`
    q2.textContent = `${t5}`
}



