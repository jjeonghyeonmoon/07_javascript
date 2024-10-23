/*
    객체
    자바스크립트는 객체 기반 프로그래밍 언어로
    원시 값을 제외한 나머지(함수,배열 등등) 은 모두 객체이다.
    객체는 0개 이상 property(값) 으로 구성 된 집합이며
    프로퍼티는 키와 값으로 구성이 되게 된다.    
    * 자바스크립에서 사용할 수 있는 모든 값을 프로퍼티 값이 될 수 있다.
    프로퍼티의 값이 function 타입이면 메소드라고 부른다.
*/

/*
    객체 생성하는 방법
    java 의 경우 new 인터턴스 생성 연산자와 함께 생성자를
    호출하여 객체를 만들었다.
    자바스크립트는 java 와는 달리 여러가지 객체 생성 방식을 제공한다.
    1. 객체 리터럴
    2. object 생성자 함수
    3. 생성자 함수
    4. object.create()메소드
    5. class 문법 
    이 5가지 방법 중 가장 많이 쓰이는 방식은 1번 객체 리터럴
    사용하는 방식이다. 중괄호 내에 0개 이상의 프로퍼티 정의
*/

// 객체 리터럴의 중괄호는 코드 블럭을 의미하지 않는다.
// 따라서 닫는 중괄호 뒤에 세미클론 붙인다.
var student = {
    //key - value 세트로 구성을 하게 된다.
    // 프로퍼티 란 객체(student) 의 상태를 나타내는 값(필드 개념)
    name : '조평훈',
    age : 20,
    // 메소드 : 프로퍼티 (필드) 를 참조하고 조작을 할 수 있는 행위
    getInfo : function() {
    return `${this.name} 은 ${this.age} 살 입니다.` ;
    }
};

console.log(student);
console.log(typeof student);

var student2 = {};
console.log(student2);
console.log(typeof student2);