function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.getInfo = (type) => {
        switch (type){
            case score : return `${this.name} 님의 성적은 ${this.score} 입니다.`;
            break;
            
            case age : return `${this.name} 님의 나이는 ${this.age} 입니다.`;
            break;
            }
        }
        
        
    
}

// 5명의 회원을 생성 후 ohgiraffers 배열에 담기
const member1 = new Student('조평훈', 20, 100);
const member2 = new Student('조평평', 21, 89);
const member3 = new Student('조평순', 15, 75);
const member4 = new Student('조팽팽', 24, 100);
const member5 = new Student('조핑구', 45, 49);

const ohgiraffers = [
    member1, member2, member3, member4, member5
];

console.log(ohgiraffers);

// 1번)
ohgiraffers.sort((a, b) => b.score - a.score);
ohgiraffers.forEach(member => console.log(member.getInfo(score)))

// 2번)
ohgiraffers.sort((a,b) => b.age - a.age);
ohgiraffers.forEach(member => console.log(member.getInfo(age)))

// // 3번)
// ohgiraffers.sort

// // 4번)
// const result = ohgiraffers.find(a => a.score >= 50);
// console.log(result.getInfo())

// ohgiraffers.filter(a => a.score >= 50);
// ohgiraffers.forEach(member => console.log(member.getInfo()))

// // // // 5번)
// // ohgiraffers.find(a => a.score >= 70 && a.score <= 90);
