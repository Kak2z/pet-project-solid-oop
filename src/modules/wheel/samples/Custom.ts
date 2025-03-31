import AbstractWheel from "../AbstractWheel";

export default
class Custom extends AbstractWheel {
    constructor(rimSize: number, weight: number, height: number, width: number) {
        super(rimSize, weight, height, width);
    }
}