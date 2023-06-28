export const ACT_TODO_REQUEST = "todo/act_todo_request" as const;
export const ACT_TODO_SUCCESS = "todo/act_todo_success" as const;
export const ACT_TODO_FAILURE = "todo/act_todo_failure" as const;

export type Types =
  | typeof ACT_TODO_REQUEST
  | typeof ACT_TODO_SUCCESS
  | typeof ACT_TODO_FAILURE;
