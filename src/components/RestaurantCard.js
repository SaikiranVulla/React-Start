import { IMAGES_CDN } from "../utils/constant"
function RestaurantCard(props) {
  const {id,cloudinaryImageId,name,cuisines,avgRating,sla}=props?.resturantData?.card?.card?.info
  return (
    <div key={id} className="cardContainer" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-img"
        alt="res-img"
        src={IMAGES_CDN + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard