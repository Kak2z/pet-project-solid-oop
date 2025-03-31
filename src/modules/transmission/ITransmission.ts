export type TransmissionType = 'automatic' | 'manual';
export type TransmissionDrive = 'FWD' | 'RWD' | 'AWD';

export interface ITransmission {
    type: TransmissionType;
    // drive: 'FWD' | 'RWD' | 'AWD';
    weight: number;
    getGripCoefficient(mass: number, tyrePerformance: number): number;
    getStats(): string;
}