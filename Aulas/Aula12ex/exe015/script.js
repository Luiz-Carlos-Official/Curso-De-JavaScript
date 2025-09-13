function verificar() {

    var data = new Date()

    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')

    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10)  {
                // criança  M
                img.setAttribute('src', 'c-h.png')
            } else if (idade >= 10 && idade < 18) {
                //jovem M
                img.setAttribute('src', 'j-h.png')
            } else if (idade >= 18 && idade < 60) {
                //Adulto M
                img.setAttribute('src', 'a-h.png')
            } else {
                //idoso M
                img.setAttribute('src', 'i-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10)  {
                // criança  F
                img.setAttribute('src', 'c-m.png')
            } else if (idade >= 10 && idade < 18) {
                //jovem F
                img.setAttribute('src', 'j-m.png')
            } else if (idade >= 18 && idade < 60) {
                //Adulto F
                img.setAttribute('src', 'a-m.png')
            } else {
                //idoso F
                img.setAttribute('src', 'i-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}