/* eslint-disable react/prop-types */

const RestaurantCard = ({name, costForTwo, locality}) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h1>{costForTwo}</h1>
      <h1>{locality}</h1>
    </div>
  )
}

export default RestaurantCard
