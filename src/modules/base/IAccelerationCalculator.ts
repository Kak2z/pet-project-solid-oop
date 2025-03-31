export interface IAccelerationCalculator {
    calculateAcceleration(): { distance100: number; time100: number };
    calculateRaceTime(): number;
}