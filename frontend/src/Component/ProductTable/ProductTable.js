import React, { useEffect, useState } from "react";
import DeletModal from "./../DeletModul/DeletModal";
import InfoModal from "./../InfoMoudal/InfoModal";
import EditModal from "../EditModal/EditModal";
import { FiUser } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { BiSolidColor } from "react-icons/bi";
import { FaSupple } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./ProductTable.css";

export default function ProductTable({ allProduct, getAllProducts }) {
  const [isShowModul, setIsShowModul] = useState(false);
  const [isShoInfoMoudal, setIsShoInfoMoudal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [productID, setProductId] = useState(null);
  const [mainProductInfo, setMainProductInfo] = useState({});

  const [newproductTitle, setNewproductTitle] = useState("");
  const [newproductPrice, setNewproductPrice] = useState("");
  const [newproductCount, setNewproductCount] = useState("");
  const [newproductImg, setNewproductImg] = useState("");
  const [newproductPopularity, setNewproductPopularity] = useState("");
  const [newproductSale, setNewproductSale] = useState("");
  const [newproductColors, setNewproductColors] = useState("");

  const closeModal = () => {
    setIsShowModul(false);
  };
  const submitModal = () => {
    // console.log("delet");
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowModul(false);
        getAllProducts();
      });
  };

  const onHide = () => {
    setIsShoInfoMoudal(false);
    console.log("first");
  };

  const submitProduct = (event) => {
    event.preventDefault();
    const newProductInfo = {
      title: newproductTitle,
      price: newproductPrice,
      count: newproductCount,
      img: newproductImg,
      popularity: newproductPopularity,
      sale: newproductSale,
      colors: newproductColors,
    };

    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        getAllProducts();
        setIsShowEditModal(false);
      });

    console.log("first");
  };

  return (
    <>
      {allProduct.length ? (
        <table className="product-table">
          <thead>
            <tr className="product-table-heding">
              <th>Pictur</th>
              <th>Name</th>
              <th>Price</th>
              <th>Supply</th>
            </tr>
          </thead>
          <tbody>
            {allProduct.map((product) => (
              <tr key={product.id} className="product-table-tr">
                <td>
                  <img src={product.img} className="img-product-table" />
                </td>
                <td>{product.title} </td>
                <td>{product.price} $</td>
                <td>{product.count}</td>
                <td className="d-flex justify-content-between align-items-center styl-for-flex">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      setIsShoInfoMoudal(true);
                      setMainProductInfo(product);
                    }}
                  >
                    Info
                  </button>
                  <button
                    className="btn btn-primary mx-4"
                    onClick={() => {
                      setIsShowModul(true);
                      setProductId(product.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setProductId(product.id);
                      setNewproductTitle(product.title);
                      setNewproductPrice(product.price);
                      setNewproductCount(product.count);
                      setNewproductImg(product.img);
                      setNewproductPopularity(product.popularity);
                      setNewproductSale(product.sale);
                      setNewproductColors(product.colors);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="Is Not Product" />
      )}

      {/* ************************************************ show modal Delet */}
      {isShowModul && (
        <DeletModal submitModal={submitModal} closeModal={closeModal} title='Do you want delete Product ?' />
      )}
      {/* ****************************************************** show Modal Details */}
      {isShoInfoMoudal && (
        <InfoModal onHide={onHide}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>popularity</th>
                <th>sale</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProductInfo.popularity} %</td>
                <td>{mainProductInfo.sale.toLocaleString()}</td>
                <td>{mainProductInfo.colors}</td>
              </tr>
            </tbody>
          </table>
        </InfoModal>
      )}
      {/* ******************************************************show modalEdit */}
      {isShowEditModal && (
        <EditModal
          onClose={() => {
            setIsShowEditModal(false);
          }}
          onsubmit={submitProduct}
        >
          <div className="edit-product-form-group">
            <span>
              <FiUser />
            </span>
            <input
              type="text"
              placeholder="title"
              className="edit-prodact-input"
              value={newproductTitle}
              onChange={(event) => setNewproductTitle(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <FiDollarSign />
            </span>
            <input
              type="text"
              placeholder="Price"
              className="edit-prodact-input"
              value={newproductPrice}
              onChange={(event) => setNewproductPrice(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <BiSolidColor />
            </span>
            <input
              type="text"
              placeholder="count"
              className="edit-prodact-input"
              value={newproductCount}
              onChange={(event) => setNewproductCount(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <FaSupple />
            </span>
            <input
              type="text"
              placeholder="img"
              className="edit-prodact-input"
              value={newproductImg}
              onChange={(event) => setNewproductImg(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineEdit />
            </span>
            <input
              type="text"
              placeholder="popularity"
              className="edit-prodact-input"
              value={newproductPopularity}
              onChange={(event) => setNewproductPopularity(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineEdit />
            </span>
            <input
              type="text"
              placeholder="sale"
              className="edit-prodact-input"
              value={newproductSale}
              onChange={(event) => setNewproductSale(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineEdit />
            </span>
            <input
              type="text"
              placeholder="colors"
              className="edit-prodact-input"
              value={newproductColors}
              onChange={(event) => setNewproductColors(event.target.value)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
