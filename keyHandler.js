function runOnKeys(func, ...keys) {
  let setOfKeys = new Set();
  let setOf;
  document.addEventListener('keydown', function(event){
    console.log('started');
    const keyEnter = event.code;
    console.log(`keyEnter: ${keyEnter}`)
    console.log(setOfKeys)
    setOfKeys.add(keyEnter);
    if(keys.every(key => setOfKeys.has(key))) {
      func();
    }
  });

  document.addEventListener('keyup', function(event){
    setOfKeys.clear();
  });
}
runOnKeys(function(){alert('hi')}, 'KeyZ');
