export type EngineType = 'petrol' | 'diesel' | 'electric';

export interface IEngine {
    type: EngineType;
    // volume: number;
    // hasTurbo: boolean;
    // oilLevel: number;
    // coolantLevel: number;
    getHP(): number;
    getWeight(): number;
    getStats(): string;
}