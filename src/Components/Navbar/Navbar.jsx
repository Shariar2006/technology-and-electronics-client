import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

    

    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch((error) => {
                console.log(error)
            })
    }

    const navlink = <div className="lg:flex text-xl font-bold">
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-blue-500 underline rounded-lg px-1 py-2 " : "mx-2"}
        >Home</NavLink></li>
        <li><NavLink to={'/addProduct'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-blue-500 underline rounded-lg px-1 py-2 " : "mx-2"}
        >Add Product</NavLink></li>
        <li><NavLink to={'/myCard'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-blue-500 underline rounded-lg px-1 py-2 " : "mx-2"}
        >My Card</NavLink></li>

        <li><NavLink to={'/register'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-blue-500 underline rounded-lg px-1 py-2 " : "mx-2"}
        >Register</NavLink></li>
    </div>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="bg-gray-300 menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52 font5">
                            {navlink}
                        </ul>
                    </div>
                    <div className="flex items-center text-xl font-bold">
                        <img className="hidden lg:block" src="https://i.ibb.co/5YFTJBz/1.png" alt="" />
                        <p> Tech <span className="text-blue-500">and</span> Elec</p>
                        
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl w-[400px] menu-horizontal mr-2 font5">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex items-center gap-2">
                            <p className="text-xs lg:text-xl  font-bold">{user.displayName}</p>
                            <img className="rounded-full w-10" src={user.photoURL} alt="" />
                            <a onClick={handleLogout} href="" className="cursor-pointer text-xs lg:text-xl">Log Out</a>
                        </div> :
                            <ul>
                                <li className="text-xl font-bold"><NavLink to={'/login'}
                                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-blue-500 underline rounded-lg px-1 py-2 " : "mx-2"}
                                >Login</NavLink></li>
                            </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;