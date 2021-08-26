import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return ( 
    <div>
      <h1>
      React App
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
      </h1>     
    </div>
  );
}

class ReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define('react-app', ReactElement);