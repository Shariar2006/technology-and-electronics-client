import { useEffect, useState } from "react";

const MyCard = () => {
    const [card, setcard] = useState([])

    const [noFound, setNoFound] = useState(false)

    useEffect(() => {
        const cardItem = JSON.parse(localStorage.getItem('addCard'))

        if (cardItem) {
            setcard(cardItem)
        }
        else {
            setNoFound("You did not card!")
        }})
    return (
        <div>
            {
                noFound ? <p className='h-[80vh] flex justify-center items-center text-2xl font-bold'>{noFound}</p>:
                <p>{card?.length}</p>

            }
        </div>
    );
};

export default MyCard;