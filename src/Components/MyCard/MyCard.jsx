import { useLoaderData } from "react-router-dom";
import MyAddedCard from "./MyAddedCard";

const MyCard = () => {

    const myCard = useLoaderData()
    

    console.log(myCard)
        
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
            {
                myCard?.map(brandData=><MyAddedCard key={brandData._id} brandCard={brandData}></MyAddedCard>)
            }
        </div>
    );
};

export default MyCard;