import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Testimonies } from './components/Testimonies';
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Services />
      <Testimonies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
