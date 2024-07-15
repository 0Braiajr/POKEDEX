function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente!')       
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background= '#2020FF'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'BebeHomem.png')

            } else if (idade < 21) {
                img.setAttribute('src', 'JovemHomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'HomemAdulto.png')
            } else {
                img.setAttribute('src', 'Idoso.png')
            }
        
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background='#F60B7E'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'BebeMulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'JovemMulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'MulherAdulta.png')
            } else {
                img.setAttribute('src', 'Idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}