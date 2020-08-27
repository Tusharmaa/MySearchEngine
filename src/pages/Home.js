import React from "react";
import "./Home.css";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-headerLeft">
          {/* I am using Link tag instead of a tag because a tag goes to the resp. page and refreshes everything whereas Link tag doesnt refreshes.  */}
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />

          {/* Avatar */}
        </div>
      </div>
      <div className="home-body">
        <img
          className="home-bodyLogo"
          src="https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt="Google Logo"
        />
        <Search />
        {/* hideButtons */}
      </div>
    </div>
  );
}

export default Home;
