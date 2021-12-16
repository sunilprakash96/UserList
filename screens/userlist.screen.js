import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


const UserList = (props) => {
  const [user, setUser] = useState({
    selectUser: "",
    selectedUser: []
  });
  const selectedData = props.route.params.data;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "black", paddingBottom: 20 }}>UserList</Text>
      <View style={{ alignItems: "flex-start", width: "100%", paddingLeft: 25}}>
      <View style={{ height: "90%", width: "100%" }}>
        <FlatList
          data={selectedData && selectedData.length !== 0 ? selectedData: []}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <View key={index} style={{ width: "100%", paddingTop: 10, paddingBottom: 10, flexDirection: "row", marginLeft: 20 }}>
              <Text style={{ color: "black", fontSize: 30 }}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center"
  }
});

export default UserList;