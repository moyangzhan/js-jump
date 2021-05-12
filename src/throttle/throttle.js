function throttle(bizFunc, restTime) {
  let resting = false;
  return function (...args) {
    if (resting) {
      return;
    }
    resting = true;
    setTimeout(() => {
      bizFunc.call(this, ...args);
      resting = false;
    }, restTime);
  };
}
