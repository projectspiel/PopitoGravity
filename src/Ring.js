function Ring(x,y) {
    this.pos = new Vector(x, y);
    this.mass = 1;
}

Ring.prototype.draw = function() {
    ctx.fillStyle = "rgb(0,200,0)";
    ctx.beginPath();
    //ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI*2, true);
    ctx.rect(this.pos.x, this.pos.y, 100, 10);
    ctx.closePath();
    ctx.fill();
};

Ring.prototype.computeForces = function() {

};

Ring.prototype.addForce = function() {

};

Ring.prototype.collideEdges = function() {

};

Ring.prototype.move = function() {

};


