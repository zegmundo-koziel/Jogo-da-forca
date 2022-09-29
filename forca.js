//Seletores
let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "PROGRAMADOR", "LOGICA", "FRONTAND"];
let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";
let novaPalavraSecreta = document.getElementById('salvar-iniciar');
let inputPalavra = document.querySelector("#input-nova-palavra");
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let letras = [];
let erros = 8;


function addNovaPalavra(){

	if(inputPalavra.value==""){
		iniciarJogo();
		}
		else if (palavras.includes(inputPalavra.value.toUpperCase())){
		document.querySelector("#input-nova-palavra").value="";
		iniciarJogo();
			}
			else{
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

//veirfica se é letra ou numero
/*
function verificarLetra(key){
	let estado = false;
	if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
		return estado;
		} 
		else if (letras.includes(key)) {	
			letras.push(key);
			
		} else {
			estado = true;
			console.log(letras)
				return estado;

			
			}
					
}
	
*/

function adcionarletraIncorreta(){
	erros -= 1;
	console.log(erros)
}

function iniciarJogo(){
	
	document.getElementById('div-desaparece').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "none";
	document.getElementById('div-aparece-forca').style.display = "block";
	escolherPalavraSecreta();
	desenharCanvas();
	desenharLinhas();
	//desenhaLetras();
	document.onkeydown = teclaClicada;
	
}

function teclaClicada(e){
	let teclaAcionada = e.key.toUpperCase();
	if(letras.includes(teclaAcionada)){
		} 
		else if(alphabet.includes(teclaAcionada) ){
				letras.push(teclaAcionada)
				console.log(letras)
			}
}
	
	
	
	



	//letrasClicadas = [];
/*	document.onkeydown = (e) => {
		let letra = e.key.toUpperCase();

		if(verificarLetra(letra)  && palavraSecreta.includes(letras)){
			for(let i = 0; i < palavraSecreta.length; i++ ){
				if(palavraSecreta[i] == letra){
					escreverLetraCorreta(i);
				}
			}

		}
		else{
			adcionarletraIncorreta(letra);
			escreverLetraIncorreta(letra, erros);


		}

	}
	*/


function novaPalavra() {
	document.getElementById('div-desaparece').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "block";
}

function recarregar(){
	document.getElementById('div-aparece-forca').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "none";
	document.getElementById('div-desaparece').style.display = "block";
	document.onkeydown = 'none';
}

recarregar();








/*

function verificarLetra(key){
	let estado = false;
	if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
		return estado;
		} 
		else if (letras.includes(key)) {	
			letras.push(key);
			
		} else {
			estado = true;
			console.log(letras)
				return estado;

			
			}





if (ignorarTeclas.includes(event.key)){
}
	else if (letrasClicadas.includes(event.key.toUpperCase())){
	} 
		else{
		letrasClicadas.push(event.key.toUpperCase());
		console.log(letrasClicadas);
		   }
		   
console.log(palavraSecreta.indexOf(teclasAcionada) != -1); 


*/		
   






function teste(){
	console.log("clicou");		

}
