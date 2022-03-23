// import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
function App() {
  return (
   <>
     <Navbar title="TextUtils"/>
     <Article />
     <TextForm />
   </>
  );
}

export default App;
