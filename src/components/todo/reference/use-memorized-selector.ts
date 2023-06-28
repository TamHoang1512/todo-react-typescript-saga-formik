import { useMemo } from "react";
import { useSelector } from "react-redux";
import { OutputSelector } from "reselect";
import { StateAll } from "../../../common/store/todo/types";

export const useMemorizedSelector = <
  SelectorReturnType extends unknown,
  ResultFuncType extends unknown
>(
  selector: () => OutputSelector<StateAll, SelectorReturnType, ResultFuncType>
): SelectorReturnType => {
  const memorizedSelector: any = useMemo(selector, []);
  return useSelector((state: StateAll) => memorizedSelector(state));
};
