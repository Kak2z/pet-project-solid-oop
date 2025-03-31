import AbstractEngine from "./AbstractEngine";

export default
abstract class AbstractElectricEngine extends AbstractEngine {
    private readonly _kWt: number;
    private readonly _coolantLevel: number;

    protected constructor(kWt: number, coolantLevel: number) {
        super('electric');
        this._kWt = kWt;
        this._coolantLevel = coolantLevel;
    }

    getHP(): number {
        return Math.round(this._kWt / 0.746);
    }

    getWeight(): number {
        return this._kWt * 4 + this._coolantLevel;
    }

    getStats(): string {
        return 'Type: ' + this.type + ', Power: ' + this._kWt + ', HP: ' + this.getHP() + ', Weight: ' + this.getWeight();
    }
}