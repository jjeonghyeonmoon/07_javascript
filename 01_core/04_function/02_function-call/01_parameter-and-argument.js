/*
    매개변수와 전달인자
*/

function hello(name){

    //마찬가지로 매개변수는 해당 함수 몸체({}) 내에서만 사용가능


console.log(name);

//모든 전달인자들은 암묵적으로 arguments 객체의 프로퍼티로 보관
console.log(arguments);

return `${name}님 헬로우~`;

}

// 함수호출
var result = hello ('조평훈');
console.log(result);

//매가변수와 전달인자 갯수 불일치
result = hello();
console.log(result);
