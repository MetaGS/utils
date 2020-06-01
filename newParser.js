
const data = {
    text: "Here is some text with it holds",
    childrens: [
      {
        start: 0,
        end: 5,
        tag: 'text',
        text: 'Here ',

      },
      {
        start: 5,
        end: 28,
        tag: 'b',
        text: 'is some text with it ho',
        childrens: []
      },
      {
        start: 28,
        end: 31,
        tag: 'text',
        text: 'lds',
        
      }
    ]

}

window.onload = (event) => {
  const editor = document.getElementById('editor'),
        bt = document.getElementById('bt'),
        shower = document.getElementById('editorShower'),
        bt1 = document.getElementById('bt1');

  bt.onclick = (event) => {
    debugger
    let parsedNodes = parseData(data);
    shower.append(parsedNodes);
  }

  bt1.onclick = (event) => {
    const data = parseHTML(shower);
    alert(JSON.stringify(data));
  }

}

function parseData(data) {
  let frag = document.createDocumentFragment();
  let {text} = data;
  for (let i = 0, len = data.childrens.length; i < len; i++){
    let {start,end, tag, childrens, text} = data.childrens[i];
    let wrappedText = checkTag(tag, text);
    frag.append(wrappedText);
  }
  return frag;
}

function checkTag(tag, text) {
  switch(tag, text) {
    case 'text':
      return text;
    default: 
      let wrappedText = document.createElement(tag);
      wrappedText.append(text);
      return wrappedText;
  }
}


function parseHTML(editorNode) {
  let data = {childrens: []};
  let length = 0;
  data.text = editorNode.textContent;
  for(let i = 0, len = editorNode.childNodes.length; i < len; i++) {
    let childNode = editorNode.childNodes[i];
    let childData = {};
    childData.start = length;
    childData.end = length = childNode.textContent.length+length;
    childData.text = childNode.textContent;
    if(childNode.nodeType === Node.TEXT_NODE) {
      childData.tag = 'text'
    } else if(childNode.nodeType === Node.ELEMENT_NODE) {
      childData.tag = childData.nodeName;
    }
    
    data.childrens.push(childData)
  }
  return data;
}

// Need recursion for childrens. Algo to get positions from selection
// seperation of concers and similarity between parents and childrens, a low number of functions, clear idea, recursionit











