//<img src="placeholder.svg" data-src="https://en.js.cx/clipart/solar/neptune.jpg" width="390" height="390">
 

   
    
    function isVisible(elem) {
      const posY = elem.getBoundingClientRect().y;
      
      if(!posY) return false;
      if((pageYOffset+100) >= posY) return true;
    }

    function showVisible() {
      for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;

        if (isVisible(img)) {
          // disable caching
          // this line should be removed in production code
          realSrc += '?nocache=' + Math.random();

          img.src = realSrc;

          img.dataset.src = '';
        }
      }

    }

    window.addEventListener('scroll', showVisible);
    showVisible();
