







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

