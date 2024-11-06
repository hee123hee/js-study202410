const traders = [
    {
      trader: {
        name: "김철수", // traders[0].trader.name
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022, // traders[1].year
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2023,
      value: 1500000,
    },
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2022,
      value: 2500000,
    },
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2022,
      value: 500000,
    },
  ];


// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요


const mappedArray = traders.filter(user =>traders.year===2022)

    .map((traders)=> ({
        name: traders.name,
        city: traders.city,
    }));

    console.log(mappedArray);
    

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

const traders = [
    { trader: { name: "김철수", city: "대전" }, year: 2023, value: 500000 },
    { trader: { name: "박영희", city: "서울" }, year: 2022, value: 600000 },
    { trader: { name: "김철수", city: "대전" }, year: 2022, value: 1200000 },
    { trader: { name: "박영희", city: "서울" }, year: 2023, value: 650000 },
    { trader: { name: "뽀로로", city: "부산" }, year: 2023, value: 800000 },
    { trader: { name: "루피", city: "대전" }, year: 2022, value: 780000 },
    { trader: { name: '김철수', city: '대전' }, year: 2023, value: 1500000 },
    { trader: { name: '김철수', city: '대전' }, year: 2022, value: 2500000 },
    { trader: { name: '김철수', city: '대전' }, year: 2022, value: 500000 },
];

// 2022년에 발생한 모든 거래를 필터링하고 거래자 정보를 매핑
const tradersIn2022 = traders
    .filter(trader => trader.year === 2022) // 2022년 거래만 필터링
    .map(trader => ({ name: trader.trader.name, city: trader.trader.city })); // 거래자 정보 매핑

console.log(tradersIn2022);
  