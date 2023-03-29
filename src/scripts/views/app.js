/* eslint-disable spaced-comment */
/* eslint-disable no-underscore-dangle */
import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import DrawerInitiator from "../utils/drawer-initiator";

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    //smooth content
    const mainContent = document.querySelector(".mainContent");
    const skipLink = document.querySelector(".skip-link");
    skipLink.addEventListener("click", (e) => {
      e.preventDefault();
      mainContent.scrollIntoView({ behavior: "smooth" });
      skipLink.blur();
    });
  }
}

export default App;