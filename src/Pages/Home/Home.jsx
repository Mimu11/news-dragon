import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = props => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-2'>
                    <h2 className='font-semibold text-2xl'>Dragon News Home</h2>
                    <div className='mt-4'>
                        {
                            news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                        }
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {

};

export default Home;