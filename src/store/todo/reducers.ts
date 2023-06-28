// call api by produce

//reducer combine reducer

//export
import { ActionType, getType } from "typesafe-actions";
import produce, { Draft } from "immer";
import { ResponseState } from "../../common/store/todo/models";
import actions from "./actions";
import * as models from "./models";
import { combineReducers } from "redux";

type Actions = ActionType<typeof actions>;

export const callApiTodo = produce(
  (
    draft: Draft<ResponseState<models.TodoResponse>>,
    action: Actions
  ): ResponseState<models.TodoResponse> => {
    switch (action.type) {
      case getType(actions.callApiTodo.request):
        draft.response = models.initTodoState.todoResponse.response;
        draft.isLoading = true;
        return draft;

      case getType(actions.callApiTodo.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;

      case getType(actions.callApiTodo.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;

      default:
        return draft;
    }
  },
  models.initTodoState.todoResponse
);

const reducer = combineReducers({
  todoResponse: callApiTodo
});

export default reducer;
