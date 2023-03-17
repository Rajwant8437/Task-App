import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Nabbar";
import HomePage from "./HomePage";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import ImagesSection from "./ImagesSection";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/images" element={<ImagesSection />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
