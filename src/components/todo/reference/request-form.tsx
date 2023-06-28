//request-form.tsx

import React from "react";
import Button from "../../../../src/common/utils/button";
import { ButtonProps } from "../../../../src/common/utils/button";
import Input from "../../../common/utils/input";

const RequestForm: React.FC<ButtonProps> = (buttonProps) => {
  return (
    <>
      <Input name="title" id="title" type="text" />
      <Button {...buttonProps} />
    </>
  );
};
export default React.memo(RequestForm);

// import { ErrorMessage, useFormikContext } from "formik";
// import { TodoFormValues } from "../common/types";
// import { useFocus } from "../common/hooks";
// type RequestFormProps = {
//   buttonProps: ButtonProps;
//   formikBag: FormikProps<any>;
// };

// const { focus } = useFocus();

// const { values, setFieldValue } = useFormikContext<TodoFormValues>();

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setFieldValue(name, value);
// };

// <br />
// <ErrorMessage name="todoValue" />
