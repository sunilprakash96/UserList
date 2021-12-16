import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { showMessage, hideMessage } from "react-native-flash-message";

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
    showUserNameError: false,
    showpasswordError: false
  });

  const handleLogin = () => {
    const Mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    if(Object.keys(user.username).length ===0){
      setUser({...user, showUserNameError: true, usernameError: "Username must not be empty",})
    } 
    if(Object.keys(user.password).length ===0){
      console.log("password error")
      setUser({...user, showpasswordError: true, passwordError: "Password must not be empty",})
    } 
    if(!Mail.test(user.username)){
      setUser({...user, showUserNameError: true, usernameError: "Email must be valid email",})
    } else {
      props.navigation.navigate("User")
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ height: "10%" }}></View>
      <Text style={{ fontSize: 30, color: "black", paddingBottom: 20 }}>Login</Text>
      <View style={{ width: "90%", alignItems: 'center' }}>
        <TextInput
          style={{ backgroundColor: "white", width: "70%", borderRadius: 20, color: "black", paddingLeft: 30, borderColor: "black", borderWidth: 2 }}
          placeholder="Username"
          placeholderTextColor={"#ccc"}
          editable
          autoCapitalize="none"
          onChangeText={(text) => setUser({ ...user, username: text, showUserNameError: false })}
          value={user.username}
        />
      </View>
      {user.showUserNameError && <Text style={{ fontSize: 15, color: "black", paddingBottom: 20 }}>{user.usernameError}</Text>}
      <View style={{ width: "90%", alignItems: 'center', paddingTop: 15 }}>
        <TextInput
          style={{ backgroundColor: "white", width: "70%", borderRadius: 20, color: "black", paddingLeft: 30, borderColor: "black", borderWidth: 2 }}
          placeholder="Password"
          placeholderTextColor={"#ccc"}
          editable
          onChangeText={(text) => setUser({ ...user, password: text, showpasswordError: false})}
          value={user.password}
        />
      </View>
      {user.showpasswordError && <Text style={{ fontSize: 15, color: "black", paddingBottom: 20 }}>{user.passwordError}</Text>}
      <TouchableOpacity onPress={() => handleLogin()} activeOpacity={0.9} style={{ width: 250, height: "25%", backgroundColor: "black", marginTop: 30, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
        <View>
          <Text style={{ fontSize: 20, width: "100%" }}>Login</Text>
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
export default Login;