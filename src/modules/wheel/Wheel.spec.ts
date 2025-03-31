import {describe, expect, it} from '@jest/globals';
import Borbet from "./samples/Borbet";
import Enkei from "./samples/Enkei";
import Custom from "./samples/Custom";

describe('Check wheel', () => {
    it('should return 100% performance for borbet', () => {
        const borbet = new Borbet();
        expect(borbet.getTyrePerformance()).toBe(100);
    });

    it('should return 89% performance for enkei', () => {
        const enkei = new Enkei();
        expect(enkei.getTyrePerformance()).toBe(89);
    });

    it('should return 72% performance for custom', () => {
        const custom = new Custom(20, 15, 20, 305);
        expect(custom.getTyrePerformance()).toBe(72);
    });

    it('should return 52% performance for custom', () => {
        const custom = new Custom(15, 20, 65, 195);
        expect(custom.getTyrePerformance()).toBe(52);
    });

    it('should return error when no rim size', () => {
        expect(() => new Custom(0, 20, 65, 195)).toThrowError('Rim size, weight, height, and width must be provided');
    });
});