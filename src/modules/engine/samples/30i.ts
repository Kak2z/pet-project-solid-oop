import AbstractPetrolEngine from "../AbstractPetrolEngine";

export default
class ThirtyI extends AbstractPetrolEngine {
    constructor(oilLevel: number, coolantLevel: number) {
        super(2, true, oilLevel, coolantLevel);
    }
}

