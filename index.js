const React = {
  createElement (el, props = {}, content) {
    let tags = document.createElement(el)
    let keys = Object.keys(props)
    if (props) {
      keys.forEach(key => {
        if (key === "style") {
          Object.assign(tags.style, props.style)
        } else {
          tags[key] = props[key]
        }
    })}
    if (Array.isArray(content)) {
      content.forEach ((element) => {
        if (typeof element === 'string') {
          element = document.createTextNode(element)
        }
        tags.appendChild(element)
      })
    } else if (typeof content === 'string') {
      tags.appendChild(document.createTextNode(content))
    }
    
    return tags
  },  
  render(application, root) {
    root.appendChild(application)
  }
}
 const app = 
  React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ]);


React.render(
  app,
  document.getElementById('root'),
);