// First page animation - section 1: What is PML?

document.addEventListener('DOMContentLoaded', (event) => {



});

  






// shrinking nav

    const navigation = document.querySelector('.navigation');
   const navLogo = document.querySelector('.navlogo');

   function toggleNavigationAndLogo() {
    if (window.scrollY > 39) {
        navigation.style.height = '70px';
        navLogo.style.opacity = '100';
    } else {
        navigation.style.height = '100px';
        navLogo.style.opacity = '0';
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




            