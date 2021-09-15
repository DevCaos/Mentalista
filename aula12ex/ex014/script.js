function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    if (minuto < 10){
        minuto = "0" + minuto
  }
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#e6a773'
    }  else if (hora >=12 && hora <= 18) {
        // boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#efa88c'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#073260'
        // boa noite
    }
}


