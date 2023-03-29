class DetailContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="detail-content">
      <div class="container">
        <div class="restaurant-details" id="resto-detail"></div>
      </div>
    </div>
    `;
  }
}

customElements.define('detail-content', DetailContent);
