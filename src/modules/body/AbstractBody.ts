import {IBody, model} from "./IBody";

export default
abstract class AbstractBody implements IBody {
    protected _model: model;

    protected constructor(
        model: model,
    ) {
        this._model = model;
    }

    get weight(): number {
        let weight = 400;
        if (this._model === '5') weight *= 1.2;
        if (this._model === '7') weight *= 1.4;
        if (this._model === 'X3') weight *= 1.4;
        if (this._model === 'X5') weight *= 1.6;
        if (this._model === 'X7') weight *= 1.8;
        if (this._model === 'iX') weight *= 2;
        return weight;
    }

    get airResistance(): number {
        let baseAirResistance = 0.27;
        if (this._model === 'X3' || this._model === 'X5' || this._model === 'X7' ) baseAirResistance += 0.05;
        if (this._model === 'iX' ) baseAirResistance -= 0.05;
        return baseAirResistance;
    }

    getStats(): string {
        return `Model: ${this._model}`;
    }
}