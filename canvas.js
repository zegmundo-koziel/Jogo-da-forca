
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

function escreverLetraCorreta(i){
	tabuleiro.font = "bold 52px Inter";
	tabuleiro.lineCap = "round";
	tabuleiro.fillStyle = "#0a3871";
	tabuleiro.lineWidth = 6;
	let largura = 600/palavraSecreta.length;
	tabuleiro.fillText(palavraSecreta[i],425 +(largura*i),290);
	

}

function escreverLetraIncorreta(teclaAcionada, erros){
	tabuleiro.font = "bold 40px Inter";
	tabuleiro.lineCap = "round";
	tabuleiro.fillStyle = "#0a3871";
	tabuleiro.lineWidth = 6;
	tabuleiro.fillText(teclaAcionada, 400 +(40*(10 - erros)),350,40)
}

	function desenhaForca(){
		tabuleiro.lineWidth = 6;
		tabuleiro.moveTo(650,200);
		tabuleiro.lineTo(650,20);
		tabuleiro.lineTo(750,20);
		tabuleiro.lineTo(750,48);
		tabuleiro.stroke();
	}
	
	function desenhaCorpo(){
		tabuleiro.moveTo(750,84);
       	tabuleiro.lineTo(750,140);
        tabuleiro.stroke();
    }

	function desenhaBracoD(){
		//DESENHA BREÇO ESQUERDO
       	tabuleiro.moveTo(750,90);
       	tabuleiro.lineTo(720,110);
      	tabuleiro.stroke();
    }

    function desenhaBracoE(){
		tabuleiro.moveTo(750,90);
        tabuleiro.lineTo(780,110);
        tabuleiro.stroke();
    }

	function desenhaPernaD(){
		tabuleiro.moveTo(750,140);
		tabuleiro.lineTo(720,165);
		tabuleiro.stroke();
    }

    function desenhaPernaE(){
		tabuleiro.moveTo(750,140);
		tabuleiro.lineTo(780,165);
		tabuleiro.stroke();
	}
	function desenhaCabeca(){
		tabuleiro.moveTo(767,65);
		tabuleiro.arc(750, 67, 17, 0, 2 * 3.14);
	    tabuleiro.stroke();
	}

	function cabecaEnforcada(){
		
		tabuleiro.strokeStyle = "#f3f5fc";
        tabuleiro.beginPath();
		tabuleiro.lineWidth = 8;
		tabuleiro.moveTo(767,65);
		tabuleiro.arc(750, 67, 17, 0, 2 * 3.14);
	   	tabuleiro.stroke();

		tabuleiro.fillStyle = "#f3f5fc";
		tabuleiro.strokeStyle = "#0a3871";
        tabuleiro.beginPath();
		tabuleiro.lineWidth = 6;


		tabuleiro.moveTo(776,64);
		tabuleiro.arc(760, 70, 17, 0, 2 * 3.14);
		tabuleiro.moveTo(750,47);
		tabuleiro.lineTo(750,53);
		tabuleiro.stroke()

		tabuleiro.font='20px arial';
  		tabuleiro.lineWidth=4;
		tabuleiro.fillStyle='red';   
		tabuleiro.fillText('Que pena', 820, 80)	
		tabuleiro.fillText("Você perdeu!!!",820, 110);
		tabuleiro.fillText('..',780,80)
		tabuleiro.fillText('.', 784,85)
		//tabuleiro.font='30px arial';
		tabuleiro.lineWidth=8;
		tabuleiro.fillStyle='blue'; 
  		tabuleiro.fillText('A palavra era:',820, 140);
		tabuleiro.font='30px arial';
		tabuleiro.fillText(palavraSecreta,820, 180); 
		
	}

	function winner (){
		tabuleiro.font='50px arial';
		tabuleiro.lineWidth=8;
		tabuleiro.fillStyle='green'; 
  		tabuleiro.fillText('UAUU!',820, 80);
		tabuleiro.fillText("Você Venceu",820, 150); 
	}