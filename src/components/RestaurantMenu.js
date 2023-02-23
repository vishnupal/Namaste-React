import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { IMG_CDN_URL } from '../config';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  console.log(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant?.data?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.data?.cloudinaryImageId} alt="" />
        <h3>{restaurant?.data?.area}</h3>
        <h3>{restaurant?.data?.city}</h3>
        <h3>{restaurant?.data?.avgRating} start</h3>
        <h3>{restaurant?.data?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.data?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
