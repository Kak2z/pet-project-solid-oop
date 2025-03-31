import AbstractTransmission from "../AbstractTransmission";

export default
class RWD extends AbstractTransmission  {
    constructor() {
        super('manual', 'RWD');
    }
}