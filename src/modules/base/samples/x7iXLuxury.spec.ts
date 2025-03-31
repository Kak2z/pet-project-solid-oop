import {describe, expect, it} from '@jest/globals';
import {MassCalculator} from "../MassCalculator";
import {AccelerationCalculator} from "../AccelerationCalculator";
import xSevenIXLuxury from "./x7iXLuxury";

describe('x7iX luxury', () => {
    it('x7iX acceleration', () => {
        const x7 = new xSevenIXLuxury();
        const massCalculator = new MassCalculator(x7);
        const accelerationCalculator = new AccelerationCalculator(x7, massCalculator);

        const { distance100, time100 } = accelerationCalculator.calculateAcceleration();
        const time402 = accelerationCalculator.calculateRaceTime();

        console.log({ distance100, time100, time402 });

        expect(distance100).toBeCloseTo(57.64, 2);
        expect(time100).toBeCloseTo(3.75, 2);
        expect(time402).toBeCloseTo(12.31, 2);

        const mass = massCalculator.calculateMass();
        expect(mass).toBeCloseTo(2484, 1);
    });
});
