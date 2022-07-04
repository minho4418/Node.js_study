// async 키워드는 일반 함수를 비동기 함수로 바꾸어 놓습니다.
// async 함수의 리턴 값은 무조건 Promise(await 뒤에 오는 부분은 반드시 promise를 반환)
// async는 promise의 코드를 깔끔하게 줄여주기 때문에 가독성을 높혀주는 효과
// 이렇게 만든 비동기 함수는 await 키워드를 사용해서, promise가 "정착" 상태가 될 때 까지 
// 그 실행을 일시 중지 시킬 수 있습니다. -> Promise 가 끝날 때까지 기다리거라.
// await를 사용할 때 가장 큰 제약 사항은, async로 표시한 함수의 본체 내부에서만 사용가능

function setTimeoutPromise(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), ms);
    });
  }
  
  async function startAsync(age) {
    if (age > 20) return `${age} success`;
    else throw new Error(`${age} is not over 20`);
  }
  
  async function startAsyncJobs() {
    await setTimeoutPromise(1000);
    const promise1 = startAsync(25);
    try {
      const value = await promise1;
      console.log(value);
    } catch (e) {
      console.error(e);
    }
    const promise2 = startAsync(15);
    try {
      const value = await promise2;
      console.log(value);
    } catch (e) {
      console.error(e);
    }
  }
  
  startAsyncJobs();


// async & await에서 예외를 처리하는 방법은 try ~ catch
async function test() {
    try {
        var user = await fetchUser();
        if (user.id === 1) {
            var todo = await fetchTodo();
            console.log(todo.title);
        }

    } catch(err) {
        console.log(error);
    }
}