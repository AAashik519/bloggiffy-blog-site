 
import './App.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './pages/Home';
import  Blog from './pages/Blog';
import AddEditBlog from './pages/AddEditBlog';
import  NotFound from './pages/NotFound';
import  About from './pages/About';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <ToastContainer />
        
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/addblog' element={<AddEditBlog/>} />
          <Route path='/editBlog/:id' element={<AddEditBlog/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
