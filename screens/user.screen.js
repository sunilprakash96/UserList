import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from "react-native-gesture-handler";
import { data } from "../constants";

const User = (props) => {
  const [user, setUser] = useState({
    selectUser: "",
    selectedUser: [],
    selectedItem: [],
    buttonDisabled: true
  });
  const onClickUser = (index) => {
    let array = user.selectedUser;
    const arrayIndex = array.indexOf(index);
    if(array.indexOf(index) !== -1){
      array.splice(arrayIndex, 1);
      setUser({ ...user, selectedUser: array })
    } else {
      array.push(index);
      setUser({ ...user, selectedUser: array })
    }
  }

  const handleNext = () => {
      const result = []
      user.selectedUser.map(index => result.push(data[index]));
      props.navigation.navigate("UserList", {data: result})
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "black", paddingBottom: 20 }}>User</Text>
      <Text style={{ fontSize: 20, color: "black" }}>Please Click the name to select</Text>
      <View style={{ height: "75%", width: "100%" }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <View key={index} style={{ width: "100%", paddingTop: 10, paddingBottom: 10, flexDirection: "row", marginLeft: 20, }}>
              <CheckBox
                value={user.selectedUser.includes(index)}
                onValueChange={() => {setUser({ ...user, selectUser: index }); onClickUser(index)}}
                // tintColor={}
                onTintColor={"dfdfdf"}
                styles={{ backgroundColor: 'red'}}
              />
              <Text onPress={() => {setUser({ ...user, selectUser: index }); onClickUser(index)}} style={{ color: "black", fontSize: 30 }}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity disabled={user.selectedUser.length === 0 ? true : false }  onPress={() => handleNext()} activeOpacity={0.9} style={{ width: 250, height: "25%", backgroundColor: "black", marginTop: 30, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
        <View>
          <Text style={{ fontSize: 20, width: "100%" }}>Next</Text>
        </View>
      </TouchableOpacity>
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
})
export default User;