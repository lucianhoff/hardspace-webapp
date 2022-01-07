<<<<<<< HEAD
import "./App.css";
import Navigation from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <header >
        <Navigation />
        
      </header>
    </div>
=======
//components
import Footer from '../components/Footer'

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
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
>>>>>>> 5b8548def178c371abb536610edae710ef9e42cf
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
