class HelloWebComponent extends HTMLElement {
  constructor() {
    super();
    console.log("Hello World from Web Component !");
  }
}
customElements.define("hello-world", HelloWebComponent);
