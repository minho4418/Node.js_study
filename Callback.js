// 콜백
const add5 = (number, callback) => {
    setTimeout(() => callback(number + 5), 1000);
};

const add10 = (number, callback) => {
    setTimeout(() => callback(number + 10), 1000);
};

const add15 = (number, callback) => {
    setTimeout(() => callback(number + 15), 1000);
}

const log = (number) => {
    console.log(number);
}

add5(0, (number) => add10(number, (number) => add15(number, log)));

// promise
const add5 = number =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(number + 5);
    }, 1000),
  );

const add10 = number =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(number + 10);
    }, 1000),
  );

const add15 = number =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(number + 15);
    }, 1000),
  );

const log = number => new Promise(resolve => setTimeout(() => console.log(number), 1000));

add5(0)
  .then(number => add10(number))
  .then(number => add15(number))
  .then(number => log(number));