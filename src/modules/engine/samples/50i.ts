import AbstractPetrolEngine from "../AbstractPetrolEngine";

export default
class FiftyI extends AbstractPetrolEngine {
    constructor(oilLevel: number, coolantLevel: number) {
        super(4.4, true, oilLevel, coolantLevel);
    }
}

