//使用setTimeout
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

//使用时间间隔
function throttle2(bizFunc, restTime) {
  let lastTime = new Date().getTime();
  return function (...args) {
    let now = new Date().getTime();
    if (now - lastTime >= restTime) {
      lastTime = now;
      bizFunc.call(this, ...args);
    }
  };
}
