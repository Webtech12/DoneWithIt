import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessages from "./AppErrorMessages";
import AppTextInput from "../AppTextInput";

const AppFormField = ({ name, ...OtherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...OtherProps}
      />
      <AppErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
