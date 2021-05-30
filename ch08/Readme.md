# function

### 함수형 프로그래밍

순수함수 및 선언형 프로그래밍이 토대 위에 함수 조합(function composition)과 모나드 조합(monadic composition)으로  
코드를 설계하고 구현하는 기법

#### 함수형 프로그래밍의 세가지 수학 이론

```
1. 람다 수학(ramda calculus): 조합 논리와 카테고리 이론의 토대가 되는 논리 수학
2. 조합 논리(combinatory logic): 함수 조합의 이론적 배경
3. 카테고리이론(category theory): 모나드 조합과 고차 타입의 이론적 배경
```

### Typescript의 제너릭 함수

#### function 제너릭

```typescript
function g1<T>(a: T): void {}
function g2<T, Q>(a: T, b: Q): void {}
```

#### arrow function

```typescript
const g3 = <T>(a: T): void => {};
const g4 = <T, Q>(a: T, b: Q): void => {};
```

#### 타입별칭(type-alias)

```typescript
type Type1Func<T> = (T) => void;
type Type2Func<T, Q> = (T, Q) => void;
type Type3Func<T, Q, R> = (T, Q) => R;
```

### mapping, identity

#### 매핑 함수

수학에서 1대1 관계로 이루어진 함수를 매핑(mapping), 줄여서 맵(map)이라고 함

```typescript
type MapFunc<T, R> = (T) => R;
```

#### 아이덴티티 함수

맴 함수중 가장 단순한게 입력값 x를 가공없이 그대로 반환하는 함수  
즉, 입력과 출력 타입이 같은 함수를 의미한다.  
해당 함수는 indentity 혹은 I라고 표현함

```typescript
type MapFunc<T, R> = (T) => R;
type IdentityFunc<T> = MapFunc<T, T>;
```
