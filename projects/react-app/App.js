import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {    

    return ([
        <h1>
          React App
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>,       
    ])
  }
}

class ReactHtmlElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('mft-wc-wrapper', ReactHtmlElement);