/*
    재귀함수
    -함수가 자기 자신을 호출하는 것을 재귀 호출 이라고 한다.
    -사용하는 예시는 반복적인 일을 수행해야 할 떄 사용하게 된다.
    -n!
    -6! = 1 * 2 * 3 * 4 * 5 * 6
*/

function factorial(n){
    if(n <= 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(6));