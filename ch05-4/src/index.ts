import { mergeArray } from './modules/mergeArray';
import { pureSort } from './modules/sort';
import { tupleExample } from './modules/tupleExample';

let beforeSort = [6, 2, 9, 0];
const afterSort = pureSort(beforeSort);
console.log(beforeSort, afterSort);

const merge: number[] = mergeArray([1, 2, 3], [4, 5, 6], [7, 8]);

console.log(merge);

console.log('tuple Example');
console.log(tupleExample());
