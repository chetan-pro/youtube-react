import React, { useState } from "react";
import "./App.css";
import Container from "./containers/index";
import Navbar from "./components/navBar/index";

function App() {
  const [state, setState] = useState(false);

  const navbtn = () => {
    if(state){
      setState(false);
    }else{
      setState(true)
    }
  };
  return (
    <div className="App">
      <Navbar navbtn={navbtn} />
      <Container state={state} />
    </div>
  );
}

export default App;
