# ch05 배열과 튜플

### 배열 타입 선언

```typescript
let numberArray: number[] = [1, 2, 3];
let stringArray: string[] = ['a', 'b', 'c'];

type IPerson = { name: string; age?: number };

let personArray: IPerson[] = [{ name: 'Jack' }, { name: 'Bill', age: 33 }];
```

### 제너릭 방식 타입

```typescript
const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;
```
