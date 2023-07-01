//todoServices.ts

import { Dispatch } from "redux";
import { Request } from "../../common/store/todo/todo";
import { callApiTodo } from "../../store/todo/actions";

// export const API_URL = "https://api.todoapp.com/todos";
export const API_URL = "data.json";

export const callApiTodoService = (requestPayload: Request) => async (
  dispatch: Dispatch
) => {
  dispatch(callApiTodo.request(requestPayload));

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(callApiTodo.success(data));
  } catch (error: any) {
    dispatch(callApiTodo.failure(error.message));
  }
};
