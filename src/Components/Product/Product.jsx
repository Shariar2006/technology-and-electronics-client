import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Product = () => {
    const [card, setCard] = useState()

    const { brand } = useParams()
console.log(brand)
    const brandsData = useLoaderData()
    
    //  const filter = brandsData.filter(p=>p.brand.includes('Apple'))
    //  const filter2 = brandsData.filter(p=>p.brand.includes('Samsung'))

    useEffect(()=>{ 
       const findSingleBrand = brandsData?.filter(brandData => brandData.brand.toLowerCase() == brand.toLowerCase())
    setCard(findSingleBrand)}, [brand, brandsData])
    console.log(card, brandsData)

// console.log(filter, filter2)

    return (
        <div>
            {card?.length}
        </div>
    );
};

export default Product;