type ResultType = [boolean, string];

export const tupleExample = (): ResultType => {
	try {
		throw new Error('Error!!');
	} catch (e) {
		return [false, e.message];
	}
};
