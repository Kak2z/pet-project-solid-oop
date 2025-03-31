import {describe, expect, it} from '@jest/globals';
import {MassCalculator} from "../MassCalculator";
import {AccelerationCalculator} from "../AccelerationCalculator";
import FiveThirtyFiveILuxury from "./535iLuxury";

describe('535i luxury', () => {
    it('535 acceleration', () => {
        const fiveThirtyFiveILuxury = new FiveThirtyFiveILuxury();
        const massCalculator = new MassCalculator(fiveThirtyFiveILuxury);
        const accelerationCalculator = new AccelerationCalculator(fiveThirtyFiveILuxury, massCalculator);

        const { distance100, time100 } = accelerationCalculator.calculateAcceleration();
        const time402 = accelerationCalculator.calculateRaceTime();

        console.log({ distance100, time100, time402 });

        expect(distance100).toBeCloseTo(80.72, 2);
        expect(time100).toBeCloseTo(6.15, 2);
        expect(time402).toBeCloseTo(14.54, 2);

        const mass = massCalculator.calculateMass();
        expect(mass).toBeCloseTo(1914, 1);
    });
});
