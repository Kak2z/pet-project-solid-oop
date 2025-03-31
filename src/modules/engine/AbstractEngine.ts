import {IEngine, EngineType} from "./IEngine";

export default
abstract class AbstractEngine implements IEngine {
    protected constructor(public type: EngineType) {}

    abstract getHP(): number;
    abstract getWeight(): number;
    abstract getStats(): string;
}