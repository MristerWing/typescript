import { readFileSync, readFile } from 'fs';

export function notUseAwait(): void {
	console.log('read package.json sync ');

	// 동기 방식 파일 read
	const buffer: Buffer = readFileSync('./package.json');
	console.log(buffer.toString());

	// 비동기 방식 파일 read
	readFile('./package.json', (error, buffer: Buffer) => {
		console.log('read package.json aync ');
		console.log(buffer.toString());
	});
}

export function useAwait(): void {
	const readFilePromise = (filename: string): Promise<string> => {
		return new Promise<string>((resolve, reject) => {
			readFile(filename, (error, buffer) => {
				if (error) {
					reject(error);
				} else {
					resolve(buffer.toString());
				}
			});
		});
	};

	(async () => {
		const content = await readFilePromise('./package.json');
		console.log('read pacack async/await');
		console.log(content);
	})();
}
