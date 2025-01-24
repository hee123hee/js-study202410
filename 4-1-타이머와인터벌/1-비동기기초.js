// 동기: 코드가 순차적으로 실핸된다.
// 비동기: 코드가 순서없이 실행된다.

// setTimeout : 비동기타이머 - 코드를 비동기로 동시에 실행시킴

console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');
