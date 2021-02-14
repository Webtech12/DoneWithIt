import React, { useState } from "react";
import { FlatList, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteActions from "../components/lists/ListItemDeleteActions";

const initialMessages = [
  {
    id: 1,
    title: "a",
    subTitle: "sdsds",
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "b",
    subTitle: "zzzzz",
    image: require("../../assets/jacket.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            {...item}
            onPress={() => console.log("object")}
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "b",
              subTitle: "zzzzz",
              image: require("../../assets/jacket.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};
export default MessagesScreen;
