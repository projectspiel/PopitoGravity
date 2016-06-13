class Collidable {
    initializer() {
        this.isCollidable = true
    }

    checkCollisions(entities) {
        this.getHitArea().pos.x = this.pos.x
        this.getHitArea().pos.y = this.pos.y
        let response = new SAT.Response()

        for(var e of entities) {
            if (this === e || !e.isCollidable) {
                continue
            }

            if (this.getHitArea() instanceof SAT.Polygon) {
                if (e.getHitArea() instanceof SAT.Polygon) {
                    SAT.testPolygonPolygon(this.getHitArea(), e.getHitArea(), response)
                } else if (e.getHitArea() instanceof SAT.Circle) {
                    SAT.testPolygonCircle(this.getHitArea(), e.getHitArea(), response)
                }
            } else if (this.getHitArea() instanceof SAT.Circle) {
                if (e.getHitArea() instanceof SAT.Polygon) {
                    SAT.testCircleCircle(this.getHitArea(), e.getHitArea(), response)
                } else if (e.getHitArea() instanceof SAT.Circle) {
                    SAT.testPolygonCircle(this.getHitArea(), e.getHitArea(), response)
                }
            } else {
                throw "unknown hitArea class"
            }

            if(response.overlap !== 0) {
                this.collide(e)
            }

            response.clear()
        }
    }

    collide(entitie) {
        throw "Collide must be defined"
    }

    getHitArea() {
        throw "getHitArea must be defined"
    }
}
