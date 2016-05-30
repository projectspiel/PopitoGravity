class Block{
    constructor(x,y) {
        this.pos = new Vector(x, y);
        this.mass = 1;
    }

    draw () {
        ctx.fillStyle = "rgb(0,200,0)";
        ctx.beginPath();
        //ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI*2, true);
        ctx.rect(this.pos.x, this.pos.y, 50, 20);
        ctx.closePath();
        ctx.fill();
    }

    computeForces () {

    }

    addForce () {

    }

    collideEdges () {

    }

    move () {

    }
}


