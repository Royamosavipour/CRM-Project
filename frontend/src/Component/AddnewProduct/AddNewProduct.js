import React, { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { MdInventory2 } from "react-icons/md";
import { BiSolidColor } from "react-icons/bi";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { MdOutlineAddBusiness } from "react-icons/md";

import "./AddNewProduct.css";

export default function AddNewProduct({ getAllProducts }) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterEnventory, setEnterEnventory] = useState("");
  const [enterAddresPic, setEnterAddresPic] = useState("");
  const [enterCount, setEnterCount] = useState("");
  const [enterPopularity, setEnterPopularity] = useState("");
  const [enterolor, setEnterolor] = useState("");
  const enterNewProduct = {
    title: enterTitle,
    price: enterPrice,
    count: enterEnventory,
    img: enterAddresPic,
    popularity: enterCount,
    sale: enterCount,
    colors: enterolor,
  };

  const addNewProduct = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enterNewProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        getAllProducts();
        emptyEnteNewProduct();
      });
  };

  const emptyEnteNewProduct = () => {
    setEnterTitle("");
    setEnterPrice("");
    setEnterEnventory("");
    setEnterAddresPic("");
    setEnterCount("");
    setEnterPopularity("");
    setEnterolor("");
  };

  return (
    <div className="main-product">
      <h1 className="product-title">Add New Product</h1>

      <form action="#" className="add-products-form">
        <div className="add-product-form-wrapper">
          <div className="add-product-form-group">
            <BsFillBagFill />
            <input
              type="text"
              placeholder="Enter Product Name"
              className="add-product-name"
              value={enterTitle}
              onChange={(event) => setEnterTitle(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <MdDriveFileRenameOutline />
            <input
              type="text"
              placeholder="Enter Product Price"
              className="add-product-name"
              value={enterPrice}
              onChange={(event) => setEnterPrice(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <MdInventory2 />
            <input
              type="text"
              placeholder="product inventory"
              className="add-product-name"
              value={enterEnventory}
              onChange={(event) => setEnterEnventory(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <AiFillPicture />
            <input
              type="text"
              placeholder="photo address"
              className="add-product-name"
              value={enterAddresPic}
              onChange={(event) => setEnterAddresPic(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <MdOutlineAddBusiness />
            <input
              type="text"
              placeholder="Product popularity"
              className="add-product-name"
              value={enterPopularity}
              onChange={(event) => setEnterPopularity(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <FaSortAmountUpAlt />
            <input
              type="text"
              placeholder="The amount of product sales"
              className="add-product-name"
              value={enterCount}
              onChange={(event) => setEnterCount(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <BiSolidColor />
            <input
              type="text"
              placeholder="Number of product colors"
              className="add-product-name"
              value={enterolor}
              onChange={(event) => setEnterolor(event.target.value)}
            />
          </div>
        </div>
        <button className=" shadow-sm btn-with" onClick={addNewProduct}>
          Submit Product
        </button>
      </form>
    </div>
  );
}
