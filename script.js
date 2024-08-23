

let mensagens = []

let tabela = document.getElementById("mensagens")

function criarMensagem() {
    
    let idusuario = document.getElementById("idusuario").value
    let mensagem = document.getElementById("mensagem").value
    let meuid = document.getElementById("meuid").value

    mensagens.push({
        'idusuario': idusuario,
        'mensagem': mensagem,
        'remetente': meuid
    })
    document.getElementById("mensagem").value = ""
    document.getElementById("idusuario").value = ""

    let msgjson = JSON.stringify(mensagens, null, 2);
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
