import { IMG_CDN_URL } from '../config';
const Restaurant = ({ img, name, cuisines, rating }) => {
  return (
    <figure className="card">
      <img className="card-image" src={`${IMG_CDN_URL}${img}`} alt={name} />
      <figcaption>
        <h3 style={{ WebkitLineClamp: 1 }}>{name}</h3>
        <h3 style={{ WebkitLineClamp: 2 }}>{cuisines.join(', ')}</h3>
        <h4>{rating} stars</h4>
      </figcaption>
    </figure>
  );
};
export default Restaurant;
