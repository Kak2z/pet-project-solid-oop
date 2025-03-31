export type level = 'base' | 'middle' | 'luxury';

export interface ITrim {
  // level: level;
  weight: number;
  getStats(): string;
}