import AbstractEngine from "./AbstractEngine";

export default
abstract class AbstractPetrolEngine extends AbstractEngine {
    // public type: 'petrol' | 'diesel' | 'electric';
    private readonly _volume: number;
    private readonly _hasTurbo: boolean;
    private readonly _oilLevel: number;
    private readonly _coolantLevel: number;

    protected constructor(volume: number, hasTurbo: boolean, oilLevel: number, coolantLevel: number) {
        super('petrol');
        this._volume = volume;
        this._hasTurbo = hasTurbo;
        this._oilLevel = oilLevel;
        this._coolantLevel = coolantLevel;

        if (oilLevel < volume) {
            throw new Error('Oil level must be equal to the engine volume');
        }
        if (coolantLevel < volume) {
            throw new Error('Coolant level must be equal to the engine volume');
        }
    }

    getHP(): number {
        let baseHP = this._volume * 80;
        if (this._hasTurbo) {
            baseHP *= 1.3;
        }
        return baseHP;
    }

    getWeight(): number {
        return this._volume * 150 + this._oilLevel + this._coolantLevel + (this._hasTurbo ? 50 : 0);
    }

    getStats(): string {
        return 'Type: ' + this.type + ', Volume: ' + this._volume + ', HP: ' + this.getHP() + ', Weight: ' + this.getWeight();
    }
}