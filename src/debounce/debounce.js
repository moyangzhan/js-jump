function debounce(bizFunc, restTime) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      bizFunc.call(this, ...args);
    }, restTime);
  };
}
