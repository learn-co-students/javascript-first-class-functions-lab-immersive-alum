function countdown(callback) {
  window.setTimeout(function() {
    callback();
  }, 2000);
}

var doubler = createMultiplier(2);

var tripler = createMultiplier(3);

function createMultiplier(multiplierValue) {
  return function(a) {
    return a * multiplierValue;
  };
}

function multiplier(valA, valB) {
  return function() {
    valA * valB;
  };
}

var doublerWithBind = multiplier(2).bind(null);

var triplerWithBind = multiplier(3).bind(null);
