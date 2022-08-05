import { compose, pipe } from 'lodash/fp'


let input = "   JavaScript   ";
let output = "<div> + input.trim() + </div>";

const trim = str => str.trim();
const wrap = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap)
// transform(input);

console.log(transform(input))


function add(a) {
    return function(b) {
        return a + b;
    }
}

const add2 = a => b => a + b;

console.log(add2(2)(7))


const person = {name: "Nick"}
const updated = {...person, name: "Guy", age: "30"}

console.log(updated)