export const cal = (num: number, callBack: (number) => void): void => {
	let add = (a: number, b: number): number => a + b;
	function multiply(a: number, b: number): number {
		return a * b;
	}

	let result = multiply(add(1, 2), num);
	callBack(result);
};
