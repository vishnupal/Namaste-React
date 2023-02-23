import { useEffect, useState } from 'react';
import Restaurant from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
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
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>offline, please check your internet connection!</h1>;
  }
  if (!allRestaurants) return null;
  return (
    <>
      <div className="search-container mb-4 rounded-md bg-purple-700 py-3">
        <input
          type="text"
          value={searchText}
          className="search-input  mx-3 rounded p-1 outline-offset-2 outline-purple-50"
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn rounded-sm bg-purple-100
          px-2 py-1  font-medium tracking-wider text-gray-800 hover:bg-purple-300"
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
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredRestaurant.length === 0 ? (
            <h1>No Restaurant Found</h1>
          ) : (
            filteredRestaurant.map((restaurant) => (
              <Link
                key={restaurant?.data?.id}
                to={'/restaurant/' + restaurant?.data?.id}
              >
                <Restaurant {...restaurant.data} />
              </Link>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Body;
