import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const HomePage = (props) =>{
    return(
        <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome {props.route.params.name}</Text>
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
    }
  });

export default HomePage;