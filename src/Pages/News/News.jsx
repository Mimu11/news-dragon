import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import { useParams } from 'react-router-dom';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';
const News = props => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h3 className='text-2xl font-semibold'>Dragon News</h3>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {

};

export default News;