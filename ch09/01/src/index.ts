import * as R from 'ramda';

// 범위 지정 range
console.log(R.range(1, 9 + 1));

// 함수를 조합하는 pipe, 테스트 함수 구성하는 tap
const array: number[] = R.range(1, 10);
R.pipe(
	R.tap((): void => {
		console.log(array);
	})
)(array);

const numbers: number[] = R.range(1, 10);

const incNumbers = R.pipe(
	R.map(R.inc),
	R.tap((a) => console.log(`after inc: ${a}`))
);

const newNumbers = incNumbers(numbers);
