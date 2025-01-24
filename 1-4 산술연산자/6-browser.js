
console.log(10 * 3);

/*
 브라우저 전용함수 : nodejs환경에서는 실행 불가

 alert(): 브라우저 출력창을 띄움
 propmt(): 브라우저 입력창르 띄움
 confirm(): 브라우저 확인/취소창을 띄움

*/
// alert('야호!');

// let userName = prompt('당신의 이름은 무엇입니까?');
// alert(`당신은 ${userName}님이군요!`)

let num1 = +prompt(`좋아하는 첫번째 숫자를 입력하세요!`);
let num2 = +prompt(`좋아하는 두번째 숫자를 입력하세요!`);

// alert(`당신이 좋아하는 숫자의 합은 ${Number(num1) + Number(num2)}입니다.`)
// 문자 앞에 +를 붙이면 양수로 변환해줌.
alert(`당신이 좋아하는 숫자의 합은 ${num1 + num2}입니다.`);


