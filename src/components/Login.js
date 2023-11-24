import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native-web";

// Apolllo
import { gql, useMutation } from "@apollo/client";
const INICIAR_SESION = gql`
  mutation generateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

const Login = ({ setToken }) => {
  // Hooks
  const [email, setEmail] = useState("eduper11@yopmail.com");
  const [password, setPassword] = useState("Hanzo11.");
  const [cargando, setCargando] = useState(null);

  // Mutation de Apollo
  const [generateCustomerToken] = useMutation(INICIAR_SESION);

  // functions
  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    // Validar
    if ([email, password].includes("")) {
      console.log("todos los campos son obligatorios");
      return;
    }

    setCargando(true);
    try {
      const { data } = await generateCustomerToken({
        variables: {
          email,
          password,
        },
      });

      // Obtener y alamcenar para dar acceso al app
      const token = data.generateCustomerToken.token;
      setToken(token);
      setCargando(null);
    } catch (error) {
      console.log("error", error);
      setCargando(null);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Image source={require("../img/logoCCP.webp")} style={style.logo} />
      </View>
      <Text style={style.heading}>Login</Text>
      {cargando && <ActivityIndicator color="#678c99" />}
      <View>
        <View>
          <Text style={style.label}>Email:</Text>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={onChangeEmail}
          />
        </View>

        <View>
          <Text style={style.label}>Password:</Text>
          <TextInput
            style={style.input}
            value={password}
            secureTextEntry={true}
            onChangeText={onChangePassword}
          />
        </View>

        <button style={style.button} onClick={handleSubmit}>
          Entrar
        </button>
      </View>

      <Text style={style.registrate}>Registrate</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 5,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    width: 150,
    height: 50,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F3F3F3",
    color: "black",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
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
  registrate: {
    marginTop: 40,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 5,
    color: "#b8c7cc",
  },
});

export default Login;
