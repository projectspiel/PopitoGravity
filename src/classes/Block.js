class Block extends Mass {
    constructor(x, y) {
        super(x, y);
        this.pos = new Vector(x, y);
        this.mass = 1;
    }

    draw() {
        ctx.fillStyle = "rgb(0,200,0)";
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, 50, 20);
        ctx.closePath();
        ctx.fill();
    }
}
