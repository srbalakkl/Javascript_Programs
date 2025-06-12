const radius = [3, 1, 2, 4];

function calculateArea(radius) {

    const output = []

    for (const radi of radius) {
        output.push(Math.PI * radi * radi)
    }

    return output
}

let area = calculateArea(radius);
console.log(area);


function calculateCircumference(radius) {
    const output = []

    for (const radi of radius) {
        output.push(2 * Math.PI * radi)
    }

    return output
}

let circumference = calculateCircumference(radius)
console.log(circumference);


/*
* This method can be simplified by using the higher order function.
* */
function calculateCircle(radius, logic) {

    const output = []

    for (const radi of radius) {
        // output.push(Math.PI * radi * radi)
        output.push(logic(radi))
    }

    return output
}


let area1 = calculateCircle(radius, (radi) => Math.PI * radi * radi)
console.log(area1)

let circumference1 = calculateCircle(radius, (radi ) => 2 * Math.PI * radi)
console.log(circumference1);

/*
* When you use Array.prototype.calculate the calculate function is available everywhere
* */
Array.prototype.calculate = function (logic) {

    const output = []

    for (let i = 0; i < this.length; i++) {
        // output.push(Math.PI * radi * radi)
        output.push(logic(this[i]))//Here, we use this context to the value from ary(avail below)
    }

    return output
}

ary = [10, 20, 30];

console.log(ary.calculate((ar) => ar  * 2));//calculate function (higher order function) is available with all the array.