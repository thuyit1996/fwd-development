import {combineEpics} from "redux-observable";
import {insuranceEpic} from "../insurance/insurance.epic";

export const rootEpics: any = combineEpics(
  insuranceEpic
)