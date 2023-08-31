import React from "react";
import { Route,Routes,useRoutes } from "react-router-dom";
import Sidbar from "./Component/Sidbar";
import Header from "./Component/Header/Header";
import routes from "./routes";
import './App.css'

export default function App() {
  const router=useRoutes(routes)
  return (
    <>
      <Sidbar />
      <div className="main">
        <Header/>
        {router}
        
      </div>
    </>
  );
}
