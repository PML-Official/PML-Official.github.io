
// Function to check if an element is in the viewport
//function isInViewport(element) {
  //  const rect = element.getBoundingClientRect();
  //  return (
  //    rect.top >= 0 &&
  //    rect.left >= 0 &&
    //  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//    );
//  }
  
  // Function to handle scroll event
//  function handleScroll() {
//    const animatedBlock = document.getElementById('animatedBlock');
//    if (isInViewport(animatedBlock)) {
 //     animatedBlock.classList.add('animated');
      // Remove the scroll event listener once the animation is triggered
 //     window.removeEventListener('scroll', handleScroll);
//    }
//  }
  
  // Add scroll event listener
//  window.addEventListener('scroll', handleScroll);
  






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

