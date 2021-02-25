import React, { useState } from "react";
import "./style.css";
import data from '../maindiv/data'
import PrflImg from "../../assests/photo.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Index(props) {
  const [show, setShow] = useState(true);
  const [note, setNote] = useState(true);
  const [search, setSearch] = useState("");
   
  const searchbtn = ()=>{
    if(search){
      window.open("https://www.youtube.com/results?search_query="+search);
      setSearch('');
    }
  }

  const shower = () => {
    if (show && note) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const notify = () => {
    if (note && show) {
      setNote(false);
    } else {
      setNote(true);
    }
  };
  return (
    <header>
      <nav className="navbar">
        <ul className="left-icons">
          <li id="navbtn" onClick={props.navbtn}>
            <MenuIcon />
          </li>

          <li id="logo">
            <i className="fab fa-youtube"></i>
            <span>Youtube</span>
          </li>
        </ul>

        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
          />
          <span className="searchbtn" onClick={searchbtn}>
            <SearchIcon />
          </span>
        </div>

        <ul className="right-icons">
          <li className="search-icon">
            <SearchIcon />
          </li>

          <li className="create">
            <VideoCallIcon />
            <span>Create</span>
          </li>

          <li className="apps">
            <AppsIcon />
            <span>Apps</span>
          </li>

          <li onClick={() => notify()} className="bell">
            <NotificationsIcon />
            <span>Notifications</span>
          </li>
          <div
            className={`notifications-dets ${
              note ? "notifications-dets-display" : ""
            }`}
          >
            <div className="notify-title">
              <h1>Notifications</h1>
              <SettingsIcon />
            </div>
            <ul>
              { data.map((item)=><li>
                <img className="profile" src={item.channel_icon} alt="" />
              <p className="notify-description">
                {item.title}
                <br />
                <h3>{item.time}</h3>
              </p>
              <img className="notify-thumb" src={item.thumbnail} />
              </li>)}
            </ul>
          </div>
          <li onClick={() => shower()} className="profile">
            <img src={PrflImg} alt="" />
          </li>
          <div className={`profile-dets ${show ? "profile-dets-display" : ""}`}>
            <div className="prfls">
              <li className="profile">
                <img src={PrflImg} alt="" />
              </li>
              <div>
                <h1>Chetan Sable</h1>
                <h3>SableChetan8789@gmail.com</h3>
                <a>Manage your Google Account</a>
              </div>
            </div>
            <ul>
              <li>
                <AccountBoxIcon />
                <h4>Your Channel</h4>
              </li>
              <li>
                <MonetizationOnIcon />
                <h4>Purchases and memberships</h4>
              </li>
              <li>
                <SettingsIcon />
                <h4>Youtube Studio</h4>
              </li>
              <li>
                <SwapHorizIcon />
                <h4>Switch account</h4>
              </li>
              <li>
                <ExitToAppIcon />
                <h4>Sign out</h4>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Index;


