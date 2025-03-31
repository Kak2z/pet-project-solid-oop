import AbstractTransmission from "../AbstractTransmission";

export default
class AWDAutomatic extends AbstractTransmission  {
    constructor() {
        super('automatic', 'AWD');
    }
}