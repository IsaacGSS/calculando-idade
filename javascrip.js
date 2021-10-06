function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtanos')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano || fano.value < 0){
        alert('[ERROR] verifique as informaçẽs pedidas')
    } else  {
        var fsex = document.getElementsByName('radsex')
        var idade = Number(ano - fano.value) 
        var genero = ''
        var img = document.getElementById('img')

        if(fsex[0].checked){

            if(idade > 0 && idade < 10){
                // HOMEN

                // criança
                img.src = 'imagens/homen_criança.png'
            }else if(idade > 10 && idade < 24){
                // jovem
                img.src = 'imagens/homen_jovem.png'
            }else if(idade > 24 && idade < 54){
                // adulto
                img.src = 'imagens/homen_adulto.png'
            }else if(idade > 54){
                // idoso
                img.src = 'imagens/homen_idoso.png'
            }

            res.innerHTML = `verificamos que vocè é uma homen de ${idade} anos de idade`

        } else if(fsex[1].checked){
            // MULHER

            if(idade > 0 && idade < 10){
                // criança
                img.src = 'imagens/mulher_crriança.png'
            }else if(idade > 10 && idade < 24){
                // jovem
                img.src = 'imagens/mulher_jovem.png'
            }else if(idade > 24 && idade < 54){
                // adulto
                img.src = 'imagens/mulher_adulta.png'
            }else if(idade > 54){
                // idoso
                img.src = 'imagens/mulher_idoso.png'
            }

            res.innerHTML = `verificamos que vocè é uma mulher de ${idade} anos de idade`
        }
        // res.innerHTML = `verificamos que vocè é uma mulher de ${idade} anos de idade`
        
    }
}