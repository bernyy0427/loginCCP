import React, { useState } from "react";
// components
import { Login, Home } from "./components";
function App() {
  const [token, setToken] = useState(null);

  if (token) {
    return <Home setToken={setToken} />;
  } else {
    return <Login setToken={setToken} />;
  }
}

export default App;
