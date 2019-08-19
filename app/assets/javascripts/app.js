// === Wagon main javascript file ===
import jquery from './jquery.js';
import $ from './jquery.js';
import './jquery.mixitup.js';
import './bootstrap.js';
import './jquery.bxslider.js';
import './jquery.cslider.js';
import './jquery.placeholder.js';
import './jquery.inview.js';
import './appli.js';

// Tell Webpack to load the style
import '../stylesheets/app.scss';

// Import the classes required to handle sections
import SectionsManager from './sections/_manager';
import * as Sections from './sections';

document.addEventListener('DOMContentLoaded', event => {

  // Load all the sections
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('contact', Sections.Contact);
  sectionsManager.registerSection('price', Sections.Price);
  sectionsManager.registerSection('clients', Sections.Client);
  sectionsManager.registerSection('about', Sections.About);
  sectionsManager.registerSection('portfolio', Sections.Portfolio);
  sectionsManager.registerSection('service', Sections.Service);
  sectionsManager.registerSection('home', Sections.Home);

  sectionsManager.start();

});
