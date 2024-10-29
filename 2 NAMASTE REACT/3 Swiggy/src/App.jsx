import { useEffect, useState } from 'react'
import './App.css'
import RestaurantCard from './components/RestaurantCard';
import Header from './components/Header';
import Shimmer from './components/Shimmer';




function App() {

  const [allHotels, setAllHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchData, setSearchData] = useState("");

  async  function getData(){
    const rawData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.391794322389117&lng=73.87424994260073&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const jsonData = await rawData.json();
    setAllHotels(jsonData?.data?.cards);
    setFilteredHotels(jsonData?.data?.cards);
  } 

  function filterData(searchData, allHotels) {
    const filterData = allHotels.filter((hotel)=> hotel.card?.card?.info?.name.includes(searchData));
    setFilteredHotels(filterData);
  }
  

  useEffect(() => {
    getData();
  }, [])

  return allHotels?.length === 0 ? (<Shimmer />)  : (
    <>
    <Header />
    <div className='searchPanel'>
      <input type="text" name="searcInput" id="searchInput" value = {searchData} onChange={(e)=> {
        setSearchData(e.target.value);
      }}/>
      <button className='searchBtn' onClick={() => filterData(searchData, allHotels)}>Search</button>
      </div>
      <div className='cardContainer'>
        {filteredHotels?.map(hotel => {
          return(
            <RestaurantCard key={hotel} name = {hotel.card?.card?.info?.name}  costForTwo = {hotel.card?.card?.info?.costForTwo} locality={hotel.card?.card?.info?.locality} />
          )
        })}
      </div>
    </>
  )
}

export default App
