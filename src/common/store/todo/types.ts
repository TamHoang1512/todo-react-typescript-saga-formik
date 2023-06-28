//this code usign like an interface but now i can touch it
// export interface StateAll {}

// temp version
import { TodoState } from "../../../store/todo/models";
export interface StateAll {
  todos: TodoState;
}

export const RESTORE_STATE = "restoreState" as const;
export const RESET_STATE = "resetState" as const;
export const RESET_ALL_STATE = "resetAllState" as const;
export const RESET_TRANSACTION_STATE = "resetTransactionState" as const;
export type Types =
  | typeof RESTORE_STATE
  | typeof RESET_STATE
  | typeof RESET_ALL_STATE
  | typeof RESET_TRANSACTION_STATE;
