import AbstractCar from "../AbstractCar";
import ThirtyFiveI from "../../engine/samples/35i";
import Luxury from "../../trim/samples/Luxury";
import Five from "../../body/samples/Five";
import AWDAutomatic from "../../transmission/samples/AWDAutomatic";
import Enkei from "../../wheel/samples/Enkei";

export default
class FiveThirtyFiveIXLuxury extends AbstractCar {
    constructor() {
        const body = new Five();
        const engine = new ThirtyFiveI(5, 5);
        const transmission = new AWDAutomatic();
        const wheel = new Enkei();
        const trim = new Luxury();

        super(body, engine, transmission, wheel, trim);
    }
}