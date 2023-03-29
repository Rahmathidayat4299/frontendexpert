/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
	<style>
	/*
  AppBar
*/
.app-bar .app-bar__navigation ul li a {
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 8px;
  margin-bottom: 5px;
  width: 100%;
  min-width: 44px;
  min-height: 44px;
}


.app-bar {
  padding: 5px 9px;
  background-color: white;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
 
.app-bar .app-bar__menu {
  display: flex;
  align-items: center;
}
 
.app-bar .app-bar__menu button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
}
 
.app-bar .app-bar__brand {
  display: flex;
  align-items: center;
}
 
.app-bar .app-bar__brand h1 {
  color: #db0000;
  text-transform: uppercase;
  font-size: 22px;
  user-select: none;
}
 
.app-bar .app-bar__navigation {
  position: absolute;
  top: 50px;
  left: -180px;
  width: 150px;
  transition: all 0.3s;
  padding: 8px;
  background-color: white;
  overflow: hidden;
}
 
.app-bar .app-bar__navigation.open {
  left: 0;
}
 
.app-bar .app-bar__navigation ul li a {
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 8px;
  margin-bottom: 5px;
  width: 100%;
}

@media screen and (min-width: 650px) {
	.app-bar {
	  grid-template-columns: 1fr auto;
	  padding: 8px 32px;
	}
   
	.app-bar .app-bar__brand h1 {
	  font-size: 1.5em;
	}
   
	.app-bar .app-bar__menu {
	  display: none;
	}
   
	.app-bar .app-bar__navigation {
	  position: static;
	  width: 100%;
    backgorund-color: #ffff;
	}
   
	.app-bar .app-bar__navigation ul li {
	  display: inline-block;
	}
   
	.app-bar .app-bar__navigation ul li a {
	  display: inline-block;
	  width: 120px;
	  text-align: center;
	  margin: 0;
	}
	//hover
	.nav-menu li:hover a {
		color: #FF7F50;
		transition: all 0.2s ease-in-out;
	  }
	</style>
	<header class="app-bar">
    <div class="app-bar__menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="app-bar__brand">
      <h1>Katalog restaurant</h1>
    </div>
    <nav id="navigationDrawer" class="app-bar__navigation">
      <ul class="nav-menu">
	    <li><a href="#/home">Home</a></li>
      <li><a href="#/favorite">Favorite</a></li>
      <li><a href="https://www.linkedin.com/in/rahmat-hidayat-a19419136/">About Us</a></li>
      </ul>
    </nav>
  </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
