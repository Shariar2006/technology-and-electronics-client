import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {

    const { createUser, handleUpdateProfile } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const displayName = form.get('name')
        const password = form.get('password')
        const photoURL = form.get('photo')
        console.log(email, displayName, password, photoURL)
        createUser(email, password)
            .then((result) => {
                console.log(result.user)
                handleUpdateProfile(displayName, photoURL)

            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            
            <div className="hero min-h-[80vh] bg-base-200">
                <div className="">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-3">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
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

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="photo url" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Have an account? <Link to='/login' className="text-blue-600 font-bold underline">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;