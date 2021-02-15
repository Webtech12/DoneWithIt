import React from "react";
import { Text } from "react-native";

import defaultStyle from "../config/defaultStyle";

const AppText = ({ children, style, ...OtherProps }) => {
  return (
    <Text {...OtherProps} style={[defaultStyle.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
