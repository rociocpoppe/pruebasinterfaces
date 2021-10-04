let tablero = document.getElementById("Tablero");
let juego= document.getElementById("Juego");
let ctx = tablero.getContext('2d');
let ctxJuego = juego.getContext('2d');

let casillero = 100;
// let mitad = casillero / 2;
tablero.height = casillero * 7;
tablero.width = casillero * 7;
juego.height = 700;
juego.width = 400;

let mousedown=false;

let tableroJuego = [];
for(let i = 0; i < 7; i++){
    tableroJuego[i] = new Array(6);//agrega 6 posiciones vacias al arreglo (el alto del tablero)
    //console.log(tableroJuego[i]);
}

let game= new Juego(ctxJuego,juego.width, juego.height);
game.dibujarJuego();

let tablerot=new Tablero(ctx,tablero.width,tablero.height);
tablerot.dibujarTablero();

// function elegirFicha(){
//     let select = document.getElementById("selectFicha").value; 
//     if(select == "value1"){
//         img='1';
//     }else if(select == "value2"){
//         img='2';
//     }else if(select == "value3"){
//         img='3';
//     }else{
//         img='4';
//     }
//     return  'img/'+img+ '.jpeg';
// }


let ficha=new Ficha(40,40,35,1,ctxJuego);
ficha.draw();


let fichas=[];
fichas.push(ficha);
fichas.push(ficha);

function findClickedFigure(x,y){
    for(let i=0; i<fichas.length;i++){ 
        if(fichas[i].isPointInside(x,y)){
            return fichas[i];
        }
    }
}
//findClickedFigure(x,y);

let imgclickeada;
function onMouseDown(e){
    mousedown=true;
    //console.log("mousedown");
    let clicked=findClickedFigure(e.layerX,e.layerY);
    if(clicked!=null){
        imgclickeada=clicked;
        imgclickeada=new Ficha(e.layerX,e.layerY,35,1,ctxJuego);
        //console.log(imgclickeada);
    }
    imgclickeada.draw();
}


function onMouseMove(e){ 
   // console.log("mousemove");
    if(mousedown && imgclickeada){ 
        clear();
        imgclickeada=new Ficha(e.layerX,e.layerY,35,1,ctxJuego);
        imgclickeada.draw();
    }
}

function clear() {
    ctxJuego.clearRect(0, 0, juego.width, juego.height);
    ctxJuego.fillRect(200, 200, 0, 200);
  }

function oMousePos(canvas, e) {
    var ClientRect = canvas.getBoundingClientRect();
}

function onMouseUp(e){
    mousedown=false;
}


function onMouseEnter(){
    console.log("entro a tablero");
}
juego.addEventListener("mousedown", onMouseDown);
juego.addEventListener("mousemove", onMouseMove);
juego.addEventListener("mouseup", onMouseUp);
tablero.addEventListener("mouseenter", onMouseEnter);

