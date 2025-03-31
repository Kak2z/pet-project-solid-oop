export default
abstract class AbstractWheel implements IWheel {
    protected _rimSize: number;
    protected _weight: number;
    protected _height: number;
    protected _width: number;

    protected constructor(
        rimSize: number,
        weight: number,
        height: number,
        width: number,
    ) {
        if (!rimSize || !weight || !height || !width) {
            throw new Error("Rim size, weight, height, and width must be provided");
        }

        this._rimSize = rimSize;
        this._weight = weight;
        this._height = height;
        this._width = width;
    }

    get weight(): number {
        return this._weight;
    }

    getTyrePerformance(): number {
        const idealRimSize = 17;
        const idealWeight = 6;
        const idealHeight = 30;
        const idealWidth = 255;

        const rimSizePerformance = 1 - Math.abs(this._rimSize - idealRimSize) / (idealRimSize * 2);
        const weightPerformance = 1 - Math.abs(this._weight - idealWeight) / (idealWeight * 2);
        const heightPerformance = 1 - Math.abs(this._height - idealHeight) / (idealHeight * 2);
        const widthPerformance = 1 - Math.abs(this._width - idealWidth) / (idealWidth * 2);

        const performance = (rimSizePerformance + weightPerformance + heightPerformance + widthPerformance) / 4 * 100;
        return Math.round(Math.max(Math.min(performance, 100), 0)); // Ensure performance is between 0% and 100%
    }

    getStats(): string {
        return `Rim Size: ${this._rimSize}, Height: ${this._height}, Width: ${this._width}, Weight: ${this._weight}`;
    }
}