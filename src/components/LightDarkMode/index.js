import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {LightMode: false}

  bgColor = 'light'

  btnClicked = () => {
    const {LightMode} = this.state
    this.bgColor = LightMode ? 'light' : 'dark'
    this.setState(prevState =>
      prevState.LightMode ? {LightMode: false} : {LightMode: true},
    )
  }

  renderMode = () => {
    const {LightMode} = this.state
    if (LightMode === true) {
      return (
        <button className="button" onClick={this.btnClicked}>
          Dark Mode
        </button>
      )
    }
    return (
      <button className="button" onClick={this.btnClicked}>
        Light Mode
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <div className={this.bgColor}>
          <h1 className="heading">Click to change mode</h1>
          {this.renderMode()}
        </div>
      </div>
    )
  }
}

LightDarkMode.defaultProps = {bgColor: 'dark'}

export default LightDarkMode
