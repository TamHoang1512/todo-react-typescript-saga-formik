// call api
//export yeild take lastest

import axios, { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import * as models from "./models";
import { API_URL } from "../../service/todo/todoService";

export function* callApiTodo(
  action: ReturnType<typeof actions.callApiTodo.request>
): SagaIterator {
  try {
    const response: AxiosResponse<models.TodoResponse> = yield call(
      axios,
      API_URL,
      {
        ...action.payload,
        method: "POST"
      }
    );
    yield put(actions.callApiTodo.success(response.data));
  } catch (error) {
    yield put(actions.callApiTodo.failure(error as Error));
  }
}

export function* watchCallApiTodo() {
  yield takeLatest(getType(actions.callApiTodo.request), callApiTodo);
}

export default function* rootSaga() {
  yield watchCallApiTodo();
}
