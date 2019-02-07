const buttonNoMemoization = document.getElementById('buttonNoMemoization');
const buttoMemoization = document.getElementById('buttonMemoization');
const inputTimes = document.getElementById('times');

const randomArray = len =>
  Array.from({ length: len }, () => Math.floor(Math.random() * len));

const params = [
  randomArray(19000),
  randomArray(19000),
  randomArray(19000),
  randomArray(19000)
];

buttonNoMemoization.addEventListener('click', () => {
  console.clear();
  const times = inputTimes.value;

  console.log('NOT USING MEMOIZATION');
  console.log('first execution');
  for (let i = times; i > 0; i--) {
    params.forEach(param => measureTime(isUniqueExponential, param));
  }
  console.log('---- FINISHED ----');
});
buttonMemoization.addEventListener('click', () => {
  console.clear();
  const times = inputTimes.value;
  const isUniqueExponentialMemoized = memoize(isUniqueExponential); //Decorator Pattern
  console.log('USING MEMOIZATION');
  console.log('first execution');
  for (let i = times; i > 0; i--) {
    params.forEach(param => measureTime(isUniqueExponentialMemoized, param));
  }
  console.log('---- FINISHED ----');
});

const memoize = fn => {
  const cache = {};
  return (...args) => {
    const stringifiedArgs = JSON.stringify(args);
    const result = (cache[stringifiedArgs] =
      typeof cache[stringifiedArgs] === 'undefined'
        ? fn(...args)
        : cache[stringifiedArgs]);
    return result;
  };
};

const isUniqueExponential = arr => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  return result;
};

const measureTime = (cb, args) => {
  const t0 = performance.now();
  cb(args);
  const t1 = performance.now();
  console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
};
