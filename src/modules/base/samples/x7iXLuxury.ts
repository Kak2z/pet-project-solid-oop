import AbstractCar from "../AbstractCar";
import Borbet from "../../wheel/samples/Borbet";
import Luxury from "../../trim/samples/Luxury";
import AWDAutomatic from "../../transmission/samples/AWDAutomatic";
import xSeven from "../../body/samples/xSeven";
import FiftyI from "../../engine/samples/50i";

export default
class xSevenIXLuxury extends AbstractCar {
    constructor() {
        const body = new xSeven();
        const engine = new FiftyI(5, 5);
        const transmission = new AWDAutomatic();
        const wheel = new Borbet();
        const trim = new Luxury();

        super(body, engine, transmission, wheel, trim);
    }
}