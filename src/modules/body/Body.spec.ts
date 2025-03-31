import {describe, expect, it} from '@jest/globals';
import Three from './samples/Three';
import Five from './samples/Five';
import xSeven from './samples/xSeven';

describe('Check body', () => {
    it ('3 weight', () => {
        const three = new Three();
        expect(three.weight).toBe(600);
    })

    it ('5 weight', () => {
        const five = new Five();
        expect(five.weight).toBe(720);
    })

    it ('x7 weight', () => {
        const x7 = new xSeven();
        expect(x7.weight).toBe(1080);
    })

    it ('3 Stats', () => {
        const three = new Three();
        expect(three.getStats()).toBe('Model: 3');
    })

    it ('3 airResistance', () => {
        const three = new Three();
        expect(three.airResistance).toBe(0.27);
    })

    it ('5 airResistance', () => {
        const five = new Five();
        expect(five.airResistance).toBe(0.27);
    })

    it ('x7 airResistance', () => {
        const x7 = new xSeven();
        expect(x7.airResistance).toBe(0.32);
    })
});