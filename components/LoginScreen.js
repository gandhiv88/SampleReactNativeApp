import React,{useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = ({navigation}) =>{
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState('');
  
    const validCredentials = (username, password) => {
    let credentialsArray = [{uname : "Gandhi", pwd : "Password123"},{uname : "admin", pwd : "admin"}];
    let credObj = credentialsArray.find(c => c.uname.toLowerCase() === username.toLowerCase())
    alert(credObj.uname);
      if (credObj.pwd === password) {
        return true;
      }
      return false;
    }
  
    const onPressLogin = () => {
      setErrorState("");
      if (!username && username.trim().length == 0) {
        setErrorState("Username Required");
      } else if (!password && password.trim().length == 0) {
        setErrorState("Password Required");
      } else {
        if (validCredentials(username, password)) {
            navigation.navigate("Home",{name: username});
        } else {
          setErrorState("Enter correct credentials");
        }
      }
  
    };
    return(
        <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Login Screen</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText} placeholder="username" placeholderTextColor="#003f5c" onChangeText={text => setusername(text)}></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText} secureTextEntry placeholder="password" placeholderTextColor="#003f5c" onChangeText={text => setPassword(text)}></TextInput>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => onPressLogin()} >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.errorText}>{errorState}</Text>
        </View>
      </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#4FD3DA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#fb5b5a",
      marginBottom: 40,
    },
    inputView: {
      width: "80%",
      backgroundColor: "#3AB4BA",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      marginLeft: 25,
      marginTop: 10,
      justifyContent: "center",
      padding: 20,
    },
    inputText: {
      height: 50,
      color: "white"
    },
    loginBtn: {
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10,
      marginLeft: 25
    },
    errorText: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10,
      marginLeft: 90,
      color: "#8B0000",
      fontWeight: "bold",
      fontSize: 20,
    }
  });

export default LoginScreen;