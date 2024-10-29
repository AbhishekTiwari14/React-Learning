import { lazy, Suspense } from "react"
import Layout from "../4 React Router/src/Layout"

//Instead of import Instamart form "./Instamart.jsx", we do :
const instamart = lazy(()=> import("./Instamart.jsx"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <route path = "/" element = {<Layout />}>
            <route path= "instamart" element = {<Suspense fallback = {<Shimmer />}> <Instamart /> </Suspense>}/>
        </route>
    )
)
