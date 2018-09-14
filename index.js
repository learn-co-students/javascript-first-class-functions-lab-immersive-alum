function countdown (callback) {
  setTimeout(() => {
    callback();
   }, 2000);
}

function createMultiplier(multiplierValue) {
  return function (value) {
    return multiplierValue * value;
  };
}

function multiplier(a, b) {
  return a * b;
}

let doubler = createMultiplier(2);
let tripler = createMultiplier(3);

let doublerWithBind = multiplier.bind(null, 2);
let triplerWithBind = multiplier.bind(null, 3);