import React from 'react';
import Sidebar from "../components/sideBar/index";
import Maindiv from '../components/maindiv/main';
import './style.css';

function index(props) {
  return (
    <div className='container'>
     <Sidebar state = {props.state} /> 
     <Maindiv />
    </div>
  )
}

export default index;

