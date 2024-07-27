import Home from './pages/Home';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
// import Publications from './pages/Publications';
import Gallery from './pages/Gallery';
import Conference from './pages/Conference';
import Publications from './components/publication';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/publications' element={<Publications />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/conf' element={<Conference/>}></Route>
        
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
