class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.tooltip = null;
    this.tooltipText = "Dummy Text !";
  }
  // fired when this element is attached to the DOM
  connectedCallback() {
    let tooltipIcon = document.createElement("span");
    tooltipIcon.innerText = "(?)";
    tooltipIcon.addEventListener("mouseenter", () => this.showToolTip());
    tooltipIcon.addEventListener("mouseleave", () => this.hideToolTip());

    this.style.position = "relative";

    if (this.hasAttribute("text")) {
      this.tooltipText = this.getAttribute("text");
    }
    this.appendChild(tooltipIcon);
  }

  showToolTip() {
    this.tooltip = document.createElement("div");
    this.tooltip.innerText = this.tooltipText;
    this.tooltip.style.backgroundColor = "black";
    this.tooltip.style.color = "white";
    this.tooltip.style.border = "2px solid grey";
    this.tooltip.style.borderRadius = "3px";
    this.tooltip.style.padding = "3px";
    this.tooltip.style.fontSize = "10px";
    this.tooltip.style.width = "max-content";
    this.tooltip.style.position = "absolute";
    this.tooltip.style.left = "10px";
    this.tooltip.style.top = "-20px";

    this.appendChild(this.tooltip);
  }
  hideToolTip() {
    this.removeChild(this.tooltip);
  }
}

customElements.define("uc-tooltip", Tooltip);
