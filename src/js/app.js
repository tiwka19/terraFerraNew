/*
(i) The code goes into the summary file,
only when the function is called,
for example flsFunctions.spollers();
Or when the entire file is imported,
for example, import "files/script.js";
Unused (not called)
the code does not enter the final file.

If we want to add a module
it should be uncommented
*/
// Enable/disable FLS (Full Logging System) (in progress)

window['FLS'] = false;

// Connecting the main style file
import '../scss/style.scss';

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
// Functional ================================================= ================================================= ================================================= ================================================= ================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from './files/functions.js';

/* Checking for webp support, adding a webp or no-webp class for HTML*/
/* (i) is necessary for correct rendering of webp with css*/
flsFunctions.isWebp();
/* Adding a touch class for HTML if the browser is mobile*/
// flsFunctions.addTouchClass();
/* Adding loaded to HTML after the page is fully loaded*/
// flsFunctions.addLoadedClass();
/* Module for working with the menu (Burger)*/
flsFunctions.menuInit();
/* Accounting for floating panel on mobile devices at 100vh*/
// flsFunctions.fullVHfix();
/* Number formatting*/
// import './libs/wNumb.min.js';
/*
Module "Spoilers"
Documentation: https://template.fls.guru/template-docs/modul-spojlery.html
Snippet (HTML): spollers
*/
flsFunctions.spollers();
/*
Tabs module
Documentation: https://template.fls.guru/template-docs/modul-taby.html
Snippet (HTML): tabs
*/
flsFunctions.tabs();
/*
Show more module
Documentation: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Snippet (HTML): showmore
*/
// flsFunctions.showMore();
/*
Wave Effect Module
Documentation: https://template.fls.guru/template-docs/modul-ripple-effect.html
Snippet (HTML):
*/
// flsFunctions.rippleEffect();
/*
Custom Cursor Module
Documentation:
Snippet (HTML):
*/
// flsFunctions.customCursor(true);
/*
"Popups" module
Documentation: https://template.fls.guru/template-docs/funktional-popup.html
Snippet (HTML): pl, pop
*/
import './libs/popup.js';
/*
Mouse parallax module
Documentation: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'
// ========================================================================================================================================================================================================================================================
// Working with forms =============================================== ================================================= ================================================= ================================================= ================================================= =
// ========================================================================================================================================================================================================================================================
import * as flsForms from './files/forms/forms.js';

/* Working with form fields*/
/* Documentation: https://template.fls.guru/template-docs/rabota-s-formami.html*/
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Form submission*/
/* Documentation: https://template.fls.guru/template-docs/rabota-s-formami.html*/
// flsForms.formSubmit();
/* Quantity form module*/
// flsForms.formQuantity();
/* Star rating module*/
// flsForms.formRating();
/* Module for working with select.*/
// import './libs/select.js'
/* Calendar module*/
// import './files/forms/datepicker.js'
/* (Working) Module for working with masks.*/
/*
Connection and configuration is done in the file js/files/forms/inputmask.js
Work documentation in the template:
Plugin documentation: https://github.com/RobinHerbots/inputmask
Snippet (HTML):
*/
// import "./files/forms/inputmask.js";
/* Module for working with a slider*/
/*
Connection and configuration is done in the js/files/forms/range.js file
Work documentation in the template:
Plugin documentation: https://refreshless.com/nouislider/
Snippet (HTML): range
*/
// import "./files/forms/range.js";
/* Tips module (tippy)*/
/*
Tippy.js plug-in and configuration is done in the js/files/tippy.js file
Work documentation in the template:
Plugin documentation: https://atomiks.github.io/tippyjs/
Snippet (HTML): tip (adds an attribute with a hint for the html tag)
*/
// import "./files/tippy.js";
// ========================================================================================================================================================================================================================================================
// Working with the slider (Swiper) ==================================================== ================================================= ================================================= ================================================= ================================================= ====
// ================================================= ================================================= ================================================= ================================================= ===============================================
/*
Configuring the connection of the Swiper slider plugin and new sliders is done in the js/files/sliders.js file
Documentation on work in the template: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Plugin documentation: https://swiperjs.com/
Snippet (HTML): swiper
*/
import './files/sliders.js';
// ================================================= ================================================= ================================================= ================================================= ===============================================
// Page scrolling modules ===================================================== ================================================= ================================================= ================================================= ================================================= ===
// ================================================= ================================================= ================================================= ================================================= ===============================================
/*
Changing the design of the scrollbar
Documentation on work in the template: In HTML, add the data-simplebar attribute to the block
Plugin documentation: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Snippet (HTML):
*/
// import './files/scroll/simplebar.js';
// Lazy (delayed) loading of pictures
// Documentation on work in the template: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Plugin documentation: https://github.com/verlok/vanilla-lazyload
// Snippet (HTML):
import './files/scroll/lazyload.js';
// Object watcher with the data-watch attribute
// Documentation: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Snippet (HTML):
// import './libs/watcher.js'
// Screen scrolling module
// Documentation: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Snippet (HTML):
// import './libs/fullpage.js'
// Parallax module
// Documentation: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Snippet (HTML):
// import './libs/parallax.js'
// Scrolling functions
import * as flsScroll from './files/scroll/scroll.js';

// Smooth page navigation
// Documentation: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
flsScroll.pageNavigation();
// Functionality of adding classes to the header during scrolling
// Documentation: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
flsScroll.headerScroll();
// Digital counter animation module
// Documentation: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Snippet (HTML):
// flsScroll.digitsCounter();
// ========================================================= ========================================================= ========================================================= ========================================================= =======================================================
// Gallery ================================================ ================================================= ================================================= ================================================= ================================================
// ================================================= ================================================= ================================================= ================================================= ===============================================
/*
Work documentation in the template:
Plugin documentation: https://www.lightgalleryjs.com/docs/
Snippet (HTML):
*/
// import "./files/gallery.js";
// ========================================================================================================================================================================================================================================================
// Masonry mesh =============================================== ================================================= ================================================= ================================================= =================================================
// ================================================= ================================================= ================================================= ================================================= ===============================================
/*
Work documentation in the template:
Plugin documentation:
Snippet (HTML):
*/
// import "./files/isotope.js";
// ========================================================================================================================================================================================================================================================
// Other plugins ======================================================= ================================================= ================================================= ================================================= ================================================= ================================================= ==
// ================================================= ================================================= ================================================= ================================================= ===============================================
/* Dynamic adaptive*/
// Documentation: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";
// ========================================================================================================================================================================================================================================================
// Other ================================================ ================================================= ================================================= ================================================= ================================================
// ================================================= ================================================= ================================================= ================================================= ===============================================
/* We connect the files with our code*/
import './files/script.js';
//============================================================================================================================================================================================================================================
