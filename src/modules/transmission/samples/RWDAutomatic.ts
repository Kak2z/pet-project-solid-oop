import AbstractTransmission from "../AbstractTransmission";

export default
class RWDAutomatic extends AbstractTransmission  {
    constructor() {
        super('automatic', 'RWD');
    }
}