import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const SingleBrandsCards = () => {

    const [brandCard, setBrandCard] = useState()
    const {_id} = useParams()
    const singleCard = useLoaderData()



console.log(brandCard)
    useEffect(()=>{
        const findCard= singleCard?.find(singleCard=> singleCard._id ==_id)
        setBrandCard(findCard)
    },[_id, singleCard])

    const {  name, brand, type, photo, price, rating, description } = brandCard || {}

    const addToCard = () => {
        fetch('https://technology-and-electronics-server-jet.vercel.app/myCard', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, brand, type, photo, price, rating, description})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                swal("Good job!", "You product added successfully!", "success");
                
            }
        })
    }

      


    return (
        <div>
            <div className=" my-4">
            <div className="card w-3/4 mx-auto  bg-base-100 shadow-xl">
                <figure><img className="w-full h-[30vh] md:h-[60vh] lg:h-screen" src={brandCard?.photo} alt={brandCard?.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl lg:text-3xl font-bold font">{brandCard?.type}</h2>
                    <h4 className="text-base md:text-lg lg:text-xl font-semibold ">{brandCard?.name}</h4>
                     <p className="lg:text-lg text-gray-600 font5">{brandCard?.description}</p>
                   <div className="grid grid-cols-1 md:grid-cols-3 ">
                   <h4 className="text-base md:text-lg lg:text-xl font-semibold ">Brand: {brandCard?.brand}</h4>
                    <h4 className="text-base md:text-lg lg:text-xl font-semibold ">Price: {brandCard?.price}</h4>
                    <h4 className="text-base md:text-lg lg:text-xl font-semibold flex items-center"><FcRating></FcRating>{brandCard?.rating}</h4>
                   
                   </div>
                    <div className="card-actions">
                        <button onClick={addToCard} className="btn bg-blue-500 text-white hover:bg-blue-700 w-full font4">Add to My Card</button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default SingleBrandsCards;