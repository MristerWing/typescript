import { SecondOrderFunc } from './function-signature';
import { add } from './second-order';

//const add1: SecondOrderFunc<number, number> = add(1);

console.log(add(1));
console.log(add(1)(2));
