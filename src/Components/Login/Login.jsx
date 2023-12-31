/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {

    const { userLogin, user, singWithGoogle } = useContext(AuthContext)
    console.log(user)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const displayName = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(displayName, email, password)
        // if(!user){
        //     swal("Sorry!", "Please do registration first!", "error");
        //     return;
        // }
        userLogin(email, password)
            .then((result) => {
                console.log(result.user)
                e.target.reset()
                swal("Good job!", "You are successfully logged in!", "success");
                navigate(location?.state ? location.state: '/')

            })
            .catch(error => {
                console.log(error)
            })
    }
    const googleLogin = () => {
        singWithGoogle()
            .then(() => { 

                swal("Good job!", "You are successfully logged in!", "success");
                navigate(location?.state ? location.state: '/')            })
            .catch(error => { console.log(error) })
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
                            <div className="text-center">
                                <p>or</p>
                                <button onClick={googleLogin} className="btn ">
                                    Continue with Google
                                 </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;