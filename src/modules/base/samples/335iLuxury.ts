import AbstractCar from "../AbstractCar";
import ThirtyFiveI from "../../engine/samples/35i";
import RWDAutomatic from "../../transmission/samples/RWDAutomatic";
import Three from "../../body/samples/Three";
import Borbet from "../../wheel/samples/Borbet";
import Luxury from "../../trim/samples/Luxury";

export default
class ThreeThirtyFiveILuxury extends AbstractCar {
    constructor() {
        const body = new Three();
        const engine = new ThirtyFiveI(5, 5);
        const transmission = new RWDAutomatic();
        const wheel = new Borbet();
        const trim = new Luxury();

        super(body, engine, transmission, wheel, trim);
    }
}