function GetData() {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest(); // Browser API
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // parse the JSON response
        var data = JSON.parse(xhr.responseText);
        // log the data to the console

        // console.log(data);
        resolve(data); // resolve the promise with the data
      } else if (xhr.readyState == 4 && xhr.status != 200) {
        // log the error to the console
        // callbackFn(null, "Error: " + xhr.status);
        reject("Error: " + xhr.status); // reject the promise with the error
      }
    };
    xhr.send(); // send the request (async call)
  });
}
