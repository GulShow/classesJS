class Human {
    legs= null;
    hands = null;
    ears = null;
    heads = null;
    speed = null;
    constructor(legs, hands, ears, heads) {
        this.ears = ears;
        this.legs = legs;
        this.hands = hands;
        this.heads = heads;
        this.speed = 10;
    }
    get legs() {
      return this.legs
    }
    run() {
        return `Run with a top speed ${this.speed}`
    }
    static getAge(birthYear, currentYear) {
        return currentYear - birthYear
    }
}

class Student extends Human{
    name = null
    age = null
    #marks = null
    #visits = null
    #current = null
    constructor(name, age, legs, hands, ears, heads) {
        super(legs,hands,ears,heads);
        this.name = name
        this.age = age
        this.#marks = Array(10)
        this.#visits = Array(10)
        this.#current = 0
    }
    get name() {
        console.log(this.name);
    };
    get age() {
        console.log(this.age);
    };

    present() {
        this.#visits[this.#current++] = true
    };
    absent() {
        this.#visits[this.#current++] = false
    };
    mark(mark) {
        if (mark < 0 || mark > 10) {
            new Error('Невозможно поставить такую оценку')
        }
        this.#marks[this.#current++] = mark
    };

    summary() {
        const average = (arr) => {
            const sum = arr.reduce((acc, num) => acc + Number(num), 0);
            const length = arr.length;
            return sum / length
        }
        const averageMark = average(this.#marks);
        const averageVisit = average(this.#visits);

        if(averageMark === 10 && averageVisit === 1) {
            console.log('Ути какой молодчинка!')
        }
        else if(averageMark < 10 || averageVisit < 1) {
            console.log('Норм, но можно лучше')
        }
        else if(averageMark < 10 && averageVisit < 1) {
            console.log('Редиска!')
        }
    }

}

const giraffe = new Student('Animal', 5,2,2,2,1)

console.log(giraffe.run());
