// 동기 : 한번에 여러 작업 불가
let i = 0;
function decryptData(callback, wait, age) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + wait); 
  callback(`${age}세 은행원`);
}

decryptData(console.log, 1000, 20);
decryptData(console.log, 1000, 37);
decryptData(console.log, 1000, 59);


// 비동기 : 한번에 여러 작업 가능
function finishJob(num) {
  console.log(`${num}번 요원의 정보를 받아왔습니다.`);
}

setTimeout(finishJob, 2000, 1);
setTimeout(finishJob, 1500, 2);
setTimeout(finishJob, 1000, 3);
console.log("정보 요청을 모두 보냈습니다.");
// setTimeout 은 인자로 들어온 콜백 함수를 예약하기만 하고 바로 끝난다.
// setTimeout 에 의해 기다리는 동작은 본래의 코드 흐름과는 상관 없이 따로따로 독립적으로 돌아간다. (위 그림처럼 세 개 동시에 기다리는 모습이다.)
// 이렇게 따로따로 독립적으로 돌아가는 작업을 비동기 작업이라고 한다.