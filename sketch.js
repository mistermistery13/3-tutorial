var jugador,velocidad_jugador = 20,nivel,direccion_bala = "arriba";
function preload(){

}
function setup(){
jugador = createSprite (windowWidth/2,windowHeight/2);
jugador.scale=0.3;
jugador.shapeColor = "lime";
}
function draw(){
createCanvas(windowWidth,windowHeight);
background("gray");

movimiento();
accesos();
drawSprites();
}
function accesos(){
if (keyDown ("0")){
    nivel = 0
    segundos = 15
}if (nivel === 0){
    tutorial();
}
if (keyDown ("1")){
    nivel = 1;
}if (nivel === 1){
    nivel_1();
}

}
function movimiento(){
    textSize(20);
    fill("#3AF876")
    text ("VELOCIDAD " + velocidad_jugador,10,windowHeight - 20);
    if (keyDown("SHIFT")){
        velocidad_jugador += 1;
        console.log(velocidad_jugador);
    }
    if (keyDown("BACKSPACE")){
        velocidad_jugador -= 1;
        console.log(velocidad_jugador);
    }
    if (velocidad_jugador > 60){
        velocidad_jugador = 60;
    }else if (velocidad_jugador < 0){
        velocidad_jugador = 0;
    }

if (keyDown("A")){
        jugador.x -= velocidad_jugador;
        direccion_bala = "izquierda";
    }
if (keyDown("D")){
        jugador.x += velocidad_jugador;
        direccion_bala = "derecha";
    }
if (keyDown("W")){
        jugador.y -= velocidad_jugador;
        direccion_bala = "arriba";
    }
if (keyDown("S")){
        jugador.y += velocidad_jugador;
        direccion_bala = "abajo";
    }
if (keyDown("LEFT")){
        jugador.x -= velocidad_jugador;
        direccion_bala = "izquierda";
    }
if (keyDown("RIGHT")){
        jugador.x += velocidad_jugador;
        direccion_bala = "derecha";
    }
if (keyDown("UP")){
        jugador.y -= velocidad_jugador;
        direccion_bala = "arriba";
    }
if (keyDown("DOWN")){
        jugador.y += 20;
        direccion_bala = "abajo";
    }
    if (keyWentUp("SPACE")){
        disparar();
    }
    if (keyWentUp("ENTER")){
        disparar();
    }


    if(jugador.x > windowWidth - 15){
        jugador.x = windowWidth - 15;
    }
    if(jugador.x < 0 + 15){
        jugador.x = 0 + 15;
    }
    if(jugador.y > windowHeight - 15){
        jugador.y = windowHeight - 15;
    }
    if(jugador.y < 0 + 15){
        jugador.y = 0 + 15;
    }

}
function disparar(){
if (direccion_bala === "izquierda"){
    var bala = createSprite (jugador.x,jugador.y,20,20);
    bala.shapeColor = "red";
    bala.velocityX -= 30;
}
if (direccion_bala === "derecha"){
    var bala = createSprite (jugador.x,jugador.y,20,20);
    bala.shapeColor = "red";
    bala.velocityX += 30;
}
if (direccion_bala === "arriba"){
    var bala = createSprite (jugador.x,jugador.y,20,20);
    bala.shapeColor = "red";
    bala.velocityY -= 30;
}
if (direccion_bala === "abajo"){
    var bala = createSprite (jugador.x,jugador.y,20,20);
    bala.shapeColor = "red";
    bala.velocityY += 30;
}
}
function lluvia_de_cuchillos(){
if (frameCount % cooldown_cuchillos === 0){
    var cuchillo = createSprite (random(15,windowWidth - 15),-30,30,60);
    cuchillo.shapeColor = "red";
    cuchillo.velocityY = velocidad_cuchillos;
}

}
function tutorial (){
if(frameCount % 30 === 0){
    segundos += 1;
}
console.log(segundos);
if (segundos >= 0 && segundos <= 2){
textSize(40);
fill("yellow");
text("BIENVENIDO/A AL TUTORIAL",jugador.x - 250,jugador.y - 40);
}
if (segundos >= 3 && segundos <= 5){
    textSize(40);
    fill("yellow");
    text("ANTES QUE NADA",jugador.x - 200,jugador.y - 80);
    text("APRENDAMOS LOS MOVIMIENTOS BASICOS",jugador.x - 450,jugador.y - 40);
    }
    if (segundos >= 6 && segundos <= 9){
        textSize(40);
        fill("yellow");
        text("USA W - A - S - D PARA MOVERTE",jugador.x - 300,jugador.y - 80);
        text("( tambien puedes usar las flechas )",jugador.x - 300,jugador.y - 40);
        }
        if (segundos >= 10 && segundos <= 13){
            textSize(40);
            fill("yellow");
            text("AHORA PRESIONA",jugador.x - 200,jugador.y - 120);
            fill ("white");
            text("( SPACE - ENTER )",jugador.x - 200,jugador.y - 80);
            fill("yellow");
            text("PARA DISPARAR",jugador.x - 200,jugador.y - 40);
            }
            if (segundos >= 14 && segundos <= 16){
                textSize(40);
                fill("yellow");
                text("LAS BALAS IRAN A DONDE ",jugador.x - 250,jugador.y - 120);
                fill ("lime");
                text("TU PERSONAJE",jugador.x - 150,jugador.y - 80);
                fill("yellow");
                text("ESTE MIRANDO",jugador.x - 150,jugador.y - 40);
                }
            if (segundos >= 17 && segundos <= 20){
                textSize(40);
                fill("yellow");
                text("TAMBIEN PUEDES CONTROLAR TU VELOCIDAD",jugador.x - 420,jugador.y - 120);
                text("PRESIONANDO",jugador.x - 120,jugador.y - 80)
                fill ("white");
                text("( SHIFT - BACKSPACE )",jugador.x - 200,jugador.y - 40);
                fill("yellow");
                }
}
function nivel_1(){
cooldown_cuchillos = 50;
velocidad_cuchillos = 5;
lluvia_de_cuchillos();

} 