import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const BreakingNews = props => {
    return (
        <div className='flex gap-2 bg-red-100 text-black p-2'>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover speed='100'>
                <Link className='mr-6' to='/'>I can be a React component, multiple React components, or just some text.....</Link>
                <Link className='mr-6' to='/'>I can be a React component, multiple React components, or just some text.....</Link>
                <Link className='mr-6' to='/'>I can be a React component, multiple React components, or just some text.....</Link>
            </Marquee>
        </div>
    );
};

BreakingNews.propTypes = {

};

export default BreakingNews;