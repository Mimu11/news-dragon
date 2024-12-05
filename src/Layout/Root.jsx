import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
const Root = props => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

Root.propTypes = {

};

export default Root;