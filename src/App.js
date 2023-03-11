import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Men  from  './Components/Men/Men'
import Women from './Components/Women/Women';
import Kids from './Components/Kids/Kids';
import Miscellaneous from './Components/Miscellaneous/Miscellaneous';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Link to='/'>              </Link>
      <Link to='/Men'>           </Link>
      <Link to='/About'>         </Link>
      <Link to='/Women'>         </Link>
      <Link to='/Kids'>          </Link>
      <Link to='/Miscellaneous'> </Link>
        <Routes>
           <Route path='/'              element={<Home />} />
           <Route path='/About'         element={<About />} />
           <Route path='/Men'           element={<Men/>} />
           <Route path='/Women'         element={<Women/>} />
           <Route path='/Kids'          element={<Kids/>} />
           <Route path='/Miscellaneous' element={<Miscellaneous/>} />
        </Routes>
      
    </BrowserRouter>
       
    </div>
  );
}

export default App;

