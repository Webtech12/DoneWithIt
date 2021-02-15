import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import AppErrorMessages from "./AppErrorMessages";

const AppFormPicker = ({
  items,
  width,
  name,
  placeholder,
  PickerItemComponent,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
