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


/*********************************************************************/
// TOP
const services = document.querySelector('nav a');
services.textContent = siteContent["nav"]["nav-item-1"];

const product = document.querySelector('nav a:nth-of-type(2)');
product.textContent = siteContent["nav"]["nav-item-2"];

const vision = document.querySelector('nav a:nth-of-type(3)');
vision.textContent = siteContent["nav"]["nav-item-3"];

const features = document.querySelector('nav a:nth-of-type(4)');
features.textContent = siteContent["nav"]["nav-item-4"];

const about = document.querySelector('nav a:nth-of-type(5)');
about.textContent = siteContent["nav"]["nav-item-5"];

const contact = document.querySelector('nav a:nth-of-type(6)');
contact.textContent = siteContent["nav"]["nav-item-6"];

const title = document.querySelector('h1');
title.textContent = siteContent["cta"]["h1"];

const hero = document.querySelector('#cta-img');
hero.setAttribute('src', siteContent["cta"]["img-src"]);

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const navBar = document.querySelector('nav');

const tag1 = document.createElement('a');
tag1.setAttribute('href', "#")
tag1.textContent = "Home";
navBar.prepend(tag1);

const tag2 = document.createElement('a');
tag2.setAttribute('href', "#")
tag2.textContent = "Preview";
navBar.append(tag2);

const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => link.style.color = 'green');

// top content

const sub1 = document.querySelector('.top-content .text-content h4');
sub1.textContent = siteContent["main-content"]["features-h4"];

const info1 = document.querySelector('.top-content .text-content p');
info1.textContent = siteContent["main-content"]["features-content"];
 
const sub2 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
sub2.textContent = siteContent["main-content"]["about-h4"];

const info2 = document.querySelector('.top-content .text-content:nth-of-type(2) p');
info2.textContent = siteContent["main-content"]["about-content"];

const banner = document.querySelector('#middle-img');
banner.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom content

const sub3 = document.querySelector('.bottom-content .text-content h4');
sub3.textContent = siteContent["main-content"]["services-h4"];

const info3 = document.querySelector('.bottom-content .text-content p');
info3.textContent = siteContent["main-content"]["services-content"];
 
const sub4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
sub4.textContent = siteContent["main-content"]["product-h4"];

const info4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
info4.textContent = siteContent["main-content"]["product-content"];

const sub5 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
sub5.textContent = siteContent["main-content"]["vision-h4"];

const info5 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
info5.textContent = siteContent["main-content"]["vision-content"];

// contact 

const contacts = document.querySelector('.contact h4');
contacts.textContent = siteContent["contact"]["contact-h4"];
 
const address1 = document.querySelector(".contact p");
address1.textContent = siteContent['contact']['address'];

const address2 = document.querySelector(".contact p:nth-of-type(2)");
address2.textContent = siteContent['contact']['phone'];

const address3 = document.querySelector(".contact p:nth-of-type(3)");
address3.textContent = siteContent['contact']['email'];

// footer

const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"]

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
