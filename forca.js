//Seletores
let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "PROGRAMADOR", "LOGICA", "FRONTAND"];
let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";

function escolherPalavraSecreta(){
	let palavra = palavras[Math.floor(Math.random() * palavras.length)];
	palavraSecreta = palavra;
	console.log(palavraSecreta);
	}

function iniciarJogo(){
	document.getElementById('div-desaparece').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "none";
	document.getElementById('div-aparece-forca').style.display = "block";
	escolherPalavraSecreta();
	desenharCanvas();
	desenharLinhas();
}
function novaPalavra() {
	document.getElementById('div-desaparece').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "block";
}

function recarregar(){
	document.getElementById('div-aparece-forca').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "none";
	document.getElementById('div-desaparece').style.display = "block";
}

recarregar();

function teste(){
alert ("clicou");
}