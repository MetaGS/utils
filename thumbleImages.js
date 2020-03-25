

const thumbs = document.getElementById('thumbs');
    

    thumbs.addEventListener('click', function(event) {
      let target = event.target;
      const largeImg = document.getElementById('largeImg');
      console.log(target.tagName)

      if( !target.closest('a') && !thumbs.contains(target)){
        console.log('clause in if')
        return;
      }
      console.log('it works I think')
      event.preventDefault();

      // take href
      const imgSrc = target.tagName === 'A'? target.href : target.closest('a').href;
      console.log(imgSrc);
      largeImg.src = imgSrc;

    });
    
    /*
      <p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large image"></p>

  <ul id="thumbs">
    <!-- the browser shows a small built-in tooltip on hover with the text from "title" attribute -->
    <li>
      <a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg"></a>
    </li>
  </ul>
      
      
    */
