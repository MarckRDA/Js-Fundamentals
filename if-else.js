if (true){
	document.write('Entrou dentro do bloco if(verdadeiro)')
}else {
	document.write('Entrou dentro do bloco else (false)')
}

if (3 === 3) {
	document.write('São identicos!')
} else {
	document.write('Não são identicos')
}

if (3 !== 7) {
	document.write('Não são identicos!')
} else {
	document.write('São identicos')
}

if (14 > 8) {
	document.write('É maior')
} else {
	document.write('É menor')
}

if (5 < 13) {
	document.write('É menor')
} else {
	document.write('É maior')
}

if (3 >= 1) {
	document.write('É maior ou igual')
} else {
	document.write('É menor ou igual')
}


var nota = prompt('Digite a nota do aluno')
var media = 7

if (nota >= media){
	document.write('Aprovado')
} else {
	document.write('Reprovado')
}