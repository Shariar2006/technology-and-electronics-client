/* eslint-disable react/prop-types */
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";



const SingleBrand = ({ brandData }) => {
    const { _id, name, brand, type, photo, price, rating, description } = brandData || {}
    return (
        <div>

            {
                brandData ? <div>
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
                                    <br />
                                    <button
                                        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        <Link to={`/singleBrandsCards/${_id}`} className='font5'>Details</Link>
                                    </button>
                                </p> :
                                    <p className="text-gray-500">{description}</p>
                            }



                            <div className="flex justify-between text-base font-semibold">
                                <p>Price: {price}</p>

                                <p className="flex items-center"><FcRating></FcRating>{rating}</p>
                            </div>
                            <div className="">
                                <button
                                    className="w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <Link to={`/updateCard/${_id}`} className='font5'>Update</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    : <>
                        <h1>no data found</h1>

                    </>
            }
        </div>
    );
};

export default SingleBrand;