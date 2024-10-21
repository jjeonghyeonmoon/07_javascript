/*
    암묵적 타입 변환
    -개발자가 의도를 가지고 타입을 변환하는 것을 명시적 타입 변환
    -이라고 하며, 자바스크립트 엔진에 의해 암묵적으로 변환하는 것을
    -암묵적 타입 변환이라고 한다.
    -명시적 타입 변환은 코드에서 드러나게 되지만,
    -암묵적 타입 변환은 드러나지 않기 때문에 개발자가 예측을 해야 한다.
*/

//문자열로 타입 변환

console.log(10 + '20');

// 템플릿 리터럴 표현식
// 표현식의 결과
console.log(`10 + 20 = ${10 + 20}`);

console.log (NaN + '');
console.log(Infinity + '');
console.log(true + '');
console.log(null + '');
console.log(undefined + '');
console.log({} + '');
console.log([] + '');
console.log(function(){} + '');