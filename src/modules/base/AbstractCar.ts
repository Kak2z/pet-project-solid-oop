import {IEngine} from "../engine/IEngine";
import {ITrim} from "../trim/ITrim";
import {IBody} from "../body/IBody";
import {IWheel} from "../wheel/IWheel";
import {ITransmission} from "../transmission/ITransmission";
import {ICar} from "./ICar";

export default
abstract class AbstractCar implements ICar {
    protected _engine: IEngine;
    protected _wheels: IWheel;
    protected _transmission: ITransmission;
    protected _body: IBody;
    protected _trim: ITrim;

    protected constructor(body: IBody, engine: IEngine, transmission: ITransmission, wheels: IWheel, trim: ITrim) {
        this._engine = engine;
        this._wheels = wheels;
        this._transmission = transmission;
        this._body = body;
        this._trim = trim;
    }

    get engine(): IEngine {
        return this._engine;
    }

    get wheels(): IWheel {
        return this._wheels;
    }

    get transmission(): ITransmission {
        return this._transmission;
    }

    get body(): IBody {
        return this._body;
    }

    get trim(): ITrim {
        return this._trim;
    }

    getSpecs() {
        return {
            engine: this._engine.getStats(),
            wheels: this._wheels.getStats(),
            transmission: this._transmission.getStats(),
            body: this._body.getStats(),
            trim: this._trim.getStats(),
        }
    }
}