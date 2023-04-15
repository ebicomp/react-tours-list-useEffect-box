import React, { useState } from "react"

const Tour = props => {
  const [readMore, setReadMore] = useState(false)
  const { name, info, image, price, id } = props.tour
  const { onRemoveTour } = props
  const removeTourHandler = id => {
    onRemoveTour(id)
  }
  return (
    <div className="single-tour">
      <img className="img" src={image} />
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {readMore ? info : ` ${info.substring(0, 200)} ...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read less" : "ReadMore"}
          </button>
        </p>

        <p className="tour-price">{price}</p>
        <button className="btn-block btn" onClick={onRemoveTour}>
          Not Interested
        </button>
      </div>
    </div>
  )
}

export default Tour
