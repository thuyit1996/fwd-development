import * as InsuranceActionType from './insurance.action';


type IState = {
  status: 'idle' | 'loading' | 'error',
  data: any[],
  error: string
}

const initialState: IState = {
  status: 'idle',
  data: [],
  error: ''
}
export const insuranceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case InsuranceActionType.POST_INSURANCE_CALCULATE :
      return {
        ...state,
        status: 'loading'
      }

    case InsuranceActionType.POST_INSURANCE_CALCULATE_SUCCESS :
      return {
        ...state,
        status: 'idle',
        data: action.payload
      }

    case InsuranceActionType.POST_INSURANCE_CALCULATE_FAIL :
      return {
        ...state,
        status: 'error',
        data: [],
        error: action.payload
      }
    default :
      return state;
  }
}