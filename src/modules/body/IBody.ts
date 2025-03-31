export type model = '3' | '5' | '7' | 'X3' | 'X5' | 'X7' | 'iX';

export interface IBody {
  weight: number;
  airResistance: number;
  getStats(): string;
}