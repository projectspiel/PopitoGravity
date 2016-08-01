class Ball extends aggregation(Mass, Collidable)  {
    constructor(x, y, mass) {
        super(x, y, mass);
        this.r = 5;
        this.hitArea = new SAT.Circle(new SAT.Vector(x, y), this.r)
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

    collide(entity, collision) {
        let overlapX = collision.overlapV.x > 0 ? Math.ceil(collision.overlapV.x) : Math.floor(collision.overlapV.x),
            overlapY = collision.overlapV.y > 0 ? Math.ceil(collision.overlapV.y) : Math.floor(collision.overlapV.y);

        this.pos = this.pos.substract(new Vector(overlapX, overlapY));
        this.getHitArea().pos.x -= overlapX;
        this.getHitArea().pos.y -= overlapY;

        if (Math.abs(collision.overlapN.y) > Math.abs(collision.overlapN.x)) {
            this.vel.y *= -1
        } else {
            this.vel.x *= -1
        }
    }

    getHitArea() {
        return this.hitArea;
    }
}
