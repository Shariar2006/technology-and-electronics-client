/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const BrandCard = ({brandCards}) => {
    const {id, brand_name, brand_img} = brandCards
    return (
        <div>

            <Link to={`/products/${id}`}>
                <div className="card h-[320px] w-96 bg-base-100 shadow-xl">
                    <figure><img src={brand_img} alt="Apple" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">{brand_name} </h2>
                        
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;