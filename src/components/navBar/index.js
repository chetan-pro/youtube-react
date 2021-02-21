import React from "react";
import "./style.css";
import PrflImg from "../../assests/photo.jpg";

function index(props) {


  return (
    <header>
      <nav className="navbar">
        <ul className="left-icons">
          <li id="navbtn" onClick={props.navbtn}>
            <i className="fas fa-bars"></i>
          </li>

          <li id="logo">
            <i className="fab fa-youtube"></i>
            <span>Youtube</span>
          </li>
        </ul>

        <div className="search">
          <input type="text" placeholder="Search by Category" onChange={props.handle} value={props.value}/>
          <span className="searchbtn" onClick={props.search}>
            <i className="fas fa-search"></i>
          </span>
        </div>

        <ul className="right-icons">
         <li className="search-icon">
            <i className="fas fa-search"></i>
          </li>

          <li className="create">
            <i className='fas fa-video'></i> 
          </li>

          <li className="apps">
            <i className="fas fa-th"></i>
          </li>

          <li className="bell">
            <i className="fas fa-bell"></i>
          </li>

          <li className="profile">
            <img src={PrflImg} alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default index;
