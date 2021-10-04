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


let ficha=new Ficha(0,0,35,1,ctxJuego);
ficha.draw();


let fichas=[];
fichas.push(ficha);
fichas.push(ficha);



function findClickedFigure(x,y){
    for(let i=0; i<fichas.length;i++){ 
        // console.log("if" +x);
        // console.log("if" +y);
        if(fichas[i].isPointInside(x,y)){
            return fichas[i];
        }
    }
}
//findClickedFigure(x,y);

let mousedown=false;
let imgclickeada;
function onMouseDown(e){
    isMouseDown=true;
    if(findClickedFigure(e.layerX,e.layerY)!=null){
        //console.log(clickFig);
        imgclickeada=findClickedFigure(e.layerX,e.layerY);
        console.log(imgclickeada);
    }
    ficha.draw();
    //console.log(imgclickeada);
}
// function isMouseInside(event){
//     for (var i = 0; i < fichas.length; i++) {
//         if (fichas[i].x < event.clientX
//           && (fichas[i].width + fichas[i].x > event.clientX)
//           && fichas[i].y < event.clientY
//           && (fichas[i].height + fichas[i].y > event.clientY)
//         ) {
//           objetoActual = fichas[i];
//           inicioY = event.clientY - objetos[i].y;
//           inicioX = event.clientX - objetos[i].x;
//         }
//       }
//     return objetoActual,inicioX,inicioY;
// }

juego.addEventListener("mousedown", onMouseDown);

