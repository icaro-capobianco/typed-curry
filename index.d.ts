/** Thank you mjakic#4536516, jcalz#2887218 and stack overflow
 * @src https://stackoverflow.com/questions/63903982/how-to-write-curry-and-compose-in-typescript-4
 */
declare type Curried<A extends any[], R> = <P extends Partial<A>>(...args: P) => P extends A ? R : A extends [...SameLength<P>, ...infer S] ? S extends any[] ? Curried<S, R> : never : never;
declare type SameLength<T extends any[]> = Extract<{
    [K in keyof T]: any;
}, any[]>;
export default function curry<A extends any[], R>(fn: (...args: A) => R): Curried<A, R>;
export {};
