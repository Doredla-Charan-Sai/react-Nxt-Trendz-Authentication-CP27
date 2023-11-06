// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onTypeUsername = event => {
    this.setState({username: event.target.value})
  }

  onTypePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok) {
      this.onSubmitSuccess()
    } else {
      this.errorMsg = data.error_msg
      console.log(data.error_msg)
      this.setState({username: '', password: ''})
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-bg-cont">
        <div className="login-content-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form onSubmit={this.onLoginFormSubmit} className="login-form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-logo"
              alt="website logo"
            />
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              onChange={this.onTypeUsername}
              value={username}
              className="login-input"
              placeholder="Username"
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              onChange={this.onTypePassword}
              value={password}
              className="login-input"
              placeholder="Password"
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            {this.errorMsg !== undefined && (
              <p className="error-msg">*{this.errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
