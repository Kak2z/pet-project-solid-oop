import AbstractTransmission from "../AbstractTransmission";

export default
class AWD extends AbstractTransmission  {
    constructor() {
        super('manual', 'AWD');
    }
}