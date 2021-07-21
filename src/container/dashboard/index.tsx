import React, {useMemo, useRef} from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Section1 from '../../components/Section1';
import Separator from '../../components/Separator';
import {useDispatch, useSelector} from "react-redux";
import {TInsurancePayload} from "../../utils/interface/insurance.interface";
import {postInsuranceCalculate} from "../../store/insurance/insurance.action";
import TableInsurance from "../../components/TableInsurance";

const Dashboard = () => {
  const dispatch = useDispatch();
  const mainRef = useRef(null);
  const benefitData = useSelector((state: any) => state.insuranceReducer.data.benefitTable);
  const postInsurance = (body: TInsurancePayload) => {
    dispatch(postInsuranceCalculate(body));
    setTimeout(() => {
      window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});
    }, 1000)
  }
  return (
    <div ref={mainRef}>
      <Header/>
      <Banner/>
      <Section1 postInsurance={postInsurance}/>
      {
        benefitData ?
          <TableInsurance benefitData={benefitData}/> : null
      }
      <Separator/>
    </div>
  )
}
export default Dashboard