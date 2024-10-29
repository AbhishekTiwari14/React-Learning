import '../App.css'

const Shimmer = () => {
    return (
      <div className="shimmerContainer">
        <div className="shimmerHeader">
            <input type="text" name="shimmerSearchBox" id="shimmerSearchBox" />
            <button className="shimmerSearchBtn">Search</button>
        </div>
        <div className="shimmerCards">
            {Array(12).fill("").map((item, index) => {
                return(
                    <div className="shimmerCard" key={index}>

                    </div>
                )
            })}
        </div>
      </div>  
    )
}

export default Shimmer; 