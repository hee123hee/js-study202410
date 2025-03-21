let day = 'Tuesday';


switch (day) {
    case 'Monday':
    case '월요일':
        console.log('새로운 한 주가 시작되었습니다.');
        break;
    case '화요일' :
    case 'Tuesday' :
        console.log('화요일이니까 화이팅!');
        break;
    case '수요일' :
        console.log('이틀만 더 힘내세요');
        break;
    case '목요일' :
        console.log('거의 주말이 다가옵니다');
        break;
    case '금요일' :
        console.log('마지막 하루 잘 마무리 하세요');
        break;
    default:
        console.log('즐거운 주말 보내세요');
}