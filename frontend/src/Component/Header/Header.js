import React from "react";
import "./Header.css";
import { BsFillBellFill } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <div className=" profil-box">
        <img
          src="/images/item-9.jpeg"
          alt="Profile pic"
          className="img-profile"
        />
        <div className="info-profile">
          <h1 className="profile-Titel">Roya Mousavipour</h1>
          <h3>Front-End Developer</h3>
        </div>
      </div>

      <div className="left-side">
        <div className="search-box">
          <input type="text" placeholder="Search ....   " />
          <button>Search</button>
        </div>

        <button className="icon-header">
          <BsFillBellFill />
        </button>

        <button className="icon-header">
          <BsBrightnessHigh />
        </button>
      </div>
    </div>
  );
}
