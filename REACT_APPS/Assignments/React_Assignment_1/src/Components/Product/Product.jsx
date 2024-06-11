import PropTypes from 'prop-types';
import './Product.css';

function Product({ p }) {
    console.log(p);

    return (
        <div className="card">
            <img src={p.image} alt={p.title} />
            <h2>{p.title}</h2>
            <h2>Price: {p.price} $</h2>
            <p>{p.description}</p>
            <p>
                Rating: {p.rating.rate} <span>({p.rating.count})</span>
            </p>
        </div>
    );
}

Product.propTypes = {
    p: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Product;
