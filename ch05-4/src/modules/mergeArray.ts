export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
	let result: T[] = [];

	for (let i: number = 0; i < arrays.length; i++) {
		const array: T[] = arrays[i];

		// result 와 argument의 array 전개 후 결함하여 T[] 타입의 배열을 생성
		result = [...result, ...array];
	}

	return result;
};
