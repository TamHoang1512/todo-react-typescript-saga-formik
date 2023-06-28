import React from "react";
import { ErrorMessage, useFormikContext } from "formik";
import { TodoFormValues } from "../../components/todo/common/types";
export type InputProps = {
  id?: string;
  type?: string;
  name: string;
};

const Input: React.FC<InputProps> = ({ id, name, type }) => {
  const { values, setFieldValue } = useFormikContext<TodoFormValues>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleInputChange}
        value={values.title}
      />
      <br />
      <ErrorMessage name={name} />
    </div>
  );
};

export default React.memo(Input);
