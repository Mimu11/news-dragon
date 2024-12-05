import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, rating, total_view } = news;
    return (
        <div className="card bg-base-100 space-y-3 border-b-2 shadow-xl">
            <h2 className="card-title">{title}</h2>
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">

                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-blue-700'>Read more...</Link></p>
                        : <p>{details}</p>
                }

            </div>
        </div>
    );
};

NewsCard.propTypes = {

};

export default NewsCard;