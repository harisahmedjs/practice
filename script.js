document.addEventListener('DOMContentLoaded', function () {
    let parallaxBackground = document.querySelector('.parallax-background');
  
    window.addEventListener('scroll', function () {
      let scrolledHeight = window.pageYOffset;
      parallaxBackground.style.transform = 'translate3d(0,' + scrolledHeight * 0.5 + 'px, 0)';
    });
  });
  