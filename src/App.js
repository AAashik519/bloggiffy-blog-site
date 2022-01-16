 
import './App.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './pages/Home';
import AddEditBlog from './pages/AddEditBlog';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/addblog' element={<AddEditBlog/>} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
