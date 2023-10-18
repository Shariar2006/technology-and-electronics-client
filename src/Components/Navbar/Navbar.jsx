import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {

    const { user } = useContext(AuthContext)

    const navlink = <div className="lg:flex text-xl font-bold">
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-blue-500 underline rounded-lg px-3 py-2 " : "mx-2"}
        >Home</NavLink></li>
        <li><NavLink to={'/login'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-blue-500 underline rounded-lg px-3 py-2 " : "mx-2"}
        >Login</NavLink></li>
        <li><NavLink to={'/register'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-blue-500 underline rounded-lg px-3 py-2 " : "mx-2"}
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
                        user ? <>
                        <p>{user.displayName}</p>
                        </> : <p>N/A</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;