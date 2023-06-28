import { ResponseState } from "../../common/store/todo/models";
import * as Todo from "../../common/store/todo/todo";

export type TodoRequest = Todo.Request;
export type TodoResponse = Todo.Response;

export const initTodoState: TodoState = {
  todoResponse: {
    response: {
      userId: "0",
      id: "0",
      title: "",
      completed: false
    },
    isLoading: false
  }
};

export type TodoState = {
  todoResponse: ResponseState<TodoResponse>;
};

// now i can understand this code

// declare module "common/store/todo/types" {
//   export interface StateAll {
//     "todo/todoState": TodoState;
//   }
// }
