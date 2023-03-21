import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {nameInput: '', passwordInput: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitClick = async event => {
    event.preventDefault()

    const {nameInput, passwordInput} = this.state

    const userDetails = {nameInput, passwordInput}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const responseData = await response.json()

    console.log(responseData)

    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onUsername = event => {
    this.setState({nameInput: event.target.value})
  }

  onPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  renderUsernameInput = () => {
    const {nameInput} = this.state

    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={nameInput}
          className="username-input"
          placeholder="Username"
          onChange={this.onUsername}
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {passwordInput} = this.state

    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={passwordInput}
          className="username-input"
          placeholder="Password"
          onChange={this.onPassword}
        />
      </>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <form className="input-container" onSubmit={this.onSubmitClick}>
          {this.renderUsernameInput()}
          {this.renderPasswordInput()}
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
