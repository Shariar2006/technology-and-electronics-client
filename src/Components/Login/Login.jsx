/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {

    const { userLogin, user } = useContext(AuthContext)
    console.log(user)

    const handleLogin = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)
        userLogin(email, password)
        .then((result) => {
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-[80vh] bg-base-200">
                <div className="">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-3">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't have an account? <Link to='/register' className="text-blue-600 font-bold underline">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;