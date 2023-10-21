import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddProduct from "../AddProduct/AddProduct";
import MyCard from "../MyCard/MyCard";
import Product from "../Product/Product";
import SingleBrandsCards from "../SingleBrandsCards/SingleBrandsCards";
import UpdateCard from "../Update/UpdateCard";
import PrivateRoute from "../Private/PrivateRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/BrandCard.json')
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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/myCard",
                element: <PrivateRoute><MyCard></MyCard></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/myCard')
            },
            {
                path: "/products/:brand",
                element: <Product></Product>,
                loader: () => fetch('http://localhost:5000/brand')
            },
            {
                path: "/singleBrandsCards/:_id",
                element: <PrivateRoute><SingleBrandsCards></SingleBrandsCards></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/brand')
            },
            {
                path: "/updateCard/:id",
                element: <PrivateRoute><UpdateCard></UpdateCard></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/updateCard/${params.id}`)
            },
            {
                path: '*',
                element: <div><img src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1701907200&v=beta&t=Lg5fpA1ixZPHlGbh8EATdeIQjh6CN25qdOyIpRvuRIU" alt="" /></div>
            }

        ]
    },
]);

export default Router;