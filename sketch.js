// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 25;
let rBolinha = dBolinha / 2;

//velocidade da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 10;
let altRaquete = 90;

//variáveis da raquete do oponente
let xRaqueteOp = 585;
let yRaqueteOp = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Sons do Jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}
  
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
 desenhoBolinha();
  movimentoBolinha();
  verificaColisãoBorda();
  mostrarRaquete(xRaquete,yRaquete);
  mostrarRaquete(xRaqueteOp,yRaqueteOp);
  movimentoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOp,yRaqueteOp)
  movimentoRaqueteOp();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  
  function bolinhaNaoFicaPresa(){
    if (xBolinha + rBolinha < 0){
    console.log('bolinha ficou presa');
    xBolinha = 300;
    }
}
}

function desenhoBolinha(){
  circle(xBolinha,yBolinha,dBolinha);
}

function movimentoBolinha (){
  xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
}

function verificaColisãoBorda(){
    if (xBolinha + rBolinha> width ||
     xBolinha - rBolinha< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + rBolinha> height ||
     yBolinha - rBolinha < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete(x,y){
  rect(x,y,compRaquete,altRaquete)
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
  yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
  yRaquete += 10;
   }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, compRaquete,altRaquete, xBolinha, yBolinha, rBolinha);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
}

function movimentoRaqueteOp(){
 if (keyIsDown(87)){
  yRaqueteOp -= 10;
  }
  if (keyIsDown(83)){
  yRaqueteOp += 10;
}
}

function incluiPlacar(){
  textAlign(CENTER)
  textSize(16);
  fill(color(0, 0, 255))
  rect (150, 10, 40, 20);
  rect(420, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(255);
  text(pontosDoOponente, 440, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
  }