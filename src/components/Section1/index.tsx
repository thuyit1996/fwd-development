import React, {useEffect, useState} from 'react';
import './index.scss';
import maleIcon from '../../assets/images/male-icon.png';
import femaleIcon from '../../assets/images/female-icon.png';
import {TInsurancePayload} from "../../utils/interface/insurance.interface";
import {formatYYYYMMDD, GENDER, premiumsOptions, yearsOptions} from "./helper";

interface IProps {
  postInsurance: (body: TInsurancePayload) => void;
}


const Section1: React.FC<IProps> = ({postInsurance}) => {
  const [gender, setGender] = useState<GENDER>(GENDER.MALE)
  const [year, setYear] = useState(yearsOptions[0].value);
  const [premium, setPremium] = useState(premiumsOptions[0].value);
  const [dob, setDob] = useState(formatYYYYMMDD(new Date().toISOString()));
  const [premiumPerYear, setPremiumPerYear] = useState(0);

  const changeGender = (value: GENDER) => {
    setGender(value);
  }

  const handleChangePremium = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      setPremium(Number(event.target.value));
    }
  }

  const handleChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      setYear(Number(event.target.value))
    }
  }

  const handleChangeDob = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setDob(formatYYYYMMDD(event.target.value) as any);
    }
  }
  useEffect(() => {
    const perYear = Math.ceil(premium / year);
    setPremiumPerYear(perYear)
  }, [premium, year])

  const onSubmitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const body = {
      genderCd: gender,
      dob,
      planCode: "T11A20",
      premiumPerYear: premiumPerYear,
      paymentFrequency: "YEARLY"
    }
    postInsurance(body)
  }
  return (
    <div className='fwd-section'>
      <div className='container'>
        <form className='fwd-section__info'>
          <div className='fwd-section__info__item fwd-section__info__gender'>
            <div className='fwd-section__info__gender__select d-flex'>
              <h4 className='fwd-section__info__text text-quote--small'>I'm a</h4>
              <div className={`gender-item ${gender === GENDER.MALE ? 'active' : ''}`}
                   onClick={() => changeGender(GENDER.MALE)}>
                <div className='gender-item__img'>
                  <img src={maleIcon} alt='male icon'/>
                </div>
                <label>Male</label>
                <input name='gender' type='radio' value='M'/>
              </div>
              <div className={`gender-item ${gender === GENDER.FEMALE ? 'active' : ''}`}
                   onClick={() => changeGender(GENDER.FEMALE)}>
                <div className='gender-item__img'>
                  <img src={femaleIcon} alt='female icon'/>
                </div>
                <label>Male</label>
                <input name='gender' type='radio' value='F'/>
              </div>
            </div>
          </div>
          <div className='fwd-section__info__item fwd-section__info__smoker d-flex'>
            <div className='fwd-section__info__smoker__btn'>
              <button className='btn btn-primary'>smoker</button>
            </div>
            <div className='fwd-section__info__smoker__btn'>
              <button className='btn btn-primary'>non-smoker</button>
            </div>
          </div>
          <div className='fwd-section__info__item fwd-section__info__dob'>
            <h4 className='fwd-section__info__text text-quote--small'>born on</h4>
            <div className='fwd-section__info__dob__input'>
              <input type="date" value={dob} onChange={handleChangeDob}/>
            </div>
          </div>
          <div className='fwd-section__info__item fwd-section__info__term'>
            <h4 className='fwd-section__info__text text-quote--small'>I would like a</h4>
            <div className='fwd-section__info__term__content'>
              <div className='term-item'>
                <div className='term-item__icon'>
                  <img src='https://www.fwd.com.sg/assets/app/images/icons/general/question-grey.png' alt='term info'/>
                </div>
                <h6 className='term-item__title'>Renewable Term </h6>
                <p className='term-item__desc'>Start with a low premium and enjoy the flexibility to renew each
                  year.</p>
              </div>
              <div className='term-item active'>
                <div className='term-item__icon'>
                  <img src='https://www.fwd.com.sg/assets/app/images/icons/general/question-grey.png' alt='term info'/>
                </div>
                <h6 className='term-item__title'>Renewable Term </h6>
                <p className='term-item__desc'>Start with a low premium and enjoy the flexibility to renew each
                  year.</p>
              </div>
            </div>
          </div>
          <div className='fwd-section__info__item fwd-section__info__price'>
            <div className='select-price'>
              <span className='text-quote--small'>with a sum insured of</span>
              <select value={premium}
                      onChange={handleChangePremium}>
                {
                  premiumsOptions.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>{item.title}</option>
                    )
                  })
                }
              </select>
              <span className='text-quote--small'>for</span>
              <select value={year} onChange={handleChangeYear}>
                {yearsOptions.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>{item.title}</option>
                  )
                })}
              </select>
              <span className='text-quote--small'>years</span>
            </div>
            <p className='price-desc'>Life Insurance Association of Singapore (LIA) recommends <span
              className='text-primary'>cover of 9x your annual salary</span> in LIA Protection Gap study 2017</p>
          </div>
          <div className='fwd-section__info__item fwd-section__info__btn-next'>
            <button className='btn btn-primary' onClick={onSubmitForm}>Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Section1;