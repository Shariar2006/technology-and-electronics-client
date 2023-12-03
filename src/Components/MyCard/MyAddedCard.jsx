/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FcRating } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import swal from "sweetalert";
import { AuthContext } from "../Context/AuthProvider";
import { useState } from "react";


const MyAddedCard = ({ brandCard, cardDelete, setCardDelete }) => {
    const { loading } = useContext(AuthContext)
    const [loader, setLoader] = useState(loading)
    const { _id, name, brand, type, photo, price, rating, description } = brandCard || {}

    const handleDelete = _id => {

        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {
                    console.log('delete')

                    fetch(`https://technology-and-electronics-server-jet.vercel.app/myCard/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                swal("Poof! Your imaginary card has been deleted!", {
                                    icon: "success",
                                })
                                setLoader(loader)
                                const remaining = cardDelete?.filter(cardDelete => cardDelete._id == _id)
                                setCardDelete(remaining)
                            }
                        })
                } else {

                    swal("Your imaginary file is safe!");
                }
            });
        console.log(_id)
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <div className="text-base font-semibold">
                        <h3>Brand: {brand}</h3>
                        <h3>Product Type: {type}</h3>
                    </div>
                    {
                        description.length > 100 ? <p className="text-gray-500">
                            {description.slice(0, 100)}

                        </p> :
                            ''
                    }



                    <div className="flex justify-between text-base font-semibold">
                        <p>Price: {price}</p>

                        <p className="flex items-center"><FcRating></FcRating>{rating}</p>
                    </div>

                    <h1 onClick={() => handleDelete(_id)} className="btn hover:text-blue-500 flex items-center text-white text-center rounded-md bg-blue-500 p-2">Delete Card <MdDeleteForever className="text-2xl"></MdDeleteForever></h1>

                </div>
            </div>
        </div>
    );
};

export default MyAddedCard;