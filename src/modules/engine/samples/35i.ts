import AbstractPetrolEngine from "../AbstractPetrolEngine";

export default
class ThirtyFiveI extends AbstractPetrolEngine {
    constructor(oilLevel: number, coolantLevel: number) {
        super(3, true, oilLevel, coolantLevel);
    }
}

