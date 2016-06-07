class Player {
    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.r = 10;
        this.mass = 0;

        var self = this;
        $(canvas).mousemove(function(e) {
            self.pos.x = e.pageX - $(this).offset().left;
            self.pos.y = e.pageY - $(this).offset().top;
        });
    }

    draw() {
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    };

    setMass(mass) {
        this.mass = mass;
    };
}
