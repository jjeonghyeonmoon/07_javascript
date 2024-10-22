/* 
    함수의 호이스팅
*/

// 함수 참조하기
console.log(hello); //2
console.log(hi);    //3

console.log(hello('조평훈'));   //4
// console.log(hi('조평훈'));      //5

// 함수 선언문 (1)
function hello(name){
    return `$(name) 님 헬로우~~`;
}

// 함수 표현식
//(1)// (6)
var hi = function(name){
    return `$(name) 님하이~~`;
}

console.log(hi('조평훈'));

/*
    자바스크립트는 특이하게
    선언 과정과 값 할당 과정 이렇게 따로따로 동작을 하게 된다.
    선언은 코드를 run 하는 동시에 가장 먼저 선언 된 값을 메모리에 할당하게 된다.
    
*/
