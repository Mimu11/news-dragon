import PropTypes from 'prop-types';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = props => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                // Navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>

                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <h2 className='font-semibold text-3xl p-6  text-center'>Login your account</h2>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p>Do not have any account?<Link
                                    to='/register'><button className="btn btn-active btn-link">Register</button></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;