import React from 'react';
import './index.scss';
const Section2 = () => {
  return (
    <div className='fwd-section'>
      <div className='container'>
        <form className='fwd-section__info'>
          <div className='fwd-section__info__item fwd-section__info__quote'>
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
          <div className='fwd-section__info__item fwd-section__info__coverage'>
            <h3 className='quote-text text-quote--medium'>add on to your coverage</h3>
            <div className='fwd-section__info__coverage__content'>
              <div className='coverage-item active'>
                <div className='coverage-item__name'>
                  <span className='coverage-item__name__text'>Total and Permanent Disability</span>
                  <div className='coverage-item__name__icon'>
                    <img src='https://www.fwd.com.sg/assets/app/images/icons/general/question-grey.png' alt='term info'/>
                  </div>
                </div>
                <div className='coverage-item__price'>
                <span className='coverage-item__price__month text-quote--small text-primary'>+S$0.83/mth</span>
                <span className='coverage-item__price__text'>with a sum insured of</span>
                <select>
                  <option>S$50k</option>
                  <option>S$150k</option>
                  <option>S$200k</option>
                  <option>S$500k</option>
                  <option>S$550k</option>
                </select>
                </div>
              </div>
              <div className='coverage-item'>
                <div className='coverage-item__name'>
                  <span className='coverage-item__name__text'>Total and Permanent Disability</span>
                  <div className='coverage-item__name__icon'>
                    <img src='https://www.fwd.com.sg/assets/app/images/icons/general/question-grey.png' alt='term info'/>
                  </div>
                </div>
                <div className='coverage-item__price'>
                <span className='coverage-item__price__month text-quote--small text-primary'>+S$0.83/mth</span>
                <span className='coverage-item__price__text'>with a sum insured of</span>
                <select>
                  <option>S$50k</option>
                  <option>S$150k</option>
                  <option>S$200k</option>
                  <option>S$500k</option>
                  <option>S$550k</option>
                </select>
                </div>
              </div>
            </div>
            <p className='coverage-item__desc'><span className='text-primary'>70% of our term life customers</span> choose to enhance their cover with these benefits</p>
            <div className='fwd-two-btn'>
              <button className='btn btn-outline-primary'>skip</button>
              <button className='btn btn-primary'>apply</button>
            </div>
          </div>
          <div className='fwd-section__info__item fwd-section__info__promo'>
            <h3 className='quote-text text-quote--medium'>have a promo code?</h3>
            <div className='fwd-section__info__promo__content'>
              <input type='text' placeholder='enter it here'/>
              <p className='promo-text'>Your promo code gets you a discount off your first year premium.</p>
            </div>
            <div className='fwd-two-btn'>
              <button className='btn btn-outline-primary'>skip</button>
              <button className='btn btn-primary disable'>apply</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Section2;