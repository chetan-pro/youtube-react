import React, { useState } from "react";
import "./App.css";
import Container from "./containers/index";
import Navbar from "./components/navBar/index";
import data from './components/maindiv/data';

function App() {
  const [state, setState] = useState(false);
  const [value, setValue] = useState('');
  const handle =(e)=> {
    setValue(e.target.value);
  }
  let fil;
  const setter = () => {
    fil =  data.filter((el)=>{
      return el.category === value;
    })
    console.log(fil);
    setValue('');
  }
  const navbtn = () => {
    if(state){
      setState(false);
    }else{
      setState(true)
    }
  };
  return (
    <div className="App">
      <Navbar navbtn={navbtn} handle={handle} value={value} search={setter}/>
      <Container state={state} value={fil}/>
    </div>
  );
}

export default App;
