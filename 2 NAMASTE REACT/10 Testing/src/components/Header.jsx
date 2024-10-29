import reactLogo from "../assets/react.svg"
const Header = () => {
  return (
    <div>
      <img src={reactLogo}  data-testid = "reactLogo" className="logo react" alt="React logo" />
    </div>
  )
}

export default Header
