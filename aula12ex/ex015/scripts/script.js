function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fAno.value.lenght == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') /* substitui a tag no html*/

        if (fSex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/crianca_m.png')
            } else if (idade < 31) {
                img.setAttribute('src', 'imagens/jovem_m.png')
            } else if (idade < 61) {
                img.setAttribute('src', 'imagens/adulto_m.png')
            } else {
                img.setAttribute('src', 'imagens/idoso_m.png')
            }
        } else if (fSex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/crianca_f.png')
            } else if (idade < 31) {
                img.setAttribute('src', 'imagens/jovem_f.png')
            } else if (idade < 61) {
                img.setAttribute('src', 'imagens/adulto_f.png')
            } else {
                img.setAttribute('src', 'imagens/idoso_f.png')
            }
        }
        img.style.borderRadius='50%'

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}