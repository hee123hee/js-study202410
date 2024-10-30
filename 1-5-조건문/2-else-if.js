let age = 35;

if (age > 19) {
  console.log("성인 입니다");
} else if (age >= 17) {
  console.log("고딩 입니다");
} else if (age >= 14) {
  console.log("중딩 입니다");
} else if (age >= 8) {
  console.log("초딩 입니다");
}
else if (age >=8) {
    console.log('미취학 아동입니다');
}

// if 와 else if의 차이
//  else if는 그룹화임. 주의점은 차례대로 진행되기 때문에 
// 위 조건이 아래 조건을 먹어버림.

// ex. if 100번쨰 방문자만 커피쿠폰 줄거임
