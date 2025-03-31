import {describe, expect, it} from '@jest/globals';
import {MassCalculator} from "../MassCalculator";
import {AccelerationCalculator} from "../AccelerationCalculator";
import FiveThirtyFiveIXLuxury from "./535iXLuxury";

describe('535iX luxury', () => {
    it('535 acceleration', () => {
        const fiveThirtyFiveIX = new FiveThirtyFiveIXLuxury();
        const massCalculator = new MassCalculator(fiveThirtyFiveIX);
        const accelerationCalculator = new AccelerationCalculator(fiveThirtyFiveIX, massCalculator);

        const { distance100, time100 } = accelerationCalculator.calculateAcceleration();
        const time402 = accelerationCalculator.calculateRaceTime();

        console.log({ distance100, time100, time402 });

        expect(distance100).toBeCloseTo(73.88, 2);
        expect(time100).toBeCloseTo(5.05, 2);
        expect(time402).toBeCloseTo(13.66, 2);

        const mass = massCalculator.calculateMass();
        expect(mass).toBeCloseTo(2046, 1);
    });
});
