import React from "react";
import "./style.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function index(props) {
  return (
    <div className={`sidebar ${props.state?"side-trigger":" "}`}>
      <ul id="sidebar-content">
        <li className="active trigger">
          <HomeIcon />
          <span>Home</span>
        </li>
        <li className="trigger">
        <WhatshotIcon />
          <span>Trending</span>
        </li>
        <li className="trigger">
          <SubscriptionsIcon />
          <span>Subscriptions</span>
        </li>
        <hr />
        <li className="trigger">
          <VideoLibraryIcon />
          <span>Library</span>
        </li>
        <li>
          <HistoryIcon />
          <span>History</span>
        </li>
        <li>
          <OndemandVideoIcon />
          <span>More video</span>
        </li>
        <li>
          <WatchLaterIcon />
          <span>Watch Later</span>
        </li>
        <li>
          <ThumbUpAltIcon />
          <span>Like video</span>
        </li>
        <li>
          <ArrowDropDownIcon />
          <span>show more</span>
        </li>
        <hr />
      </ul>      
      <div className="sub-footer">
        <span>About</span>
        <span>Copyright</span>
        <span>Contact Us</span>
        <span>Creators</span>
        <span>Advertise</span>
        <span>Developers</span>
      </div>
      <div className="footer">&copy; 2020 Google LLC</div>
    </div>
  );
}

export default index;
