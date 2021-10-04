class Ficha extends Figura{
  
    constructor(posX,posY,radius,fill,ctx){
        super(posX,posY,fill,ctx)
        this.radius=radius;
        this.fillStyle=fill;
        this.ctx=ctx;
    }

    
    draw(){
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.posX,this.posY,this.radius,0,2*Math.PI);
        this.ctx.fillStyle=this.cargarImagen(this.ctx);
        this.ctx.fill();
        if(this.resaltado==true){
            this.ctx.strokeStyle=this.resaltadoEstilo;
            this.ctx.lineWidth=5;
            this.ctx.stroke();
        }
        this.ctx.closePath();
    }

    getRadius(){
        return this.radius;
    }
    
  
    isPointInside(x,y){
        let _x=this.posX - x;
        let _y=this.posY - y;
        //console.log( Math.sqrt(_x*_x + _y*_y)< this.radius);
        return Math.sqrt(_x*_x + _y*_y)< this.radius;
    }
    


    cargarImagen(ctx){
        let imageObj = new Image();
        imageObj.src ='img/'+ this.fill+ '.jpeg';
        imageObj.draggable=true;
        imageObj.id=="event_drag"
        imageObj.id="imgFicha";
        imageObj.onload = function () {
            ctx.drawImage( imageObj, this.x, this.y,75,75);
       } 
    }
    
}