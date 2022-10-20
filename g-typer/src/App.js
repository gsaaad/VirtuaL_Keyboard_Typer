import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
function App() {
  const [showComponent, setShowComponent] = useState({ display: "none" });
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
