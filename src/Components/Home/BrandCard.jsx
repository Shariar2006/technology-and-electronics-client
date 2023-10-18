import { Link } from "react-router-dom";


const BrandCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mt-6">

            <Link to='/apple'>
                <div className="card h-[320px] w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/2NvrZJ6/16.png" alt="Apple" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Apple </h2>
                        
                    </div>
                </div>
            </Link>
            <Link to='/Samsung'>
                <div className="card h-[320px] w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$" alt="Samsung" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Samsung </h2>
                       
                    </div>
                </div>
            </Link>
            <Link to='/sony'>
                <div className="card h-[320px] w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.freebiesupply.com/logos/thumbs/2x/sony-logo.png" alt="Sony" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Sony </h2>
                        
                    </div>
                </div>
            </Link>
            <Link to='/intel'>
                <div className="card h-[320px] w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/GJpD9Z3/58568d224f6ae202fedf2720-3.png" alt="intel" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Intel </h2>
                        
                    </div>
                </div>
            </Link>
            <Link to='/google'>
                <div className="card h-[320px] w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="google" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Google </h2>
                        
                    </div>
                </div>
            </Link>
            <Link to='/vivo'>
                <div className="card h-[320px] w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo.jpg" alt="vivo" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Vivo </h2>
                        
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;