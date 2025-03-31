import AbstractCar from "../AbstractCar";
import ThirtyFiveI from "../../engine/samples/35i";
import Borbet from "../../wheel/samples/Borbet";
import Luxury from "../../trim/samples/Luxury";
import Five from "../../body/samples/Five";
import RWDAutomatic from "../../transmission/samples/RWDAutomatic";

export default
class FiveThirtyFiveILuxury extends AbstractCar {
    constructor() {
        const body = new Five();
        const engine = new ThirtyFiveI(5, 5);
        const transmission = new RWDAutomatic();
        const wheel = new Borbet();
        const trim = new Luxury();

        super(body, engine, transmission, wheel, trim);
    }
}