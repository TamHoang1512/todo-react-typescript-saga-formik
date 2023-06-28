// selector.ts

import { createSelector, Selector } from "reselect";
import { StateAll } from "../../common/store/todo/types";
import { TodoState, initTodoState } from "./models";

// Root selector
export const rootSelector: Selector<StateAll, TodoState> = (state: StateAll) =>
  state.todos || initTodoState;

// Select todo response
export const todoApiResponse = () =>
  createSelector(
    rootSelector,
    (todoState: TodoState) => todoState.todoResponse || initTodoState
  );

// Select todo response loading status
export const selectTodoResponseLoading: Selector<
  StateAll,
  boolean
> = createSelector(
  rootSelector,
  (todoState: TodoState) => todoState.todoResponse.isLoading
);

export default {
  rootSelector,
  todoApiResponse,
  selectTodoResponseLoading
};
