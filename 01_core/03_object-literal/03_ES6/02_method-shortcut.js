var panda2 = {
    name : '푸바오',
    // 객체 내에 프로퍼티로 가지고 있는 함수를 메소드 라고 한다.
    eat(food){
        // this 는 panda 가르킨다. 자바에서 this 와 동일
        console.log(`${this.name} 는 ${food} (을)를 맛있게 먹어요`);
    }
};

panda2.eat('대나무');