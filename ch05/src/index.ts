import { range } from './range';

let numberArray: number[] = [1, 2, 3];
let stringArray: string[] = ['a', 'b', 'c'];

type IPerson = { name: string; age?: number };
let personArray: IPerson[] = [{ name: 'Jack' }, { name: 'Bill', age: 33 }];

const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;

console.log(
	arrayLength(numberArray),
	arrayLength(stringArray),
	arrayLength(personArray),
	isEmpty([]),
	isEmpty([...personArray])
);

let numbers: number[] = range(1, 100 + 1);
console.log(numbers);

let evenSum: number = numbers
	.filter((x: number): boolean => x % 2 === 0)
	.reduce((a: number, x: number): number => (a += x), 0);
console.log(evenSum);
let squareSum: number = numbers
	.map((x: number): number => x * x)
	.reduce((a: number, x: number): number => a + x, 0);
console.log(squareSum);
