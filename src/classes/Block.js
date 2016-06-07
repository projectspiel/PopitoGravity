class Block extends Mass {
    constructor(x, y, pinned) {
        super(x, y);
        this.pos = new Vector(x, y);
        this.mass = 0;
        this.pinned = pinned;
    }

    draw() {
        ctx.fillStyle = "rgb(0,200,0)";
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, 50, 20);
        ctx.closePath();
        ctx.fill();
    }

    move() {
        if (this.pinned) {
            return;
        }
        super.move();s
    }
}
