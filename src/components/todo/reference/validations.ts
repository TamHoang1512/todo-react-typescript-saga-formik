//validations.ts

import * as Yup from "yup";

export const createValidationSchema = () => {
  return Yup.object().shape({
    title: Yup.string().required("This field is required")
  });
};

//import { TFunction } from "i18next";
//t: TFunction
// import React from "react";
// console.log("have error");
// t("message:required", [t("todoInput.todoValue")])
