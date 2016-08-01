class Collidable {
    initializer() {
        this.isCollidable = true
    }

    checkCollisions(entities) {
        this.getHitArea().pos.x = this.pos.x
        this.getHitArea().pos.y = this.pos.y
        let response = new SAT.Response()

        for(var e of entities) {
            let collided = false
            if (this === e || !e.isCollidable) {
                continue
            }

            if (this.getHitArea() instanceof SAT.Polygon) {
                if (e.getHitArea() instanceof SAT.Polygon) {
                    collided = SAT.testPolygonPolygon(this.getHitArea(), e.getHitArea(), response)
                } else if (e.getHitArea() instanceof SAT.Circle) {
                    collided = SAT.testPolygonCircle(this.getHitArea(), e.getHitArea(), response)
                }
            } else if (this.getHitArea() instanceof SAT.Circle) {
                if (e.getHitArea() instanceof SAT.Polygon) {
                    collided = SAT.testCirclePolygon(this.getHitArea(), e.getHitArea(), response)
                } else if (e.getHitArea() instanceof SAT.Circle) {
                    collided = SAT.testCircleCircle(this.getHitArea(), e.getHitArea(), response)
                }
            } else {
                throw "unknown hitArea class"
            }

            if(collided) {
                this.collide(e, response)
            }

            response.clear()
        }
    }

    collide(entity, collision) {
        throw "Collide must be defined"
    }

    getHitArea() {
        throw "getHitArea must be defined"
    }
}
