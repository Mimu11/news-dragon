import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarWeek } from "react-icons/fa";
import moment from 'moment';
import demoPic from '../../../assets/playground.png'
const LeftSideNav = props => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='space-y-6'>
            <h2 className='font-semibold text-2xl' >All Category</h2>
            {
                categories.map(category => <Link key={category.id} to={`/category/${category.id}`} className='block text-left ml-4'>{category.name}</Link>)
            }
            <div className="card bg-base-100 p-4 shadow-xl">
                <figure>
                    <img
                        src={demoPic}
                        alt="Shoes" />
                </figure>
                <div className="space-y-4 mt-2">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex items-center'>
                        <div>
                            <p>Sports </p>
                        </div>
                        <div>
                            <p className=' items-center'> <FaCalendarWeek className='mx-3' /></p>

                        </div>
                        <div>
                            <p>{moment().format(" MMMM D, YYYY")}</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="card bg-base-100 p-4 shadow-xl">
                <figure>
                    <img
                        src={demoPic}
                        alt="Shoes" />
                </figure>
                <div className="space-y-4 mt-2">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex items-center'>
                        <div>
                            <p>Sports </p>
                        </div>
                        <div>
                            <p className=' items-center'> <FaCalendarWeek className='mx-3' /></p>

                        </div>
                        <div>
                            <p>{moment().format(" MMMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 p-4 shadow-xl">
                <figure>
                    <img
                        src={demoPic}
                        alt="Shoes" />
                </figure>
                <div className="space-y-4 mt-2">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex items-center'>
                        <div>
                            <p>Sports </p>
                        </div>
                        <div>
                            <p className=' items-center'> <FaCalendarWeek className='mx-3' /></p>

                        </div>
                        <div>
                            <p>{moment().format(" MMMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LeftSideNav.propTypes = {

};

export default LeftSideNav;