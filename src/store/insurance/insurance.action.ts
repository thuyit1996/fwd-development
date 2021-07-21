import {TInsurancePayload} from "../../utils/interface/insurance.interface";

export const POST_INSURANCE_CALCULATE = '[Insurance] INSURANCE_CALCULATE';
export const POST_INSURANCE_CALCULATE_SUCCESS = '[Insurance] INSURANCE_CALCULATE_SUCCESS';
export const POST_INSURANCE_CALCULATE_FAIL = '[Insurance] INSURANCE_CALCULATE_FAIL';

export const postInsuranceCalculate = (payload: TInsurancePayload) => ({
  type: POST_INSURANCE_CALCULATE,
  payload
})

export const postInsuranceCalculateSuccess = (payload: any) => ({
  type: POST_INSURANCE_CALCULATE_SUCCESS,
  payload
})

export const postInsuranceCalculateFail = (payload?: TInsurancePayload) => ({
  type: POST_INSURANCE_CALCULATE_FAIL,
  payload
})
