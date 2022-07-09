// 1 For each of the these values, what type TS will infer?
/*
let a = 1042 // number
let b = 'apples and oranges' // string
const c = 'pineapples' // 'pineapples'
let d = [true, true, false] // boolean[]
let e = {type: 'ficus'} // {type: string}
let f = [1, false] // (number | boolean)[]
const g = [3] // number[]
let h = null // any
*/

// 2. Why does each of these throw the error it does?
// a
let i: 3 = 3;
i = 4; // Because you explicitly assigned type `3`, you cannot change `i` to any value other than `3`.

//b
let j = [1, 2, 3];
j.push(4);
j.push('5'); // When you assigned `j` to [1, 2, 3] TS infered it's type to number[]. So you cannot push string in this array.

// c
let k: never = 4; // `never` type is used when you are sure that value will NEVER be there. In this case, `k` is assigned a value of 4 so it can't be of type `never`.

// d
let l: unknown = 4;
let m = l * 2;
// `unknown` type is not assignable to anything but itself or `any`. When you say `unknown` you're saying to TS "I don't know its type". In this case if you still want to assign type `unknown` and do the calculation then you can do something like this:
// let m: number | undefined;
// if (typeof l === 'number') {
//   m = l * 2;
// }
