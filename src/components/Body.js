import RestaurantCard from "./RestaurantCard"
import { resObj } from "../utils/mockData"
import { useState } from "react"

const Body = () => {
  const [resturantData, setResturantData]=useState(resObj)
  return (
    <div className="bodyContainer">
      <div className="filter">
        <button 
        className="filter-btn"
        onClick={()=>{
          const filteredData = resturantData.filter((response) => response.card.card.info.avgRating > 4)
          setResturantData(filteredData)
        }}
        >
          Top Rated Restaurant
        </button>
        </div>
      <div className="res-container">
        {resturantData.map((item,index) => (
          <RestaurantCard
            key={index}
            resturantData={item}
          />
        ))}
      </div>

    </div>
  )
}

export default Body