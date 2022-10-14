var altura = 0 
var largura = 0
var vidas = 1
var tempo = 30

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil') {
	//1500
	criaMosquitoTempo = 3500
} else if(nivel === 'normal') {
	//1000
	criaMosquitoTempo = 2000
} else if (nivel === 'dificil') {
	//700
	criaMosquitoTempo = 850
}

function ajustaTamanhoPalcoJogo(){

	altura = window.innerHeight
	largura = window.innerWidth

	//console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	
	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)

function posicaoRandomica() {

	//remoção do mosquito anterior ( caso ele exista )
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imgs/coracao_vazio.png"
		
			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * altura) - 90
	var posicaoY = Math.floor(Math.random() * largura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//console.log(posicaoX, posicaoY)


	var mosquito = document.createElement('img')
	mosquito.src = 'imgs/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoY + 'px'
	mosquito.style.top = posicaoX + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)
	
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito-random'

		case 1:
			return 'mosquito-random2'

		case 2:
			return 'mosquito-random3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}