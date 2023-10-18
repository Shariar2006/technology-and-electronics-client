import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Apple from "../BrandPage/Apple";
import Samsung from "../BrandPage/Samsung";
import Intel from "../BrandPage/Intel";
import Google from "../BrandPage/Google";
import Vivo from "../BrandPage/Vivo";
import Sony from "../BrandPage/Sony";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path: "/",
            element: <Home></Home>
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
            path: "/apple",
            element: <Apple></Apple>
        },
        {
            path: "/samsung",
            element: <Samsung></Samsung>
        },
        {
            path: "/intel",
            element: <Intel></Intel>
        },
        {
            path: "/google",
            element: <Google></Google>
        },
        {
            path: "/vivo",
            element: <Vivo></Vivo>
        },
        {
            path: "/sony",
            element: <Sony></Sony>
        }
      ]
    },
  ]);

export default Router;