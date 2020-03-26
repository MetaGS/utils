const slider = document.getElementById('slider');
    const thumb = document.querySelector('.thumb');

    thumb.addEventListener('mousedown', function(event){
      console.log('started');
      // thumb.style.position = 'absolute';

      let sliderCoords = slider.getBoundingClientRect();

      let exactPos = event.pageX - thumb.getBoundingClientRect().left;
      console.log(`exact pos: ${exactPos}`);
      
      function moveSlider(event) {
        console.log('slider moves');
        const {pageX:x, pageY:y} = event;
        console.log('here is x :'+x);
        if (x < sliderCoords.right && x > sliderCoords.left)
        thumb.style.left = x + exactPos + -20 +'px';
        
      }
      document.addEventListener('mousemove', moveSlider);
      document.body.addEventListener('mouseup', function(event){
        document.removeEventListener('mousemove', moveSlider)
      })
    })
    
    /*
    <div id="slider" class="slider">
      <div class="thumb"></div>
    </div>
    */
