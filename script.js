function checar() {
    var ano = window.document.querySelector('input.ano-nasc') //seleciona o ano que a pessoa digitou
    var status = window.document.querySelector('div#resultado') //seleciona o parágrafo que vai exibir o resultado
    var a = Number(ano.value) //converte o conteúdo da string "ano-nasc" em número
    var now = new Date()
    var ano = now.getFullYear()
    var idade = ano - a

    status.innerHTML = `<p>Você nasceu em <strong>${a}</strong> e tem <strong>${idade} anos</strong> de idade.</p>` 
    
        if (a >= 1952 && a <= 2003) { //se nasceu entre os anos de 1952 e 2003, escreva "seu voto obrigatório"
            status.innerHTML += '<p class="resultO"><strong>Seu voto é obrigatório!</strong></p>'
        } else { //senão
            if (a == 2004 || a == 2005) { //se nasceu em 2004 ou 2005, escreva "seu voto é opcional" (a > 2003 && a <= 2005)
                status.innerHTML += '<p class="resultF"><strong>Seu voto é opcional.</strong></p>' 
            } else { //senão 
                if (a <= 1951) { //se nasceu até 1951, escreva "seu voto passou a ser opcional novamente"
                    status.innerHTML += '<p class="resultF"><strong>Seu voto passou a ser opcional novamente.</strong><p>'
                } else { //senão, ou seja, se nasceu de 2006 para frente, escreva "você ainda não pode votar"
                    status.innerHTML += '<p class="resultN"><strong>Você ainda não pode votar.</strong></p>'
                }
            }
        }
    } 