import {describe, expect, it} from '@jest/globals';
import Base from './samples/Base';
import Middle from './samples/Middle';
import Luxury from './samples/Luxury';

describe('Check trim', () => {
    it ('base weight', () => {
        const base = new Base();
        expect(base.weight).toBe(300);
    })

    it ('middle weight', () => {
        const middle = new Middle();
        expect(middle.weight).toBe(360);
    })

    it ('luxury weight', () => {
        const luxury = new Luxury();
        expect(luxury.weight).toBe(420);
    })

    it ('base Stats', () => {
        const base = new Base();
        expect(base.getStats()).toBe('Level: base');
    })
});