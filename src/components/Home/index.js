// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="login-content-cont home-cont">
      <div className="text-cont-home">
        <h1 className="home-head">Clothes That Get You Noticed</h1>
        <p className="home-des">
          Fashion is part of the daily air Complete the below steps to create
          your development environment and start working on some amazing
          projects Complete the below steps to create your development
          environment and start working on some amazing projects Complete the
          below steps to create your development environment and start working
          on some amazing projects
        </p>
        <button type="button" className="logout-btn">
          Shop Now
        </button>
      </div>
      <img
        className="home-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </>
)
export default Home
