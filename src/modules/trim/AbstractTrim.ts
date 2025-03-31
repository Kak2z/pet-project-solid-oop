import {ITrim, level} from "./ITrim";

export default
abstract class AbstractTrim implements ITrim {
    protected _level: level;

    protected constructor(
        level: level,
    ) {
        this._level = level ? level : 'base';
    }

    get weight(): number {
        let weight = 300;
        if (this._level === 'middle') weight *= 1.2;
        if (this._level === 'luxury') weight *= 1.4;
        return weight;
    }

    getStats(): string {
        return `Level: ${this._level}`;
    }
}