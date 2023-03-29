class SearchWrapper extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    /* Style untuk elemen input */
    .input-group input {
      border-radius: 4px;
      border: none;
      padding: 10px;
      width: 80%;
      font-size: 16px;
      min-width: 44px;
      min-height: 44px;
    }
    
    /* Style untuk elemen button */
    .input-group button {
      background-color: #007bff;
      border-radius: 4px;
      border: none;
      color: #fff;
      padding: 10px 15px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      min-width: 44px;
      min-height: 44px;
    }
    
    /* Style untuk button ketika dihover */
    .input-group button:hover {
      background-color: #0069d9;
    }
    
    /* Style untuk elemen wrapper */
    .btn-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    
    /* Style untuk tampilan mobile */
    @media screen and (max-width: 768px) {
      .input-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 44px;
        min-height: 44px;
      }
    
      .input-group input {
        width: 100%;
        margin-bottom: 10px;
      }
    }
    
    </style>
      <div class="content-wrapper">
        <div class="container">
          <div class="heading">
            <h1 class="title-heading">Katalog Restaurant</h1>
          </div>
  
          <div class="btn-wrapper">
            <div class="input-group">
              <input type="text" class="form-control input-keyword" placeholder="Search Restaurant.." required>
              <button class="search-button" type="button">Search</button>
            </div>
          </div>
  
          <div class="gallery-item" id="resto-item"></div>
  
        </div>
      </div>
      `;
  }
}

customElements.define("search-wrapper", SearchWrapper);
