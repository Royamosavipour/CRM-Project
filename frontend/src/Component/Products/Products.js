import React, { useEffect,useState } from "react";

import AddNewProduct from "../AddnewProduct/AddNewProduct";
import ProductTable from "../ProductTable/ProductTable";

export default function Products() {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => {
        setAllProduct(products);
        console.log(products.img);
      });
  };

  return (
    <>
      <AddNewProduct  getAllProducts={getAllProducts}  />
      <ProductTable getAllProducts={getAllProducts} allProduct={allProduct}  />
    </>
  );
}
