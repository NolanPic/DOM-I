const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Set nav items
const navLinks = document.querySelectorAll('nav>a');

// Loop thru a tags and match up with the correct property in the 'nav' object
navLinks.forEach((el, index) => {
  el.textContent = Object.values(siteContent['nav'])[index];
});

// set CTA heading
const ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.textContent = siteContent['cta']['h1'];

// set CTA button
const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent['cta']['button'];

// set cta image
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// top content
const featuresH4 = document.querySelector('.top-content .text-content h4');
const featuresContent = document.querySelector('.top-content .text-content p');
const aboutH4 = document.querySelector('.top-content .text-content:last-child h4');
const aboutContent = document.querySelector('.top-content .text-content:last-child p');

featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

// middle image
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// bottom content
const servicesH4 = document.querySelector('.bottom-content .text-content h4');
const servicesContent = document.querySelector('.bottom-content .text-content p');
const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
const productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
const visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
const visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');

servicesH4.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];
productH4.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];
visionH4.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];

// contact
const contactH4 = document.querySelector('.contact h4');
const contactAddress = document.querySelector('.contact p');
const contactPhone = document.querySelector('.contact p:nth-child(3)');
const contactEmail = document.querySelector('.contact p:nth-child(4)');

contactH4.textContent = siteContent['contact']['contact-h4'];
contactAddress.textContent = siteContent['contact']['address'];
contactPhone.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];

// footer
const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];

// ***** adding new content *****

// add new links to nav
const homeLink = document.createElement('a');
const newsLink = document.createElement('a');

homeLink.textContent = 'Home';
newsLink.textContent = 'News';

const nav = document.querySelector('nav');
nav.prepend(homeLink);
nav.appendChild(newsLink);

// change color of nav
// can't reuse 'navLinks' because it does not contain the new elements
const navItems = document.querySelectorAll('nav>a');
navItems.forEach(el => (el.style.color = 'green'));

// STRETCH: use an event listener to update content on the
// site with a button click
// (button is in the footer)

const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = 'Dark mode';

darkModeBtn.addEventListener('click', darkMode);

document.querySelector('footer').append(darkModeBtn);

function darkMode() {
  const body = document.querySelector('body');
  body.style.backgroundColor = '#323539';
  body.style.color = '#fff';
  navItems.forEach(el => (el.style.color = '#fff'));
}