// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their 
// concrete classes.

/**
 * Customers:
 * 1. Chairs
 * 2. Sofas
 * 3. Coffee Tables 
 * 
 * Modern
 * - Modern chair
 *  - Modern sofa
 *  - Modern coffee table

* Victorian
 - Victorian chair
 - Victorian sofa
 - Victorian coffee table

Art Deco
 - Art Deco chair
 - Art Deco sofa
 - Art Deco coffee table


 * 
 */


/**
 * There are 4 important parts:
 * 1. Product Interfaces
 * 2. Concrete Products
 * 3. The Abstract Factory Interface
 * 4. Concrete Factories
 */

interface IChair {
    sitOn(): void
}

interface ISofa {
    lieOn(): void
}

interface ICoffeeTable {
    putItemsOn(): void
}

// Moderns

class ModernChair implements IChair {
  sitOn(): void {
    console.log("Sitting on a modern chair.");
  }
}

class ModernSofa implements ISofa {
  lieOn(): void {
    console.log("Relaxing on a modern sofa.");
  }
}

class ModernCoffeeTable implements ICoffeeTable {
  putItemsOn(): void {
    console.log("Putting items on a modern coffee table.");
  }
}

// Victorians
class VictorianChair implements IChair {
  sitOn(): void {
    console.log("Sitting on a Victorian chair.");
  }
}

class VictorianSofa implements ISofa {
  lieOn(): void {
    console.log("Relaxing on a Victorian sofa.");
  }
}

class VictorianCoffeeTable implements ICoffeeTable {
  putItemsOn(): void {
    console.log("Putting items on a Victorian coffee table.");
  }
}

// Art Decor

class ArtDecorChair implements IChair {
  sitOn(): void {
    console.log("Sitting on a Victorian chair.");
  }
}

class ArtDecorSofa implements ISofa {
  lieOn(): void {
    console.log("Relaxing on a Victorian sofa.");
  }
}

class ArtDecorCoffeeTable implements ICoffeeTable {
  putItemsOn(): void {
    console.log("Putting items on a Victorian coffee table.");
  }
}

interface IFurnitureFactory {
    createChair(): IChair;
    createSofa(): ISofa;
    createCoffeeTable(): ICoffeeTable
}

class ModernFurnitureFactory implements IFurnitureFactory {
    createChair(): IChair {
        return new ModernChair()
    }

    createSofa(): ISofa {
        return new ModernSofa()
    }

    createCoffeeTable(): ICoffeeTable {
        return new ModernCoffeeTable()
    }
}

class VictorianFurnitureFactory implements IFurnitureFactory {
    createChair(): IChair {
        return new VictorianChair()
    }

    createSofa(): ISofa {
        return new VictorianSofa()
    }

    createCoffeeTable(): ICoffeeTable {
        return new VictorianCoffeeTable()
    }
}

class ArtDecorFurnitureFactory implements IFurnitureFactory {
    createChair(): IChair {
        return new ArtDecorChair()
    }

    createSofa(): ISofa {
        return new ArtDecorSofa()
    }

    createCoffeeTable(): ICoffeeTable {
        return new ArtDecorCoffeeTable()
    }
}

function furnishRoom(factory: IFurnitureFactory): void {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const coffeeTable = factory.createCoffeeTable()
}


const modernFactory: IFurnitureFactory = new ModernFurnitureFactory();

furnishRoom(modernFactory)

const factory: IFurnitureFactory = new VictorianFurnitureFactory();

const chair = factory.createChair();
const sofa = factory.createSofa();
const coffeeTable = factory.createCoffeeTable();