//components
import Navigation from "./components/navbar/Navbar";
import Signup from "./components/navbar/Signup";

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
    <Signup />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
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
