class Vector {
    constructor(components = []) {
        this.components = components;
    }

    magnitude() {
        return Math.sqrt(
            this.components.reduce((sum, v) => sum + v * v, 0)
        );
    }
}

const v = new Vector([3, 4])


console.log(v.magnitude())


const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers)
    sum += n;

let reducer = (total, value) => total + value;

sum = numbers.reduce(((accumulator, constant) => {
    return accumulator + constant;
})(), 0);

console.log(sum);
