var panda2 = {
    name : '푸바오',
    // ES6 에서 메소드 정의 시 function 키워드 생략 가능
    eat(food){
        console.log(`${this.name} 는 ${food} (을)를 맛있게 먹어요`);
    }
};

panda2.eat('대나무');