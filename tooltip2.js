
    const house = document.getElementById('house');
    house.addEventListener('mouseover', function(event){
      let target = event.target;
      let tooltipData = target.dataset.tooltip;
      let coords = target.getBoundingClientRect();

      let roofClosest = target.closest('#roof');
      
      if (!tooltipData) return;

      showTooltip(tooltipData, coords);

    });

    house.addEventListener('mouseout', function(event) {

      let relatedTarget = event.relatedTarget;
      

      if(event.target.closest('#house') && tooltipNull(event.relatedTarget) === tooltipNull(event.target)) return;
      
      clear();

      function tooltipNull(target){
        let clos = target.closest('[data-tooltip]');
        return clos ? clos.dataset.tooltip : false;
      }

    })

      function clear(){
        let tooltips = document.body.querySelectorAll('.tooltip');
      for ( let tooltip of tooltips ) {
        tooltip.remove();
      }
      }


    function showTooltip(data, coords) {
      clear();
      let tooltip = document.createElement('div');
      
      tooltip.innerHTML = data;
      tooltip.className = 'tooltip';
      document.body.append(tooltip);
     

      let top = coords.top - tooltip.offsetHeight - 5;
      console.log(`
      BEFORE IF
      here is tooltipTop:  ${top}
      here is coords.top: ${coords.top}
      here is tooltipHeight: ${tooltip.offsetHeight}
      `);
      if (top < 0) {
        top = coords.bottom + 5;
      }
      console.log(`
      AFTER IF
      here is tooltipTop:  ${top}
      here is coords.top: ${coords.top}
      here is tooltipHeight: ${tooltip.offsetHeight}
      `);
      
      
      
      let left = coords.left + (coords.width / 2) - tooltip.offsetWidth / 2;

      if (left < 0) {
        left = coords.left;
      }
   

      tooltip.style.top = top + 'px';
      console.log(`at the end tooltip`)
      tooltip.style.left = left + 'px';

    }
    
 

/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    body {
      height: 2000px;
      /* the tooltip should work after page scroll too */
    }

    .tooltip {
      position: fixed;
      z-index: 100;

      padding: 10px 20px;

      border: 1px solid #b3c9ce;
      border-radius: 4px;
      text-align: center;
      font: italic 14px/1.3 sans-serif;
      color: #333;
      background: #fff;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
    }

    #house {
      margin-top: 50px;
      width: 400px;
      border: 1px solid brown;
    }

    #roof {
      width: 0;
      height: 0;
      border-left: 200px solid transparent;
      border-right: 200px solid transparent;
      border-bottom: 20px solid brown;
      margin-top: -20px;
    }

    p {
      text-align: justify;
      margin: 10px 3px;
    }
  </style>
</head>

<body>


  <div data-tooltip="Here is the house interior" id="house">
    <div data-tooltip="Here is the roof" id="roof"></div>

    <p>Once upon a time there was a mother pig who had three little pigs.</p>

    <p>The three little pigs grew so big that their mother said to them, "You are too big to live here any longer. You must go and build houses for yourselves. But take care that the wolf does not catch you."

    <p>The three little pigs set off. "We will take care that the wolf does not catch us," they said.</p>

    <p>Soon they met a man. <a href="https://en.wikipedia.org/wiki/The_Three_Little_Pigs" data-tooltip="Read on…">Hover over me</a></p>

  </div>

  <script>  
  
   </script>
</body>
</html>
*/



















