import { useEffect, useState } from 'react';
import Restaurant from './RestaurantCard';
import Shimmer from './Shimmer';
import { ShimmerSimpleGallery } from 'react-shimmer-effects-18';
//https://snyk.io/advisor/npm-package/react-shimmer-effects-18
const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  function filleterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  }
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants) return null;
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          className="search-input"
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filleterData(searchText, allRestaurants);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
        {}
      </div>
      {allRestaurants.length === 0 ? (
        <ShimmerSimpleGallery card imageHeight={150} caption />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurant.length === 0 ? (
            <h1>No Restaurant Found</h1>
          ) : (
            filteredRestaurant.map((restaurant) => (
              <Restaurant
                key={restaurant.data?.id}
                img={restaurant.data?.cloudinaryImageId}
                name={restaurant.data?.name}
                cuisines={restaurant.data?.cuisines}
                rating={restaurant.data?.avgRating}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Body;
