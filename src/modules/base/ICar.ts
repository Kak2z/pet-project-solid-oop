import {IEngine} from "../engine/IEngine";
import {IWheel} from "../wheel/IWheel";
import {ITransmission} from "../transmission/ITransmission";
import {IBody} from "../body/IBody";
import {ITrim} from "../trim/ITrim";

export interface ICar {
    engine: IEngine;
    wheels: IWheel;
    transmission: ITransmission;
    body: IBody;
    trim: ITrim;
    getSpecs(): { engine: string; wheels: string; transmission: string; body: string; trim: string };
}