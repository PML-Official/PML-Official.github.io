// First page animation - section 1: What is PML?

let animationTriggered = false;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const section1Text = document.getElementById('section1Text');
    const redline = document.getElementById('redline');
    const button = document.getElementById('button2');

    if (animationTriggered) {
        return;
    }

    if (isInViewport(section1Text)) {
        section1Text.classList.add('section1-animate');
        animationTriggered = true;
    } else {
      section1Text.classList.remove('section1-animate')
    }

    if (isInViewport(redline)) {
        redline.classList.add('redline-animate');
        animationTriggered = true; 
    } else {
      redline.classList.remove('redline-animate')
    }

    if (isInViewport(button)) {
        button.classList.add('button-animate');
        animationTriggered = true;
    } else {
        button.classList.remove('button-animate');
    }

    if (animationTriggered) {
        window.removeEventListener('scroll', handleScroll);
    }
}
window.addEventListener('scroll', handleScroll);

handleScroll();


  






// shrinking nav

    const navigation = document.querySelector('.navigation');
   const navLogo = document.querySelector('.navlogo');

   function toggleNavigationAndLogo() {
    if (window.scrollY > 0) {
        navigation.style.height = '70px';
        navLogo.style.height = '70px';
    } else {
        navigation.style.height = '100px';
        navLogo.style.height = '100px';
    }
}

 window.addEventListener('scroll', toggleNavigationAndLogo);

 // Mobile Nav
  var mobileNav = document.getElementById('mobile-nav');
  mobileNav.classList.add('hidden');
 
  
  function toggleBlock() {
      var menuIcon = document.getElementById('menu-icon');
      var closeIcon = document.getElementById('close-icon');
      var mobileNav = document.getElementById('mobile-nav');
          if (mobileNav.classList.contains('hidden')) {
                  mobileNav.classList.remove('hidden');
                  mobileNav.classList.add('visible');
                  menuIcon.style.display = 'none';
                  closeIcon.style.display = 'inline';
                  } else {
                      mobileNav.classList.remove('visible');
                      mobileNav.classList.add('hidden');
                      menuIcon.style.display = 'inline';
                      closeIcon.style.display = 'none';
                  }
              };



            