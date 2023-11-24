import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

// components
import { Galeria } from "../components";
const Home = ({ setToken }) => {
  const handleLogOut = () => {
    setToken(null);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bienvenido</Text>
      <Galeria />
      <Galeria />
      <Galeria />

      <button onClick={handleLogOut} style={styles.button}>
        Salir
      </button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#678c99",
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    border: "none",
    marginTop: 20,
  },
});
export default Home;
