let arr = [];

onmessage = function (msg) {
  //   console.log(this);
  // No access to DOM
  // No Access to window
  // no access to document
  // Access to XMLHttpRequest / fetch

  console.log("Log from worker");
  //   console.log(eval(msg.data));

  for (let i = 0; i < 15000; i++) {
    arr[i] = [];
    for (let j = 0; j < 15000; j++) {
      arr[i][j] = Math.random();
    }
  }
  console.log(msg.data);
  postMessage(arr[5000][5000]);
  arr = null;
};
