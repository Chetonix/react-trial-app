// import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
function App() {
  return (
   <>
   <div className="container">
     <Navbar title="TextUtils"/>
     {/* <Article /> */}
     <TextForm />
    </div>
   </>
  );
}

export default App;
