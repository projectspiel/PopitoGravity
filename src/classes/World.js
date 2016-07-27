class World {
    constructor() {
        this.player = null;
        this.entities = [];
        this.intervalID = null;
        this.gravityForce = new Vector(0, 400);

        this.last_tick = this.get_tick();

        var self = this;
        $(canvas).mouseenter(function(e) {
            self.player = new Player(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top);
        });

        $(canvas).mouseleave(function(e) {
            self.player = null;
        });

        $(canvas).mousedown(function(e) {
            e.preventDefault(); // Or the text selection cursor will show up on click-and-drag in Chrome
            //self.player.mass *= BOOST_FACTOR;
            self.player.setMass(1000);

            self.player.r += 1;
        });

        $(canvas).mouseup(function(e) {
            self.player.setMass(0);
            self.player.r -= 1;
        });
    }

    step() {
        var tick = this.get_tick();
        dt = (tick - this.last_tick) * TIMESCALE;
        this.last_tick = tick;

        this.clear();
        for(var e1 of this.entities) {
            if (e1 instanceof Ball) {
                e1.computeForces([].concat([this.player]));
            }
            e1.addForce(this.gravityForce);
            if (typeof e1.checkCollisions === 'function') {
                e1.checkCollisions(this.entities);
            }
        }

        for(var e2 of this.entities) {
            e2.move();
            if (e2.collideEdges) {
                e2.collideEdges(canvas.width, canvas.height);
            }
            e2.draw();

            if(DEBUG) {
                e2.vel.draw(e2.pos, "vel"+m, '#fff');
                e2.force.draw(e2.pos, "force"+m, '#f00');
            }
        }

        if(this.player !== null) {
            this.player.draw();
        }
    };

    addBall() {
        this.entities.push(new Ball(canvas.width/2, 300, 2));
    };

    start()	{
        var that = this;
        this.intervalID = window.setInterval(function() {
            that.step();
        }, INTERVAL);
    };

    stop() {
        window.clearInterval(this.intervalID);
    };

    initLevel() {
        for (let x = 0 ; x < 7 ; x++) {
            for (let y = 0 ; y < 5 ; y++) {
                let block = new Block(25 + x * 100, 25 + y * 50, true);
                this.entities.push(block);
            }
        }
    }

    clear() {
        if (MOTION_BLUR) {
            ctx.save();
            ctx.fillStyle = "rgba(0, 0, 0, .05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
        } else {
            canvas.width = canvas.width;
        }
    }

    get_tick() {
        return new Date().getTime();
    }

}
