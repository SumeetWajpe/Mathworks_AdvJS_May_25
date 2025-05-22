if (navigator.serviceWorker) {
  window.addEventListener("load", function () {
    this.navigator.serviceWorker.register("serviceworker.js").then(function () {
      console.log("Service Worker: Registered");
    });
  });
}
