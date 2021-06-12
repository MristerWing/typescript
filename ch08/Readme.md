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

### 고차함수

1. 함수를 구성할 때 연속적으로 함수가 함수를 호출하는 방식으로 구현한 것을 고차 함수(High Order Function)이라고 한다.
2. n개의 함수를 호출 할때 마다 n차 함수라는 명칭으로 부른다.

#### 애리티(arity)

함수의 매개변수의 개수를 의미함

#### 커리(curry)

고차 함수에서 함수 호출 연산자를 두 번 연속으로 사용하는 경우를 의미함

#### 부분 적용 함수

자신의 함수 호출 연산자 보다 적게 호출하는 경우를 부분 적용 함수라고 한다.
