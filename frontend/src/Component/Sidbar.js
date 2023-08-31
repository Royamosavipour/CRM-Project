import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import "./SidbarStyle.css";

export default function Sidbar() {
  return (
    <div className="sidBar">
      <h1 className="sidBar-Title">Welcom To Panel CRM</h1>

      <ul className="sidBar-link">
        <NavLink to="/">
          <AiOutlineHome className="icon-sidBar" />
          Home
        </NavLink>
        <NavLink clas to="/products" sName="active">
          <MdProductionQuantityLimits className="icon-sidBar" /> Product
        </NavLink>
        <NavLink to="/comments">
          <BiCommentAdd className="icon-sidBar" /> Comments
        </NavLink>
        <NavLink to="/users">
          <AiOutlineUser className="icon-sidBar" /> Users
        </NavLink>
        <NavLink to="/orders">
          <BsFillBagFill className="icon-sidBar" />
          Order
        </NavLink>
        <NavLink to="/offs">
          <FaDollarSign className="icon-sidBar" />
          Sales
        </NavLink>
      </ul>
    </div>
  );
}
