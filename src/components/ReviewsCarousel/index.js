// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickLeftButton = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevCount => ({count: prevCount.count - 1}))
    }
  }

  onClickRightButton = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    if (count < reviewsList.length - 1) {
      this.setState(prevCount => ({count: prevCount.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="sub-container">
          <button
            className="button"
            type="button"
            onClick={this.onClickLeftButton}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="lr-image"
            />
          </button>
          <div className="company-container" key={username}>
            <img src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            className="button"
            type="button"
            onClick={this.onClickRightButton}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="lr-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
