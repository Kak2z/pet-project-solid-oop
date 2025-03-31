import {describe, expect, it} from '@jest/globals';
import RWD from './samples/RWD';
import RWDAutomatic from './samples/RWDAutomatic';
import AWD from "./samples/AWD";
import AWDAutomatic from "./samples/AWDAutomatic";

describe('Check transmission', () => {
    it('RWD', () => {
        const rwd = new RWD();
        expect(rwd.getGripCoefficient(1000, 100)).toBe(0.7);
    })

    it('RWD weight', () => {
        const rwd = new RWD();
        expect(rwd.weight).toBe(360);
    })

    it('RWD automatic', () => {
        const rwd = new RWDAutomatic();
        expect(rwd.getGripCoefficient(1000, 100)).toBe(0.7);
    })

    it('RWD automatic weight', () => {
        const rwd = new RWDAutomatic();
        expect(rwd.weight).toBe(480);
    })

    it('AWD', () => {
        const awd = new AWD();
        expect(awd.getGripCoefficient(1000, 100)).toBe(1);
    })

    it('AWD weight', () => {
        const awd = new AWD();
        expect(awd.weight).toBe(450);
    })

    it('AWD automatic', () => {
        const awd = new AWDAutomatic();
        expect(awd.getGripCoefficient(1000, 100)).toBe(1);
    })

    it('AWD automatic weight', () => {
        const awd = new AWDAutomatic();
        expect(awd.weight).toBe(600);
    })

    it('AWD automatic', () => {
        const awd = new AWDAutomatic();
        expect(awd.getGripCoefficient(1000, 100)).toBe(1);
    })
});