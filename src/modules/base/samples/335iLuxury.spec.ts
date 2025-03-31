import {describe, expect, it} from '@jest/globals';
import ThreeThirtyFiveILuxury from "./335iLuxury";
import {MassCalculator} from "../MassCalculator";
import {AccelerationCalculator} from "../AccelerationCalculator";

describe('335i luxury', () => {
    it('335 acceleration', () => {
        const threeThirtyFive = new ThreeThirtyFiveILuxury();
        const massCalculator = new MassCalculator(threeThirtyFive);
        const accelerationCalculator = new AccelerationCalculator(threeThirtyFive, massCalculator);

        const { distance100, time100 } = accelerationCalculator.calculateAcceleration();
        const time402 = accelerationCalculator.calculateRaceTime();

        console.log({ distance100, time100, time402 });

        expect(distance100).toBeCloseTo(80.23, 2);
        expect(time100).toBeCloseTo(6.2, 2);
        expect(time402).toBeCloseTo(14.53, 2); // Може змінитися!

        const mass = massCalculator.calculateMass();
        expect(mass).toBeCloseTo(1834, 1);
    });
});
