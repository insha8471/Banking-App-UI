"use strict";


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.btn--close-modal');
const btnopenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

// Modal Window -- sign-up/login page



const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function(e){
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnopenModal.forEach(btn => btn.addEventListener('click', openModal));

btncloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


            // Smooth Scroll 

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log(window.pageXOffset, window.pageYOffset);
  
  //scrolling 
    // 1
  // window.scrollTo(s1coords.left + window.pageXOffset,s1coords.top + window.pageYOffset);

  // 2
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth'
  })

  // New method 
  // section1.scrollIntoView({ behavior: 'smooth' });
});

// page Navigation -- scrolling

const navLink = document.querySelectorAll('.nav__link');
const navLinks = document.querySelector('.nav__links');

// navLink.forEach( function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   });
// })

// event delegation
navLinks.addEventListener('click', function(e) {
  e.preventDefault();

  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }

})


// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabscontainer = document.querySelector('.operations__tab-container');
const tabscontent = document.querySelectorAll('.operations__content');

//event delegation
tabscontainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');
  if(!clicked) return;

  //Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active content area
  tabscontent.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})



//  Menu fade animation  ****************************************************************=>
 
function handleHover(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    console.log(e);
    console.log(this);
    
    if(e.target.classList.contains('nav__link')){
      const link = e.target;
      const sibling = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      sibling.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  }
}


nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));