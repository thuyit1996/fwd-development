import React from 'react';
import './index.scss';
const Section3 = () => {
  return (
    <div className='fwd-section fwd-section--pb-100'>
      <div className='container'>
        <form className='fwd-section__info'>
          <div className='fwd-section__info__item fwd-section__info__quote fwd-section__info__quote--two-line'>
            <span className='quote-text text-quote--medium'>your quote is: </span>
            <div className='quote-value'>
            <div className='quote-value__line'>
              <span className='quote-value__large text-quote--large text-primary'>S$5.07</span>
              <span className='text-quote--small'>monthly</span>
            </div>
            <div className='quote-value__line'>
              <div className='quote-value__line__group'>
                <span className='quote-value__large text-quote--large text-primary'>S$57.80</span>
                <span className='quote-value__small text-primary'>*save S$3.04</span>
              </div>
              <span className='text-quote--small'>yearly</span>
            </div>
            </div>
          </div>
          <div className='fwd-two-btn fwd-two-btn--large'>
            <button className='btn btn-outline-primary'>skip</button>
            <button className='btn btn-primary disable'>apply</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Section3;