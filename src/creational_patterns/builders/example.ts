/**
 * Builder is a creational design pattern that lets you construct complex objects step by step. 
 * The pattern allows you to produce different types and representations of an object using the same construction code.
 */

/**
 * THE IMPORTANT PEOPLE
 * 1. Product: The actual object being created
 * 2. Builder: Defines the steps required to create the objet
 * 3. Concrete Builder: Actually performs those steps 
 * 4. Director: Decides the order in which the steps happen
 * 5. Client: The code that requests the object
 */

class House {
    walls: number = 0;
    doors: number = 0;
    windows: number = 0;
    roof: string = "";
}

interface HouseBuilder {
    buildWalls(): void;
    buildDoors(): void;
    buildWindows(): void;
    buildRoof(): void;

    getResult(): House
}

class WoodenHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    buildWalls(): void {
        this.house.walls = 4;
    }
    buildDoors(): void {
        this.house.doors = 1;
    }

    buildWindows(): void {
        this.house.windows = 2;
    }

    buildRoof(): void {
        this.house.roof = "Wooden roof";
    }

    getResult(): House {
        return this.house;
    }

}

class HouseDirector {
    private builder: HouseBuilder
    constructor(builder: HouseBuilder) {
        this.builder = builder;
    }

    buildBasicHouse(): House {
        this.builder.buildWalls();
        this.builder.buildDoors();
        this.builder.buildWindows();
        this.builder.buildRoof();

        return this.builder.getResult();
    }
}

const woodenBuilder = new WoodenHouseBuilder();

const director = new HouseDirector(woodenBuilder);

const woodenHouse = director.buildBasicHouse();
console.log(woodenHouse);
console.log(`The wooden house has ${woodenHouse.doors} doors and ${woodenHouse.windows} windows.`)