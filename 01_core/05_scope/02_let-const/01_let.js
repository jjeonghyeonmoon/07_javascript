/*
    let 키워드
    var 키워드가 가진 단점(함수레벨스코프) 를 보완하기 위해
    도입 된 변수 선언 키워드 이다.
*/

//1. 변수 중복 선언 금지
// var a = 10;
// var a = 20;
// console.log(a);
let msg ='안녕하세요';
//let 과 const 키워드는 같은 스코프 내에서 중복 선언이 불가능하다.
// let msg ='안녕하세요';

//2. 블록 레벨 스코프
let i = 0;
for(let i = 0; i < 10; i++){
    console.log(`지역변수 i : ${i}`)
}

console.log(`전역변수 i : ${i}`);

//3. 변수 호이스팅
console.log(x);
let x;