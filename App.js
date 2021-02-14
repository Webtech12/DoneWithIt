import React, { useState } from "react";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/Apptext";

import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Electronics", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={(category) => setCategory(category)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
