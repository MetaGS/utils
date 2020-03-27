function(id) {
  const mouse = document.getElementById(id);

  mouse.onclick = function(event) {
    console.log('started');
    this.tabIndex = '0';
    this.focus();
    this.style.position = 'fixed';
    window.addEventListener('keydown', moveMouse)
    this.onblur = function(){
      window.removeEventListener('keydown', moveMouse);
    }
  }

  function moveMouse(event) {
    event.preventDefault();
    let arrows = [['ArrowUp','-50'], ['ArrowDown','50'], ['ArrowLeft','-50'], ['ArrowRight','+50']];
    let moves = new Map(arrows);
    const keyCode = event.code;

    console.log(-+50)
    if( moves.has(event.code)){
      const coords = mouse.getBoundingClientRect();
      const move = moves.get(event.code);

      if((keyCode.includes('Up') || keyCode.includes('Down'))) {
      const afterMove = coords.top + pageYOffset + +move;
        console.log(`
          code:                 ${keyCode}
          move:                 ${move}
          coords[top]:      ${coords.top}
          mouse.style.top: ${mouse.style.top}
          afterMove :           ${afterMove}
        `)

        mouse.style.top = Math.round(afterMove) + 'px';

      } else if (keyCode.includes('Right') || keyCode.includes('Left')){
        const afterMove = coords.left + pageXOffset + +move;
        mouse.style.left = Math.round(afterMove) + 'px';
      }

    }
  }
 }
