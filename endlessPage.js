  let stopRecursion = false;

  function fill(){
    
    const date = new Date();
    const docEl = document.documentElement;
    let div = document.createElement('div');
    div.innerHTML = `Date: ${date}`;
    document.body.append(div);

    const windowHeight = docEl.clientHeight;
    
    const documentHeight = docEl.scrollHeight;
    
    const scrollTop = docEl.scrollTop;

    let whereIAm = documentHeight - windowHeight - scrollTop;
    
    if (whereIAm < 10) {
     return fill();
    }
    return false;

  }
  fill();

  window.addEventListener('scroll', function(event){
    if(!stopRecursion) {
      stopRecursion = true;
      stopRecursion = fill();
    }
    
  })
