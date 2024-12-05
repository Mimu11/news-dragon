import PropTypes from 'prop-types';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/swimming.png'
import qZone2 from '../../../assets/playground.png'
import qZone3 from '../../../assets/class.png'

const RightSideNav = props => {
    return (
        <div>
            <div className='space-y-2 p-4 mb-6'>
                <h2 className='font-semibold text-2xl'>Login With</h2>
                <button className="btn text-">
                    <FcGoogle />

                    Login with Google
                </button>
                <button className="btn text-">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
            <div className=' mb-6 p-4'>
                <h2 className='font-semibold text-2xl mb-4'>Find us on</h2>
                <a className='flex items-center border p-2  rounded-t-lg' href=""><FaFacebook className='mr-3'></FaFacebook><span>Facebook</span> </a>
                <a className='flex items-center border p-2  ' href=""><FaTwitter className='mr-3'></FaTwitter><span>Twitter</span> </a>
                <a className='flex items-center border p-2  rounded-b-lg' href=""><FaInstagram className='mr-3'></FaInstagram><span>Instagram</span> </a>

            </div>
            <div className='space-y-2 mb-6 p-4 bg-gray-200'>
                <h2 className='font-semibold text-2xl'>Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

RightSideNav.propTypes = {

};

export default RightSideNav;