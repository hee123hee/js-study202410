// 무작위 정수 2개 생성
let firstNum = Math.floor(Math.random() * 10) + 1;
let secondNum = Math.floor(Math.random() * 10) + 1;

// 문제 출제
let userAnswer = +prompt(`Q1. ${firstNum} + ${secondNum} = ??`);

// 실제 답 생성
let realAnswer = firstNum + secondNum;

// 정답 판별
if (userAnswer === realAnswer) {
  alert('정답입니다!');
} else {
  alert('틀렸습니다!');
}



// console.log('=================');

// // 문제 번호 생성
// let questionNumber = 1;

// while (true) {
//   // 무작위 정수 2개 생성
//   let firstNum = Math.floor(Math.random() * 10) + 1;
//   let secondNum = Math.floor(Math.random() * 10) + 1;

//   // 문제 출제
//   let userAnswer = +prompt(`Q${questionNumber}. ${firstNum} + ${secondNum} = ??`);

//   // 문제 출제 이후 문제번호 증가
//   questionNumber++;

//   // 0인지 확인
//   if (userAnswer === 0) {
//     alert('게임을 종료합니다.');
//     break;
//   }

//   // 실제 답 생성
//   let realAnswer = firstNum + secondNum;

//   // 정답 판별
//   if (userAnswer === realAnswer) {
//     alert('정답입니다!');
//   } else {
//     alert('틀렸습니다!');
//   }
// }


// console.log('=================');

// // 문제 번호 생성
// let questionNumber = 1;

// // 정답, 오답 횟수를 저장
// let correctCount = 0;
// let wrongCount = 0;

// while (true) {
//   // 무작위 정수 2개 생성
//   let firstNum = Math.floor(Math.random() * 10) + 1;
//   let secondNum = Math.floor(Math.random() * 10) + 1;

//   // 문제 출제
//   let userAnswer = +prompt(`Q${questionNumber}. ${firstNum} + ${secondNum} = ??`);

//   // 문제 출제 이후 문제번호 증가
//   questionNumber++;

//   // 0인지 확인
//   if (userAnswer === 0) {
//     alert('게임을 종료합니다.');
//     break;
//   }

//   // 실제 답 생성
//   let realAnswer = firstNum + secondNum;

//   // 정답 판별
//   if (userAnswer === realAnswer) {
//     alert('정답입니다!');
//     correctCount++;
//   } else {
//     alert('틀렸습니다!');
//     wrongCount++;
//   }
// } // end while

// // 정오답 횟수 출력
// alert(`# 정답 횟수: ${correctCount}, 틀린 횟수: ${wrongCount}`);
