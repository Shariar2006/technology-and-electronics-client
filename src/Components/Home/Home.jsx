import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import Marquee from "react-fast-marquee";
import TimeLine from "./TimeLine";


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
                    brandsCards?.map(brandCards => <BrandCard key={brandCards.brand} brandCards={brandCards}></BrandCard>)
                }
            </div>

            <div>
                <h1 className="text-3xl text-center font-bold my-10">Our <span className="text-blue-500">Team</span> Member</h1>
                <Marquee>
                    
                        <div className="card card-compact w-80 bg-base-100 shadow-xl ml-10">
                            <figure><img className="rounded-full" src="https://www.uttamphosphates.com/wp-content/uploads/2019/10/tm6.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Mike Tyson</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi ipsam nihil ex? Laborum mollitia error itaque quis est fugiat sapiente!</p>
                                
                            </div>
                        </div>
                        <div className="card card-compact w-80 bg-base-100 shadow-xl">
                            <figure><img className="rounded-full" src="https://www.dialtel.com/wp-content/uploads/2017/05/tm9.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Sophia Martinez</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi ipsam nihil ex? Laborum mollitia error itaque quis est fugiat sapiente!</p>
                                
                            </div>
                        </div>
                        <div className="card card-compact w-80 bg-base-100 shadow-xl">
                            <figure><img className="rounded-full" src="https://www.uttamphosphates.com/wp-content/uploads/2019/10/tm1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Ethan Wilson</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi ipsam nihil ex? Laborum mollitia error itaque quis est fugiat sapiente!</p>
                                
                            </div>
                        </div>
                        <div className="card card-compact w-80 bg-base-100 shadow-xl">
                            <figure><img className="rounded-full" src="https://farmerinsurance.com/wp-content/uploads/2021/07/tm7.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Emily Johnson</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi ipsam nihil ex? Laborum mollitia error itaque quis est fugiat sapiente!</p>
                                
                            </div>
                        </div>
                        <div className="card card-compact w-80 bg-base-100 shadow-xl">
                            <figure><img className="rounded-full" src="https://visitbig.co.uk/wp-content/uploads/2019/10/team1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">James Anderson</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi ipsam nihil ex? Laborum mollitia error itaque quis est fugiat sapiente!</p>
                                
                            </div>
                        </div>
                        
                    
                    
                </Marquee>
            </div>
                <TimeLine></TimeLine>
        </div>
    );
};

export default Home;