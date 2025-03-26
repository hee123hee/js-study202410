const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 120];

// 숫자 배열에서 홀수번째 데이터만 필터링해서
// 해당 수에 50을 더해서 매핑

let total = 0;

const mappedArray = nums
    .filter((n, i) => i % 2 === 0) // 홀수번째 데이터 필터링
    .map((n) => n + 50)  // 각 숫자에 50 더하기
    .forEach(n => total += n); // 합계를 구하기

console.log(total);

const arr = nums.filter(n => n % 3 === 0).slice(0, 2)[1]*10;
console.log(arr);

function foo() {
    return [];
}
function bar() {
    return '떡볶이';
}

function goo() {
    return 10;
}

let result = goo();
result++;
console.log(result);