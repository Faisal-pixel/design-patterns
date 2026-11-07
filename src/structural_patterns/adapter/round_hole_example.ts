class RoundHole {
    private radius: number
    constructor(radius: number) {
        this.radius = radius
    }

    getRadius(): number {
        return this.radius;
    }

    fits(peg: RoundPeg): boolean {
        return this.radius >= peg.getRadius()
    }
}

class RoundPeg {
    private radius: number
    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius
    }
}

class SquarePeg {
    private width: number
    constructor(width: number) {
        this.width = width;
    }

    getWidth(): number {
        return this.width;
    }
}

class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg
    constructor(peg: SquarePeg) {
        super(0)
        this.peg = peg;
    }

    override getRadius(): number {
        return (this.peg.getWidth() * Math.sqrt(2)) / 2
    }
}

const hole = new RoundHole(5);

const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);

const smallAdapter = new SquarePegAdapter(smallSquarePeg);
const largeAdapter = new SquarePegAdapter(largeSquarePeg);

console.log(hole.fits(smallAdapter))
console.log(hole.fits(largeAdapter))