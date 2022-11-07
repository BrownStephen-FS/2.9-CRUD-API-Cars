import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Car from "./pages/Car";
import NewCar from "./pages/NewCar";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main style={styles.container}>
          <Nav />
          <section style={styles.section}>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/cars/:id" exact element={<Car />}></Route>
              <Route path="/newCar" exact element={<NewCar />}></Route>
            </Routes>
          </section>
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  section: {
    width: "100%"
  }
};
