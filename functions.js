

var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')

var resultado = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui' + resultado + ' metros quadrados')


function calcularAreaTerreno (largura, comprimento){
	
	var area = largura * comprimento

	return area
}

//Funções anonimas e técnica wrapper

var exibirSaudação = function(nome) {
	document.write('Olá ' + ??? + ', tudo bem?')
}

exibirSaudação('Jorge')


//Funções callback

function exibirArtigo(id, callbackSucesso, callbackErro) {

	if (true) {
		callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas...')
	} else {
		callbackErro('Erro ao recuperar os dados')
	}
}


var callbackSucesso = function(titulo, descricao){
	document.write('<h1>' + titulo + '</h1>')
	document.write('<h1 />')
	document.write('<p>' + descricao + '</p>')

}

var callbackErro = function(erro) {
	document.write('<p><b>Erro:</b>' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)

