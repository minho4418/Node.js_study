// callback 과 promise 차이
// 첫번째로 비동기 작업의 추가/수정의 유연함 -> 콜백은 의존성이 길게 이어져 있는 비동기
// 작업할때 어려움 -> 콜백지옥
// 두번째로 코드 유지보수성 증가이다. -> 콜백패턴은 비동기 작업이 실패했는지 
// 성공했는지 대기중인지를 알려주지 않는다.
// -> Promise는 비동기 작업을 추상화 한 객체이므로 비동기 작업이 현재 어떤 상태인지를 쉽게 값으로 확인
// callback을 사용하면 비동기 로직의 결과값을 처리하기 위해서는 
// callback안에서만 처리를 해야하고, 콜백 밖에서는 비동기에서 온 값을 알 수가 없습니다. 
// 하지만 promise를 사용하면 비동기에에서 온 값이 promise 객체에 저장되기 때문에 
// 코드 작성이 용이해집니다.
const promise1 = new Promise((resolve, reject) => {
    resolve();
  });
  promise1
    .then(() => {
      console.log("then!");
    })
    .catch(() => {
      console.log("catch!");
    });


function startAsync(age) {
  return new Promise((resolve, reject) => {
    if (age > 20) resolve();
    else reject();
  });
}

setTimeout(() => {
  const promise1 = startAsync(25);
  promise1
    .then(() => {
      console.log("1 then!");
    })
    .catch(() => {
      console.log("1 catch!");
    });
  const promise2 = startAsync(15);
  promise2
    .then(() => {
      console.log("2 then!");
    })
    .catch(() => {
      console.log("2 catch!");
    });
}, 1000);