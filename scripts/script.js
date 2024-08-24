

let pessoas = []

let tabela = document.getElementById("mensagens")

function criarMensagem() {
    
    let idusuario = document.getElementById("idusuario").value
    let mensagem = document.getElementById("mensagem").value
    let meuid = document.getElementById("meuid").value


    if(pessoas.length == 0){
        pessoas.push({
            'idusuario': idusuario,
            'mensagem': [{
                'mensagens': mensagem
            }],
            'remetente': meuid
        })
    }else{
    pessoas.forEach(pessoa =>{
        console.log("ta funcinando")
            if (pessoa.idusuario == idusuario){
                pessoa.mensagem.push({
                    'mensagem': mensagem
                })

                // tentativa nova

            }else if((pessoas.find(usuario => usuario.idusuario == idusuario)) == undefined){
                    console.log("n tem ngm c o msm nome")
                    pessoas.push({
                        'idusuario': idusuario,
                        'mensagem': [{
                            'mensagens': mensagem
                        }],
                        'remetente': meuid
                    })
                }

            // nao dava certo, quando tem mais de uma pessoa sempre vai ser diferente de alguem

            /*else if(pessoa.idusuario != idusuario){
                pessoas.push({
                    'idusuario': idusuario,
                    'mensagem': [{
                        'mensagens': mensagem
                    }],
                    'remetente': meuid
                })
            }*/
    })
    }

    document.getElementById("mensagem").value = ""
    document.getElementById("idusuario").value = ""

    let msgjson = JSON.stringify(pessoas, null, 2);
    localStorage.setItem('conteudomsg', msgjson)
}

function recarregar(){

    let conteudo = ""
    let meuid = document.getElementById("meuid").value
    let msg = JSON.parse(localStorage.getItem('conteudomsg'))
    console.log(msg)

    msg.forEach(id => {
        if(meuid == id.idusuario){
            conteudo = id.mensagem
            tabela.innerHTML += `<tr><td> ${id.remetente}: </td> <td> ${conteudo} </td> </tr>`
        }
        }
    )
}
