/**
 * Prototype is a creational design pattern that lets you copy existing 
 * objects without making your code dependent on their classes.
 */

interface Prototype {
    clone(): Prototype
}

class PrototypeRegistry {
    private items = new Map<string, Prototype>()

    add(id: string, prototype: Prototype): void {
        this.items.set(id, prototype);
    }

    get(id: string): Prototype | undefined {
        const prototype = this.items.get(id);

        return prototype?.clone()
    }
}

class Character implements Prototype {
    constructor(
        public name: string,
        public health: number,
        public weapon: string,
        public level: number
    ) {}

    clone(): Character {
        return new Character (
            this.name,
            this.health,
            this.weapon,
            this.level
        )
    }
}

class Triangle implements Prototype {
    constructor( readonly sides: 3 = 3) {

    }

    clone(): Triangle {
        return new Triangle(this.sides)
    }
}

const warrior = new Character(
        "Warrior",
        100,
        "Sword",
        5
)

const warriorJohn = warrior.clone();

const duplicateSomething = (param: Prototype) => {
    return param.clone()
}

const triangle = new Triangle()



const anotherWarriorJohn = duplicateSomething(warriorJohn)

const registry = new PrototypeRegistry();
registry.add("triangle", triangle)
registry.add("warriorJohn", warriorJohn);

const anotherTriangle = registry.get("triangle")
