function GetData() {
  // make the AJAX call
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // parse the JSON response
      var data = JSON.parse(xhr.responseText);
      // log the data to the console
      console.log(data);
    } else if (xhr.readyState == 4 && xhr.status != 200) {
      // log the error to the console
      console.log("Error: " + xhr.status);
    }
  };
  xhr.send(); // send the request (async call)
  //
}
