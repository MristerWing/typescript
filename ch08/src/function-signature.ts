export type FirstOrderFunc<T, R> = (T: T) => R;
export type SecondOrderFunc<T, R> = (T: T) => FirstOrderFunc<T, R>;
export type ThirdOrderFunc<T, R> = (T: T) => ThirdOrderFunc<T, R>;
