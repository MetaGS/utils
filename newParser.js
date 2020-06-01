

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
        childrens: [{
          start: 0,
          end: 3,
          text: 'is ',
          tag: 'text',
          childrens: []
        },{
          start: 3,
          end: 12,
          text: 'some text',
          tag: 'em',
          childrens: []
        },
        {
          start: 12,
          end: 23,
          text: ' with it ho',
          tag: 'text',
          childrens: []
        }]
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
    debugger
    const data = parseHTML(shower);
    // alert(JSON.stringify(data));
    console.log(data);
    let div = document.createElement('div');
    let parseAgain = parseData(data);
    div.append(parseAgain);
    document.body.append(div);
    let sel = window.getSelection();
    console.log(sel)
  }

}

function parseData(data) {
  let frag = document.createDocumentFragment();
  let {text} = data;

  for (let i = 0, len = data.childrens.length; i < len; i++){
    let {start,end, tag, childrens, text} = data.childrens[i];
    let node;
    if(childrens && childrens.length>0) {
      node = parseData(data.childrens[i]);
    } else {
      node = text;
    }

    let wrappedText = checkTag(tag, node);

    frag.append(wrappedText);
  }

  return frag;
}

function checkTag(tag, text) {
  switch(tag) {
    case 'text':
      return text;
      break;
    default: 
      let wrappedText = document.createElement(tag);
      wrappedText.append(text);
      return wrappedText;
  }
}


function parseHTML(editorNode, data = {}) {
  
  data.childrens || (data.childrens = []);
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
      childData.tag = childNode.nodeName.toLowerCase();
      childData = parseHTML(childNode, childData)
    }
    
    data.childrens.push(childData)
  }

  return data;
}

// Not Bad! Not Bad!
// seperation of concers and similarity between parents and childrens, a low number of functions, clear idea, recursionit












