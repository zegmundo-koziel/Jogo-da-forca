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