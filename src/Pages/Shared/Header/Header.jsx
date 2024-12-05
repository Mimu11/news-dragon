import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = props => {
    return (
        <div className='text-center space-y-2 my-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

Header.propTypes = {

};

export default Header;