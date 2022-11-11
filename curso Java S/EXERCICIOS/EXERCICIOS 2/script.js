function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || Number(fano.value) > ano) {
window.alert ('ERRO! Verifique os dados.')
} else {
    var fsex = document.getElementsByName ('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement ('img')
    img.setAttribute ('id', 'foto')
    if (fsex[0].checked) {
        genero = 'homem'
        if (idade >= 0 && idade < 10) {
            //crianca
            img.setAttribute('src', 'bebemasc.png') }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src','crianca menino.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto homem.jpg')
            } else if (idade < 110) {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            } else {
                img.setAttribute('src', 'esqueleto.jpg')
            }
        }
     else if (fsex[1].checked) {
        genero = 'mulher'
        if (idade >= 0 && idade < 10) {
            //crianca
            img.setAttribute('src', 'bebe fem.jpg') }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'crianca menina.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta mulher.jpg')
            } else if (idade < 110) {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            } else {
            img.setAttribute('src', 'esqueleto.jpg')
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}

}