import { Link, NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <div className='bg-blue-800 text-white p-2 text-xl flex justify-around mt-16'>
            <ul>
                <li><Link to="/" className='font-extrabold underline'>LOGO</Link></li>
                <li><NavLink>Home</NavLink></li>
                <li><NavLink>About</NavLink></li>
                <li><NavLink>Contact Us</NavLink></li>
            </ul>
            <ul>
                <li>Join Us</li>
                <li>Details</li>
                <li>Blogs</li>
                <li>Info</li>
            </ul>
            <ul>
                <li>Partners</li>
                <li>Copyright</li>
                <li>India</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Footer