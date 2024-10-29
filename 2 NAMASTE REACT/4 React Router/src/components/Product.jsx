import { useParams } from "react-router-dom"

const Product = () => {
    const {productId} = useParams();
    return (
        <div>
            <h1 className="font-extrabold text-3xl text-center m-8 text-orange-500">Product-Param = {productId}</h1>
            
        </div>
    )
}

export default Product