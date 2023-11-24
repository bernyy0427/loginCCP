import React from "react";
import { View, Image, StyleSheet } from "react-native-web";

const Imagenes = () => {
  return (
    <View style={styles.containerImage}>
      <Image source={require("../img/woman.jpeg")} style={styles.image} />
      <Image source={require("../img/woman_2.jpeg")} style={styles.image} />
      <Image source={require("../img/woman_3.jpeg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Imagenes;
