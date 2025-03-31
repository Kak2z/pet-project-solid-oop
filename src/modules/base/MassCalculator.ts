import { IMassCalculator } from './IMassCalculator';
import { ICar } from './ICar';

export class MassCalculator implements IMassCalculator {
    protected _car: ICar;

    constructor(public readonly car: ICar) {
        this._car = car;
    }

    calculateMass(): number {
        return (
            this._car.engine.getWeight() +
            this._car.wheels.weight * 4 +
            this._car.transmission.weight +
            this._car.body.weight +
            this._car.trim.weight
        );
    }
}