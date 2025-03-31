import {describe, expect, it} from '@jest/globals';
import ThirtyD from "./samples/30d";
import ThirtyE from "./samples/30e";
import ThirtyFiveI from "./samples/35i";
import FortyI from "./samples/40i";

describe('Check engine', () => {
    describe('power of engine', () => {
        it('should return HP for 30d', () => {
            const thirty = new ThirtyD(3, 3);
            expect(thirty.getHP()).toBe(156)
        });

        it('should return HP for 30e', () => {
            const thirty = new ThirtyE(3);
            expect(thirty.getHP()).toBe(255)
        });

        it('should return HP for 35i', () => {
            const thirtyFive = new ThirtyFiveI(3, 3);
            expect(thirtyFive.getHP()).toBe(312)
        });

        it('should return HP for 40i', () => {
            const forty = new FortyI(3, 3);
            expect(forty.getHP()).toBe(374.4);
        })
    })

    describe('weight of engine', () => {
        it('should return weight for 30d', () => {
          const thirty = new ThirtyD(3, 3);
          expect(thirty.getWeight()).toBe(416)
        });

        it('should return weight for 30e', () => {
          const thirty = new ThirtyE(3);
          expect(thirty.getWeight()).toBe(763)
        });

        it('should return weight for 35i', () => {
           const thirtyFive = new ThirtyFiveI(3, 3);
           expect(thirtyFive.getWeight()).toBe(506)
        });

        it('should return weight for 40i', () => {
           const forty = new FortyI(3, 3);
           expect(forty.getWeight()).toBe(506)
        });
    });

    describe('exceptions', () => {
        it('should return error when low oil level', () => {
            expect(() => new FortyI(1, 3)).toThrowError('Oil level must be equal to the engine volume');
        })

        it('should return error when coolant level is low in electric engine', () => {
            expect(() => new ThirtyE(2)).toThrowError('Coolant level is low. Overheat is possible');
        })
    });
});