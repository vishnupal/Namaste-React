import { IMG_CDN_URL } from '../config';
const Restaurant = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating: rating,
  lastMileTravelString,
}) => {
  return (
    <figure className="my-3 mx-6 h-72 w-64  rounded-md bg-white p-4 shadow-lg">
      <img
        className="mb-2 "
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <figcaption>
        <h3
          className="text-xl font-semibold line-clamp-1"
          style={{ WebkitLineClamp: 1 }}
        >
          {name}
        </h3>
        <p
          className="text-sm font-normal text-gray-500 line-clamp-2"
          style={{ WebkitLineClamp: 2 }}
        >
          {cuisines.join(', ')}
        </p>
        <p className="text-sm font-normal line-clamp-2">{rating} stars</p>
        <h4 className="text-sm font-normal  text-slate-500">
          {lastMileTravelString}
        </h4>
      </figcaption>
    </figure>
  );
};
export default Restaurant;
