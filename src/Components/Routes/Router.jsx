import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddProduct from "../AddProduct/AddProduct";
import MyCard from "../MyCard/MyCard";
import Product from "../Product/Product";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('BrandCard.json')
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/addProduct",
            element: <AddProduct></AddProduct>
        },
        {
            path: "/myCard",
            element: <MyCard></MyCard>
        },
        {
            path: "/products/:brand",
            element: <Product></Product>
        },
        
      ]
    },
  ]);

export default Router;