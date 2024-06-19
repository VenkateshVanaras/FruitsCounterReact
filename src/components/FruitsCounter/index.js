// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onMangoIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="fruit-container">
        <div className="fruit-sub-container">
          <h1 className="main-heading">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="changes-As-media-change">
            <div className="image-text-container">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image-props"
              />
              <div className="fruit-button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onMangoIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-text-container">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image-props"
              />
              <div className="fruit-button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onBananaIncrement}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
