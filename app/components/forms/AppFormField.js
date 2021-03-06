import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessages from "./AppErrorMessages";
import AppTextInput from "../AppTextInput";

const AppFormField = ({ name, width, ...OtherProps }) => {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...OtherProps}
      />
      <AppErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
