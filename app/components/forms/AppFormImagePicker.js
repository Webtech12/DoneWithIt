import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessages from "./AppErrorMessages";
import ImageInputList from "../ImageInputList";

const AppFormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUri, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUri.filter((imgUri) => imgUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUri}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
