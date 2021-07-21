import {ajax,} from 'rxjs/ajax'
import {throwError} from 'rxjs'
import {catchError, map} from 'rxjs/operators'

export enum API_METHOD {
  GET_METHOD = 'get',
  PUT_METHOD = 'put',
  PATCH_METHOD = 'patch',
  POST_METHOD = 'post',
  DELETE_METHOD = 'delete',
}

export enum BODY_TYPE {
  FILE = 'multipart/form-data',
  JSON = 'application/json'
}

export default class ApiGateWay {
  get endPoint() {
    return process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000'
  }

  buildUrl = (path: string) => {
    return this.endPoint + path
  }
  callApiHandle = (
    path: string,
    method?: any,
    body?: any,
    bodyType = BODY_TYPE.JSON
  ) => {
    const url = this.buildUrl(path)
    return ajax({
      method,
      url,
      headers: this.headerConfig(bodyType),
      body,
    }).pipe(
      map(this.handleSuccess),
      catchError(error => throwError(this.handleError(error))),
    )
  }

  getRequest(resource: any) {
    return this.callApiHandle(resource, API_METHOD.GET_METHOD);
  }

  postRequest(path: string, body?: any) {
    return this.callApiHandle(path, API_METHOD.POST_METHOD, body)
  }

  putRequest(path: string, body?: any) {
    return this.callApiHandle(path, API_METHOD.PUT_METHOD, body)
  }

  patchRequest(path: string, body?: any) {
    return this.callApiHandle(path, API_METHOD.PATCH_METHOD, body)
  }

  deleteRequest(path: string) {
    return this.callApiHandle(path, API_METHOD.DELETE_METHOD);
  }

  handleSuccess(response: any) {
    return response.response;
  }

  handleError(error: any) {
    return error;
  }

  headerConfig = (type: any) => {
    const headers: any = {}

    switch (type) {
      case BODY_TYPE.FILE:
        return headers
      case BODY_TYPE.JSON:
        headers["Content-Type"] = BODY_TYPE.JSON;
        return headers
      default:
        break;
    }
  }
}