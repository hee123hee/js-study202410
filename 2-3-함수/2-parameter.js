// 매개 변수(Parameter) : 함수가 실행할 떄 외부에서 전달받는 값

// 언어를 알려주면 그 언어로 인사해주는 함수
function greet(language) {
    console.log(`lang: ${language}`);
    switch (language='한국어') {
        case '한국어':
            console.log('안녕하세요!');
            break;
        case '영어':
            console.log('hello');
            break;
        case '일본어':
            console.log('곤니찌와');
            break;
            default:
                console.log('우가우가')
    }
}

// 함수에 전달하는 값: 인수 argument)
greet('힌두어');
greet();

console.log('========================');

// x~y 사이의 랜덤정수를 생성
function makeRandomInteger(x,y=10) {
    let rn = Math.floor(Math.random() * (y-x+1)+x);
    console.log(`랜덤정수 : ${rn}`);
    return rn;
}

// 호출
let rn = makeRandomInteger(1);

if (rn === 1) {
    console.log('랜덤정수 1입니다.')
}

// 매개변수 없는 함수
//f(x) = 2x + 1
function infiniteHello(){
   for (let i = 1; i < 5; i++)
       console.log('hello')
}
for ( let i = 0; i <10; i++) {
infiniteHello();

}
