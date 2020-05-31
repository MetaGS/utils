
window.onload = function(e) {
  let editor = document.getElementById('editor');
  let bt = document.getElementById('bt');
  let show = document.getElementById('show');
  let show1 = document.getElementById('show1');
  let show2 = document.getElementById('show2');

  bt.addEventListener('click', function(e) {
    
    let sel = document.getSelection();
    let range = sel.getRangeAt(0);
    let childNodes = range.extractContents().childNodes;
    let length = childNodes.length;

    for(let i = 0; i < length; i++) {
      let node = childNodes[i];
      let parsedNode = parseNode(node);
      
      show.append(`${i}: ${ document.createTextNode( node.nodeName === '#text'? node.data : node.outerHTML).data}`);

      show.append(document.createElement('br'));

      range.insertNode(parsedNode);
      range.collapse(false);
      show2.append(parsedNode.cloneNode());
      show2.append(document.createElement('br'));

    }

    show1.append(editor.innerHTML);

  })


function parseNode(node) {
  if(node?.matches && node.matches('[data-bold]')){
    let childNode = node.childNodes;
    let span = document.createElement('span')
    span.append(...node.childNodes);
    
    return span;
  }
  return node?.cloneNode();
}

}
