// const image = require('../../public/heros/hero-image.jpg');

class HeroElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <div class="hero-element">
      <div class="container">
        <div class="bg">
		  <picture>
            <source media="(max-width: 600px)" type="image/webp" class="lazyload" srcset="../public/heros/hero-image-small.webp">
            <source media="(max-width: 600px)" type="image/jpeg" class="lazyload" srcset="../public/heros/hero-image-small.jpg">
            <img class="lazyload" src="../public/heros/hero-image-large.jpg" alt="Hero Banner"/>
          </picture>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("hero-element", HeroElement);
