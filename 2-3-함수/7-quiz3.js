
function min2(n1, n2) {
    // if (n1 < n2) {
    //   return n1;
    // } else {
    //   return n2;
    // }
    return (n1 < n2) ? n1 : n2;
  }


  function min3(n1, n2, n3) {
    let min = n1;
    if (n2< min) min = n2;
    if (n3<min) min = n3;
    return min;
  }
  
  function isEven(n){
    // if (n%2 === 0){
    //     return true;
    // }else {
    //     return false;
    // }
    //   return( n%2 === 0 ) ? true : false;
      return n % 2 === 0;
  }
  
  //result에는 56이 리턴되어야 함.
  let result1 = min2(134, 56);
  console.log(`result1: ${result1}`);
  
  // 셋중에 가장 작은 수 50이 result에 저장되어야 함.
  let result2 = min3(120, 50, 99);
  console.log(`result2: ${result2}`);
  
  // 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
  // 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
  // 단, 0은 짝수취급
  let result3 = isEven(3);
  console.log(`result3: ${result3}`);
  

  console.log('===========');
  
//   n개의 정수중 최소값을 구해서 반환하는 함수
function min(...numberList){
    //최소값
    let candidate = numberList[0];
    for (let i = 1; i < numberList.length; i++){
        if (numberList[i] < 왕좌 ){
            candidate = numberList[i];
        }    }
        return candidate;
     

}

let result4 = min(9,76, -90, -1000, 555, 780);
// result4에는 -1000이 저장되어야 함.

let r4 = addAllES6(5, 8, 3, 10, 20, 30);
  console.log(`r4: ${r4}`);
  
  // let arr = [10, 20, 30];
  // arr.splice(2, 1, '', '', '');
  
  // function splice(start, deleteCount, ...items) {
  
  // }