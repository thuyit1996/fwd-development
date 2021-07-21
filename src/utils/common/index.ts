import {Observable} from "rxjs";

export type epicWithStateFn = (
  action$: Observable<any>,
  state$: Observable<any>
) => Observable<any>;

export type epicWithoutStateFn = (action$: Observable<any>) => Observable<any>;
