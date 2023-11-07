const h = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = h2.nextElementSibling

setTimeout(() => {
  addStylesTo(h, 'Hello from JavaScript')
}, 1500)

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = '#000'
  node.style.padding = '2rem'
  node.style.display = 'block'
  node.style.width = '100%'

  // falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

h.onclick = () => {
 if (h.style.backgroundColor === 'black') {
  h.style. backgroundColor = '#fff'
} else {
  h.style.backgroundColor = 'black'
}
}

// а через секунду вернём как было
// setTimeout(() => document.body.style.background = "", 1000);