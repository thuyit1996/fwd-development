import React from 'react';
import './index.scss';
const Separator = () => {
  return (
    <div className='separator'>
      <img className='d-mobile' src='https://www.fwd.com.sg/assets/app/images/divider/div-mob.png' alt='separator'/>
      <img className='d-desktop' src='https://www.fwd.com.sg/assets/app/images/divider/divider-grey.png' alt='separator'/>
    </div>
  )
}
export default Separator;