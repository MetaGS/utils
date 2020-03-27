const arrowTop = document.getElementById('arrowTop');

    arrowTop.onclick = function(event) {
      window.scrollTo(0,0)
    }
    window.addEventListener('scroll', toTop)

    function toTop(event) {
      const docEl = document.documentElement;
      const scrollOut = docEl.scrollTop > docEl.clientHeight;

      if(scrollOut) {
        arrowTop.hidden = false;
      } else {
        arrowTop.hidden = true;
      }


      console.log(`
        scrollTop:    ${docEl.scrollTop}
        typeof ${typeof docEl.scrollTop}
        clientHeight: ${docEl.clientHeight}
        typeof ${typeof docEl.clientHeight}
        scrollOut :   ${scrollOut}
      `)
    }
