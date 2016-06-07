class Ball extends Mass {
    constructor(x, y, mass) {
        super(x, y, mass);
        this.r = 5;
    }

    draw() {
        /*var brightness = parseInt(this.force.module()*50);
         if(brightness > 255) brightness = 255;
         ctx.fillStyle = "rgb("+brightness+","+brightness+","+brightness+")";*/
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }

    collideEdges(width, height) {
        if (this.pos.x + this.r / 2 >= width) {
            this.pos.x = width - this.r / 2;
            this.vel.x *= -0.7;
        }

        if (this.pos.x - this.r / 2 <= 0) {
            this.pos.x = this.r / 2;
            this.vel.x *= -0.7;
        }

        if (this.pos.y + this.r / 2 >= height) {
            this.pos.y = height - this.r / 2;
            this.vel.y *= -0.7;
        }

        if (this.pos.y - this.r / 2 <= 0) {
            this.pos.y = this.r / 2;
            this.vel.y *= -0.7;
        }
    }
}
