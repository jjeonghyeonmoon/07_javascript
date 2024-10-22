/*
    자바스크립트에서 함수는 객체 타입의 값으로
    변수에 함수를 할당할 수 있다.
*/

//함수를 변수에 할당한 것을 함수 표현식 이라고 하며
//함수 표현식 에서는 함수의 이름을 생략할 수 있다.
var hello = function(name) {
    return `${name} 하~위`;
}

//식별자로 함수를 호출
console.log(hello('조평훈'));

var calc = function add(a,b){
    return a + b;
}

// console.log(add(10,20));
console.log(calc(10,20));