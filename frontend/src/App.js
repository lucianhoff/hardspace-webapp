//components
import Footer from "./components/Footer";
import Navigation from "./components/navbar/Navbar";

//pages
import Home from './pages/Home';

//style
import "./App.css";

//redux
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

// const mapStateToProps = (state) => {
//   return {
//   };
// };

// const mapDispatchToProps = {
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
