
// 100개의 아이콘 띄우기


let $numbersIcon = document.querySelectorAll('.icon');
function 
for ( i =1; i<=100; i++){
  console.log(i);
}
$numbersIcon.addEventListener('click',play)




let randomNum = 0
function pickRandomNum(){
  randomNum = Math.floor(Math.random()*100)+1;

}

let userInput = document.getElementById('user-input')
