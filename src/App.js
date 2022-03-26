// import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import {BrowserRouter as Router, Switch, Route,
// Link } from "react-router-dom";
// import { Route, Switch } from "react-router";
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
   <>
   <Router>
   <div className="container">
     <Navbar title="TextUtils"/>
     {/* <Article /> */}
     <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text below: "/> }/>
        <Route exact path="/about" element={<About/>}/>
     </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;
