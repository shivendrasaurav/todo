import React, { Component } from 'react';
import "fdweb/normalize.css";
import "fdweb/fluent.css";
import "fdweb/fluent.js";

import Input from "./components/InputComp";
import List from "./components/ListComp";

class App extends Component{
  render(){
    return(
      <div className="page_container">
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
