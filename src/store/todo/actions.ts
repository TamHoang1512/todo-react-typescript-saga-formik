// call action to api
// type.ACT_TODO_SUCCESS,...
//export default
import { createAsyncAction } from "typesafe-actions";
import * as types from "./types";
import * as models from "./models";

export const callApiTodo = createAsyncAction(
  types.ACT_TODO_REQUEST,
  types.ACT_TODO_SUCCESS,
  types.ACT_TODO_FAILURE
)<models.TodoRequest, models.TodoResponse, Error>();

export default { callApiTodo };
