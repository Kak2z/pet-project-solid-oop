import AbstractElectricEngine from "../AbstractElectricEngine";

export default
class ThirtyE extends AbstractElectricEngine {
    constructor(coolantLevel: number) {
        super(190, coolantLevel);

        if (!coolantLevel || coolantLevel < 3) {
            throw new Error("Coolant level is low. Overheat is possible");
        }
    }
}

