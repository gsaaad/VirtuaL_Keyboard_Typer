import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-container">
        <h2>
          Do you have what it takes to be a{" "}
          <span className="text-success font-bold fw-bold ">G-Typer?</span>
        </h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
