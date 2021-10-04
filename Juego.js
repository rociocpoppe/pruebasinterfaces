class Juego{

    constructor(ctx, width, height){
        this.ctx=ctx;
        this.width=width;
        this.height=height;
    }



    dibujarJuego(){
        this.ctx.fillStyle = "#999fff";
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}