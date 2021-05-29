import { cal } from './cal';
import { NumberToNumberFunc, add } from './high-order';
import { init } from './init';

type stringAndNumberFunction = (string, number) => void;

const thisIsFunction: stringAndNumberFunction = (
	s: string,
	n: number
): void => {
	console.log(s, n);
};

thisIsFunction('test', 11);

interface IAgeable {
	age?: number;
}
const getAge: (i: IAgeable) => number = function (o: IAgeable): number {
	return o.age !== undefined && o.age ? o.age : 0;
};

console.log(getAge({ age: 32 }));

const expression: (a: number, b: number) => number = (
	a: number,
	b: number
): number => a + b;
console.log(expression(5, 7));

cal(30, (result: number): void => console.log(result));

let fn: NumberToNumberFunc = add(1);
let result = fn(2);
console.log(result);
console.log(add(1)(2));

init(() => console.log('custom initialzation finished.'));

class B {
	constructor(public value: number = 1) {}
	method(): void {
		console.log(`value is ${this.value}`);
	}
}

let b: B = new B(55);
b.method();
