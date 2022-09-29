function desenharCanvas(){
	tabuleiro.lineWidth = 8;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.fillStyle = "#f3f5fc";
	tabuleiro.strokeStyle = "#0a3871";

	tabuleiro.fillRect(0,0, 1200,400);
	tabuleiro.beginPath();
	tabuleiro.moveTo(550,200);
	tabuleiro.lineTo(850,200);
	tabuleiro.stroke();
	tabuleiro.closePath();
}

function desenharLinhas(){
	tabuleiro.lineWidth = 3;
	tabuleiro.lineCap = "round";
	tabuleiro.lineJoin = "round";
	tabuleiro.fillStyle = "#f3f5fc";
	tabuleiro.strokeStyle = "#0a3871";
	

	let largura = 600/palavraSecreta.length;
	for(let i = 0; i< palavraSecreta.length; i++){
		tabuleiro.moveTo(420+(largura*i),300);
		tabuleiro.lineTo(460+(largura*i),300);
	}
	tabuleiro.stroke();
	tabuleiro.closePath();

}

function escreverLetraCorreta(index){
	tabuleiro.font = "bold 52px Inter";
	tabuleiro.lineCap = "round";
	tabuleiro.fillStyle = "#0a3871";
	tabuleiro.lineWidth = 6;
	let largura = 600/palavraSecreta.length;
	tabuleiro.fillText(palavraSecreta[index],425 +(largura*index),290);
	

}

function escreverLetraIncorreta(letra, erros){
	tabuleiro.font = "bold 40px Inter";
	tabuleiro.lineCap = "round";
	tabuleiro.fillStyle = "#0a3871";
	tabuleiro.lineWidth = 6;
	tabuleiro.fillText(letra, 400 +(40*(10 - erros)),350,40)
}

/*
function desenhaLetras(){
	tabuleiro.font='40px arial';
	tabuleiro.lineWidth=6;  
	tabuleiro.fillText(palavraSecreta,450,280);
	tabuleiro.strokeText(palavraSecreta,450,280);
}*/
