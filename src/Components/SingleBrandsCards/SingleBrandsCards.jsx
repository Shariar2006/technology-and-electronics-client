import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const SingleBrandsCards = () => {
    const [brandCard, setBrandCard] = useState()
    const {_id} = useParams()
    const singleCard = useLoaderData()

    useEffect(()=>{
        const findCard= singleCard?.find(singleCard=> singleCard._id ==_id)
        setBrandCard(findCard)
    },[_id, singleCard])


    const addToCard = () => {

        const addCard = []

        const cardItem = JSON.parse(localStorage.getItem('addCard'))


        if (!cardItem) {
            addCard.push(brandCard)
            localStorage.setItem('addCard', JSON.stringify(addCard))
            swal("Good job!", "You have successfully added card!", "success")
            
        }
        else {

            const isExist = cardItem?.find(singleCard => singleCard._id === brandCard._id)


            if (isExist) {
                swal("Sorry!", "You have already added card!", "error")
            }
            else {
                addCard.push(...cardItem, brandCard)
                localStorage.setItem('addCard', JSON.stringify(addCard))
                swal("Good job!", "You have successfully added card!", "success")
                
            }


        }

    }


    return (
        <div>
            <div className=" my-4">
            <div className="card w-3/4 mx-auto  bg-base-100 shadow-xl">
                <figure><img className="w-full h-[30vh] md:h-[60vh] lg:h-screen" src={brandCard?.photo} alt={brandCard?.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl lg:text-3xl font-bold font">{brandCard?.EventType}</h2>
                    <h4 className="text-lg lg:text-xl font-semibold font4">{brandCard?.name}</h4>
                    <p className="lg:text-lg text-gray-600 font5">{brandCard?.description}</p>
                   
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