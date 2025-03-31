import AbstractDieselEngine from "../AbstractDieselEngine";

export default
class ThirtyD extends AbstractDieselEngine {
    constructor(oilLevel: number, coolantLevel: number) {
        super(2, true, oilLevel, coolantLevel);
    }
}

