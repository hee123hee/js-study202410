
// 다른 js파일에서 데이터(변수, 상수, 함수, 클래스) 불러오기
import {$btn as $button, $text} from './getDOM.js';
import {clickHandler as cHandler} from './eventHandler.js';
import xyz, {food} from './calculation.js';


const $btn = 'button!';
const {add, sub} = xyz;
console.log(add(50,30));
console.log(sub(50,30));

food.foodName = '짬뽕';
console.log(food.foodName);



//버튼에 클릭 이벤트 등록
$button.addEventListener('click', cHandler);