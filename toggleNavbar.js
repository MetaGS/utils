// code which wrote in plnkr

<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>

  <ul class="tree" id="tree">
    <li><span>Animals</span>
      <ul>
        <li>Mammals
          <ul>
            <li>Cows</li>
            <li>Donkeys</li>
            <li>Dogs</li>
            <li>Tigers</li>
          </ul>
        </li>
        <li>Other
          <ul>
            <li>Snakes</li>
            <li>Birds</li>
            <li>Lizards</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><span>Fishes</span>
      <ul>
        <li>Aquarium
          <ul>
            <li>Guppy</li>
            <li>Angelfish</li>
          </ul>
        </li>
        <li>Sea
          <ul>
            <li>Sea trout</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <script>
    const mainTree = document.getElementById('tree');
    mainTree.addEventListener('click', function(event){
      let target = event.target;
      let tagName = target.tagName;
      if(tagName !== 'SPAN') return;

      const children = target.closest('li').querySelector('ul');
      children.hidden = !children.hidden;
      
    })

  </script>

</body>
</html>
