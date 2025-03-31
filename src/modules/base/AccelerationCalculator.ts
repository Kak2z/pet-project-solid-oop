import { IAccelerationCalculator } from './IAccelerationCalculator';
import { ICar } from './ICar';
import { IMassCalculator } from "./IMassCalculator";

export class AccelerationCalculator implements IAccelerationCalculator {
    protected _car: ICar;
    protected _mass: IMassCalculator;

    private readonly airDensity = 1.225; // кг/м³
    private readonly frontalArea = 2.2; // м²

    constructor(car: ICar, mass: IMassCalculator) {
        this._car = car;
        this._mass = mass;
    }

    private getAcceleration(speed: number, distance: number): number {
        const mass = this._mass.calculateMass();

        // Коефіцієнт зчеплення (змінюється для перших 50 м)
        const gripCoefficient = (distance < 50) ? this._car.transmission.getGripCoefficient(mass, this._car.wheels.getTyrePerformance()) : 1;

        // Максимальна сила зчеплення
        const forceGrip = gripCoefficient * mass * 9.81;

        // Максимальна сила від двигуна
        const powerHP = this._car.engine.getHP();
        const forceEngine = (powerHP * 1000) / Math.max(speed, 1); // Уникаємо ділення на 0

        // Беремо мінімальне з двох значень (двигун або зчеплення)
        const effectiveForce = Math.min(forceEngine, forceGrip);

        // Враховуємо аеродинамічний опір
        const dragForce = this.getDragForce(speed);

        // Остаточне прискорення
        return (effectiveForce - dragForce) / mass;
    }

    private getDragForce(speed: number): number {
        return 0.5 * this._car.body.airResistance * this.frontalArea * this.airDensity * (speed ** 2);
    }

    private round(num: number): number {
        return parseFloat(num.toFixed(2));
    }

    calculateAcceleration(): { distance100: number; time100: number } {
        let speed = 0;
        let time = 0;
        let distance = 0;
        const deltaT = 0.05; // Крок ітерації

        while (speed < 27.78) {
            const acceleration = this.getAcceleration(speed, distance);
            speed += acceleration * deltaT;
            distance += speed * deltaT;
            time += deltaT;
        }

        if (this._car.transmission.type === 'automatic') time -= 0.3;
        return {
            distance100: this.round(distance),
            time100: this.round(time)
        };
    }

    calculateRaceTime(): number {
        let speed = 0;
        let time = 0;
        let distance = 0;
        const deltaT = 0.01; // Крок ітерації

        while (distance < 402) {
            const acceleration = this.getAcceleration(speed, distance);
            speed += acceleration * deltaT;
            distance += speed * deltaT;
            time += deltaT;
        }

        if (this._car.transmission.type === 'automatic') time += 0.6;
        return this.round(time);
    }
}
