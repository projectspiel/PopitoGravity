const G = 200000;
const DISTANCE_THRESHOLD = 50;
const INTERVAL = 10;
const TIMESCALE = 1;
const DEBUG = false;
const NUM_MASSES = 10;
const MOTION_BLUR = false;
const BOOST_FACTOR = 10;

var dt = null;
var canvas = null;
var ctx = null;
var world = null;

function init() {
	world = new World();
	world.addBall();
    world.initLevel();
}

var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
};
