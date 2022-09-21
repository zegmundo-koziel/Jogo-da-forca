//Seletores
let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "PROGRAMADOR", "LOGICA", "FRONTAND"];
let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";
let novaPalavraSecreta = document.getElementById('salvar-iniciar');
let inputPalavra = document.querySelector("#input-nova-palavra")
let letrasClicadas = [];



function addNovaPalavra(){
	if (palavras.includes(inputPalavra.value.toUpperCase())){
		document.querySelector("#input-nova-palavra").value="";
		iniciarJogo();
		} else{
			palavras.push(inputPalavra.value.toUpperCase());
    		document.querySelector("#input-nova-palavra").value="";
    		console.log(palavras);
    		iniciarJogo();

			}    
}

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
	letrasClicadas = [];
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

function teclaClicada(){
	if (letrasClicadas.includes(event.key.toUpperCase())){
		} else{
			letrasClicadas.push(event.key.toUpperCase());
    		console.log(letrasClicadas);
    			}    
}


document.body.onkeypress = teclaClicada;
  

