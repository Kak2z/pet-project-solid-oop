import {ITransmission, TransmissionDrive, TransmissionType} from "./ITransmission";

export default
abstract class AbstractTransmission implements ITransmission {
    protected _type: TransmissionType;
    protected _drive: TransmissionDrive;

    protected constructor(
        type: TransmissionType,
        drive: TransmissionDrive,
    ) {
        if (!type || !drive) {
            throw new Error("Type, drive must be provided");
        }

        this._type = type;
        this._drive = drive;
    }

    get weight(): number {
        const baseWeight = this._type === 'automatic' ? 400 : 300; // FWD weight
        if (this._drive === 'AWD') {
            return baseWeight * 1.5
        }
        if (this._drive === 'RWD') {
            return baseWeight * 1.2
        }
        return baseWeight;
    }

    get type(): TransmissionType {
        return this._type;
    }

    getGripCoefficient(mass: number, tyrePerformance: number): number {
        // const baseGrip = Math.max(0.7 - mass / 5000, 0.3);
        const baseGrip = mass * 100 / 3500;
        const driveFactor = this._drive === 'AWD' ? 1.0 : this._drive === 'RWD' ? 0.7 : 0.3;
        return parseFloat(((baseGrip/100) * driveFactor * (tyrePerformance/100)).toFixed(2));
    }

    getStats(): string {
        return `Type: ${this._type}, Drive: ${this._drive}, Weight: ${this.weight}`;
    }
}