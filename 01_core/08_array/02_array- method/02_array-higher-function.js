/*
    배열의 고차 함수
    - 고차 함수란? 함수를 인자로 전달 받는 함수를 의미한다.
    
*/

// sort() : 배열을 정리해주는 함수
let numbers = [];

for(let i = 0; i < 10; i++){
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬 하기 전 numbers 배열 : ${numbers}`);

/*
    sort(): 오름차순이 기본 정렬이며 배열은 기본적으로
            문자열로 정렬이 되기 때문에
            한 자리수, 세자리 수가 옳바르게 정렬이 되지 않는 모습을 확인할 수 있다.
            따라서 다른 정렬 기준을 사용하기 위해서는 매개변수로 compare 이라는 함수를
            전달해야 한다.
*/

numbers.sort();

console.log(`정렬 후 numbers 배열 : ${numbers}`);

// 숫자 오름차순 정렬
function compare(a,b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;

}
numbers.sort(compare)
console.log(`인자로 compare 함수 전달 후 정렬 : ${numbers}`);

//숫자 내림차순 정렬
numbers.sort((a,b) => b - a);

console.log(`인자로 함수 작성해서 내림차순 정렬 : ${numbers}`);

/*
    배열에서 제공하는 foreach()
    -for 대체할 수 있는 고차함수
    배열.forEach(function(item, index, array){})
*/

numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item,index,array){
    console.log(`item : ${item}`)
    console.log(`index : ${index}`)
    console.log(`array ; ${array}`)
});

let result = [1,4,5,7,9].some(item => item % 2 == 0);
console.log(`result : ${result}`)

