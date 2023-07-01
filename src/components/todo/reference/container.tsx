//container.tsx

import React, { useCallback, useEffect, useMemo } from "react";
import { FormikContext, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { initTodoValue } from "../common/types";
import { ButtonProps } from "../../../common/utils/button";
import actions from "../../../store/todo/actions";
import {
  TodoRequest,
  TodoResponse,
  TodoState,
} from "../../../store/todo/models";
import selectors from "../../../store/todo/selectors";
import RequestForm from "./request-form";
import { createValidationSchema } from "./validations";
import { useSelector } from "react-redux";
import { StateAll } from "../../../common/store/todo/types";
// import { useMemorizedSelector } from "./use-memorized-selector";

const Container = () => {
  const dispatch = useDispatch();

  const todoApiResponse = useSelector<StateAll, TodoResponse>(
    (state: StateAll) => selectors.todoApiResponse()(state).response
  );

  // Log the response
  // console.log(todoApiResponse);

  const callApiTodo = useCallback(
    (request: TodoRequest) => dispatch(actions.callApiTodo.request(request)),
    [dispatch]
  );

  const handleSubmitForm = useCallback(
    (values: TodoRequest) => {
      const uniqueId = nanoid();
      const request = { id: uniqueId, title: values.title };
      console.log("Form submitted: " + request.id + " : " + request.title);
      callApiTodo(request);
    },
    [callApiTodo]
  );

  const formikBag = useFormik({
    initialValues: initTodoValue,
    validationSchema: createValidationSchema,
    onSubmit: handleSubmitForm,
  });

  const handleOnClick = useCallback(() => {
    formikBag.submitForm();
  }, [formikBag]);

  const buttonProps = useMemo(() => {
    return {
      id: "addBtn",
      text: "ADD",
      theme: "blue",
      shortcutKey: "F1",
      onClick: handleOnClick,
    } as ButtonProps;
  }, [handleOnClick]);

  useEffect(() => {
    // console.log(todoApiResponse);
  }, [todoApiResponse, handleOnClick]);

  return (
    <>
      <h2>TODO APP</h2>
      <FormikContext.Provider value={formikBag}>
        <RequestForm {...buttonProps} />
      </FormikContext.Provider>
    </>
  );
};
export default React.memo(Container);

// import { useTranslation } from "react-i18next";
//const { t } = useTranslation();
// const { t } = useTranslation([Constant.Message_ID(//message),
//                                Constant.Transaction_ID(gaba)])
