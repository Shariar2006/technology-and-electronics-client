import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "./SingleBrand";
import AdvertisementSlider from "../AdvertisementSlider/AdvertisementSlider";

const Product = () => {
    const [card, setCard] = useState()
    const [noFound, setNoFound] = useState(true)

    const { brand } = useParams()
    console.log(brand)
    const brandsData = useLoaderData()


    useEffect(() => {
        const findSingleBrand = brandsData?.filter(brandData => brandData.brand.toLowerCase() == brand.toLowerCase())
        if (findSingleBrand) {
            setCard(findSingleBrand)
        }
        else {
            setNoFound('No Data Found')
        }
    }, [brand, brandsData])
    console.log(card, brandsData)


    return (
        <div>




            {
                !noFound ? <p className='h-[80vh] flex justify-center items-center text-2xl font-bold'>{noFound}</p> :
                    <div>
                        

                        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold lg:font-bold text-center mt-5">Our <span className="text-blue-500">Product</span> </h1>

                        <div className="hidden md:block">
                            <AdvertisementSlider></AdvertisementSlider>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                            {
                                card?.map(brandData => <SingleBrand key={brandData.brand} brandData={brandData}></SingleBrand>)
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default Product;