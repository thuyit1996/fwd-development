import {epicWithoutStateFn} from "../../utils/common";
import {combineEpics, ofType} from "redux-observable";
import * as InsuranceActionTypes from './insurance.action';
import {exhaustMap, of} from "rxjs";
import ApiGateWay from "../../services/api";
import {InsurancePath} from "../../services/url";
import {catchError, map} from "rxjs/operators";

const apiGateway = new ApiGateWay();
const postInsuranceCalculate: epicWithoutStateFn = (action$) =>
  action$.pipe(
    ofType(InsuranceActionTypes.POST_INSURANCE_CALCULATE),
    exhaustMap(action => {
      return apiGateway.postRequest(InsurancePath.postInsuranceCalculate, action.payload).pipe(
        map(res => InsuranceActionTypes.postInsuranceCalculateSuccess(res)),
        catchError(error => of(InsuranceActionTypes.postInsuranceCalculateFail(error)))
      )
    })
  )


export const insuranceEpic = combineEpics(postInsuranceCalculate)