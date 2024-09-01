import React from 'react'
import './Review.css'
const Review = (props) => {
  return (
    <div className='reviewitem'>
      <div className="comment">{props.item.comment}</div>
      <div className="user">{props.item.reviewerName}</div>
      <div className="date">{props.item.date}</div>
    </div>
  )
}

export default Review
