/*
    객체를 만드는 방법
    1. 객체 리터럴{};
    2.object 생성자 함수
    3.생성자 함수
    4.object.create 메소드
    5.class
    여기서는 2번을 확인해보자.
*/

// 빈 객체 생성
const student = new Object();

console.log(student);

// 비어있는 객체에 프로퍼티 추가
student.name = '조평훈';
student.age = 20;

console.log(student);