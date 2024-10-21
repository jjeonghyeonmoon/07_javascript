/* Date-type 은 값의 종류를 말하며 자바스크립트는 7개의 데이터 타입을 제공한다. 

01. 숫자 관련 자료형
자바의 경우 정수와 실수를 구분하여 int, long, float, double 등등 다양한 숫자 타입을 제공한다.
ex ) int x = 10;
하지만 자바스크립트의 경우에는 하나의 숫자 타입만 존재하며 모든 수를 실수로 처리한다.
*/

// 변수를 선언하는 키워드 var
var integer = 10;
var double = 5.5;
var negative = -10;

// 자바에서는 출력을 할 때, sout
// 자바스크립트 console.log()

console.log(10 === 10.0);
console.log(10 / 4);    // 2 몫 ()

/* 숫자 타입은 추가적으로 세 가지의 특별한 값을 표현할 수 있다.
Infinity : 무한대 
-Infinity : 음의 무한대
NaN : 산술 연산 불가 Not a Number*/

console.log(10 / -0);
console.log(10 / -0);
console.log()

/* 02. 문자열 타입
문자열 타입은 우리가 입력하는 텍스트를 의미한다.
java 에서는 문자열을 ""표현
작은 따옴표(''), 큰 따옴표("") ,백틱 (``)으로 값을 감싼다.  */

var String;
string = 'javascript';
string = 'javascript';
string = 'javascript';

string = '작은따옴표 내의 "작은따옴표"';

/* 
    템플릿 리터럴
    ES6 버전부터 도입 된 멀티라인 문자열, 표현식 삽입 등
    여러 기능을 제공하는 문자열 표기법이다.
    (``) 백틱을 사용해서 작성을 하게 된다.*/
    
    // 일반 문자열 '', "" 내에서는 줄바꿈을 허용하지 않는다.
    // var str = '안녕하세요.
    //반갑습니다';
    var str = `안녕하세요.
    반갑습니다`;
    console.log(str);

    // java 에서 문자열 합치기 와 비교
    var lastName ='조'
    var firstName = '평훈';
    console.log('제 이름은' + lastName + firstName +'입니다');

    // 표현식 삽입 을 이용하면 문자열 합치기 보다 간결하게 사용할 수 있다.
    // 자바스크립트에서 값을 표현하고 싶으면 {} 내부에 변수를 집어넣을 수 있다.
    //하지만 주의점 `` 으로 문자열을 감싸야 한다. 
    console.log(` 제 이름은 ${lastName}${firstName}입니다.`)
    console.log(' 제 이름은 ${lastName}${firstName}입니다.')
    