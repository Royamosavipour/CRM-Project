import Products from "./Component/Products/Products";
import Comments from "./Component/Comments/Comments";
import Users from "./Component/Users/Users";
import Orders from "./Component/Orders/Orders";
import Offs from "./Component/Offs/Offs";

const routes = [
  { path: "/comments", element: <Comments /> },
  { path: "/products", element: <Products /> },
  { path: "orders", element: <Orders /> },
  { path: "offs", element: <Offs /> },
  { path: "users", element: <Users /> },
];


export default routes;
