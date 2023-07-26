var nivel = window.location.href
nivel = nivel.slice(nivel.indexOf('?') + 1)

var coracoes = document.querySelectorAll('.coracoes')

var vida = 0

var tempo = 15

velocidade = 1500

if(nivel == 'normal'){
    velocidade = 1500
    console.log(velocidade)
} else if(nivel == 'dificil'){
    velocidade = 1000
    console.log(velocidade)
} else {
    velocidade = 750
    console.log(velocidade)
}



setInterval(() => {
    if(tempo == 0){
        window.location.href = 'vitoria.html'
    }
    tempo -=1
    var textempo = document.getElementById('tempo')
    textempo.innerText = 'Tempo restante: ' + tempo
}, 1000)


setInterval(() => {


    criarmosquito(posicaox(), posicaoy(), tamanhodomosquito(), lado())

    
}, velocidade)



function criarmosquito(px, py, tm, ld){
    if(document.getElementById('mosquito') == null){
        let mosquito = document.createElement('img')
        mosquito.id = 'mosquito'
        mosquito.src = 'images/mosquito.png'
        mosquito.style.position = 'absolute'
        mosquito.style.transform = ld
        mosquito.className = tm 
        mosquito.style.left = px + 'px'
        mosquito.style.top = py + 'px'

        let body = document.querySelector('body')
        body.appendChild(mosquito)

        mosquito.addEventListener('click', () =>{
            mosquito.remove()
            
        })

    } else {
        if(vida == 2) {
            window.location.href = 'derrota.html'
        }
        let mosquito = document.getElementById('mosquito')
        mosquito.remove()
        coracoes[vida].src = 'images/coracao_vazio.png'
        vida +=1

    }
}




function tamanhodomosquito(){
    let tm = Math.floor(Math.random() * 3)
    switch (tm){
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'
        
        case 3:
            return 'mosquito3'
        
        default:
            return 'mosquito1'
    }
}

function lado(){
    let ld = Math.floor(Math.random() * 3)
    switch (ld){
        case 0:
            return 'scaleX(-1)'
        
        case 1:
            return ''
        
        case 3:
            return 'scaleX(-1)'
        
        default:
            return 'scaleX(-1)'
    }
}


function posicaox(){
    var px = (window.innerWidth * Math.random()) - 90


    px = px < 0 ? 100 : px
    return px
}


function posicaoy(){
    var py = (window.innerHeight * Math.random()) - 200

    py = py < 0 ? py* -1 : py
    console.log(py)
    return py
}