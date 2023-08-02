function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
  
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  }
  function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
  }
  function toggleReadMore() {
    const readMoreContent = document.querySelector('.f p');
    const readMoreLink = document.querySelector('.read-more-link');
  
    if (readMoreContent.classList.contains('show')) {
      readMoreContent.classList.remove('show');
      readMoreLink.textContent = 'Read More';
    } else {
      readMoreContent.classList.add('show');
      readMoreLink.textContent = 'Read Less';
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a');
  
    for (const link of links) {
      link.addEventListener('click', clickHandler);
    }
  });
  
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
      