/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(YEAR);
console.log(typeof YEAR);
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ""));

// undefined, null
let days = null;
let weekend;

console.log(days);
console.log(typeof (days + ""));
console.log(weekend);
console.log(typeof (weekend + ""));

// boolean
let isClicked = false;

console.log(typeof isClicked);
console.log(typeof (isClicked + ""));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend));
// null
let money = null;

console.log(Number(money));

// boolean
let cutie = true;
let mind = false;

console.log(Number(cutie)); //  true = 1
console.log(Number(mind)); //  false =  0

// string
let num = "250";

console.log(Number(num));
console.log(num * 1);
console.log(typeof +num); // +num, num*1 num/1

// numeric string
const width = "105.3px";

console.log(width);

// parseInt, parseFloat
console.log(parseInt(width, 10));
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// false (friend = undefined)
console.log(Boolean(friend));
console.log(Boolean(""));
console.log(Boolean(0));

// true
console.log(Boolean(" "));
console.log(Boolean("0"));
