import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom';
import  whatsappImg from './components/imgs/whatsapp.webp';
import About from './pages/AboutUs/About';
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
        <Route exact path='/' element={<Home/>}/>   
        <Route exact path='/aboutus' element={<About/>}/>  
        <Route exact path='/contact' element={<Contact/>}/>  
         
       </Routes>
       <Footer/>
        <div className="image-container">
          <img src={whatsappImg} alt="" />
        </div>
    </div>
  );
}

export default App;
