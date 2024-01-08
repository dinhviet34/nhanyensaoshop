import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Banner from './Components/Pages/Banner';
import Footer from './Components/Pages/Footer';
function App() {
  document.title = "Nhàn yến sào"
  return (
    <div className='App'>

      <div className='AppBanner'>

        <Banner></Banner>

      </div>

      <div className='AppMain'>
        <main>

         <Home></Home>

        </main>
      </div>

      <div className='AppFooter'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
