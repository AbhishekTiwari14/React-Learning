import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-blue-800 text-white p-2 text-xl'>
      <ul className='flex justify-around'>
        <li>
            <Link to="/" className='font-extrabold underline'>
                LOGO
            </Link>
        </li>
        <>
            <NavLink to="/" className={({isActive}) => `${isActive? "text-orange-300" : "text-white"}`} >
                Home
            </NavLink>
        </>
        <li>
            <NavLink to="/about" className={({isActive}) => `${isActive? "text-orange-300" : "text-white"}`}>
                About
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact-us" className={({isActive}) => `${isActive? "text-orange-300" : "text-white"}`}> 
                Contact Us
            </NavLink>
        </li>
        <li>
            <NavLink to="/product" className={({isActive}) => `${isActive? "text-orange-300" : "text-white"}`}>
                Product
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
