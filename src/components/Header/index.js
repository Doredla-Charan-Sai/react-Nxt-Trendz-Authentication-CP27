// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-image"
    />
    <ul className="header-list">
      <li className="header-list-item">
        <p className="header-item">Home</p>
      </li>
      <li className="header-list-item">
        <p className="header-item">Products</p>
      </li>
      <li className="header-list-item">
        <p className="header-item">Cart</p>
      </li>
      <li className="header-list-item">
        <button type="button" className="logout-btn">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
