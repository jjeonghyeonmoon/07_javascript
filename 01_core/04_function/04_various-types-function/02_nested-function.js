/* 
    함수 내부에 함수를 정의 하는것을
    중첩 함수 혹은 내부 함수라고 한다.
*/

/*
    일반적으로 중첩 함수의 경우 자신을 포함하는 외부 함수를 
*/

function outer() {
    var outerVal = '외부함수가 가지고 있는 변수';
    
    function inner(){

        var innerVal ='내부함수가 가지고 있는 변수'
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(innerVal, outerVal);
    }
   // console.log(innerVal);

   inner();
   outer();
}
outer();