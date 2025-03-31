import AbstractPetrolEngine from "../AbstractPetrolEngine";

export default
class FortyI extends AbstractPetrolEngine {
    constructor(oilLevel: number, coolantLevel: number) {
        super(3, true, oilLevel, coolantLevel);
    }

    getHP(): number { // мотор 40i має додаткове форсування
        return super.getHP() * 1.2; // Умножаем на 2 дополнительным шагом
    }
}

