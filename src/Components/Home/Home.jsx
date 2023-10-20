import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Home = () => {
    const brandsCards = useLoaderData()
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://infowebtechzone.com/wp-content/uploads/2019/07/Gadgets.jpeg)', backgroundSize: 'cover', }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-2 text-4xl lg:text-6xl font-bold">Welcome <br /> to <br /> Tech <span className="text-blue-500">and</span> Elec</h1>
                        
                        {/* <p className="btn text-lg border-none text-white font-semibold bg-blue-600  rounded-lg  ">Get Start</p> */}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mt-6">
            {
                brandsCards?.map(brandCards=><BrandCard key={brandCards.brand} brandCards={brandCards}></BrandCard>)
            }
            </div>
            
        </div>
    );
};

export default Home;