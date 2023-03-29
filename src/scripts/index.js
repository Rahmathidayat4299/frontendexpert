/* eslint-disable no-unused-vars */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/app-bar';
import './component/footer-bar';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#posts'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
