  /**
   * Back to top button
   */
  let backtotop = document.querySelector('.back-to-top');

  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active');
    } else {
      backtotop.classList.remove('active');
    }
  };
  
  window.addEventListener('load', toggleBacktotop);
  window.onscroll = toggleBacktotop;
  
  backtotop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  