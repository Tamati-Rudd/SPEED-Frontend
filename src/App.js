
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ViewArticles from './pages/ViewArticles';
import SubmitArticle from './pages/SubmitArticle';
import ModerateArticle from './pages/ModerateArticle';
import './App.css';
import ResponsiveAppBar from './components/Nav';




/**
 * Main page of the SPEED application
 * @returns Page components
 */

function App() {
  return (
    <div className="App">
<ResponsiveAppBar /> 
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="articles" element={<ViewArticles/>}/>
        <Route path="submit" element={<SubmitArticle/>}/>
        <Route path="moderate" element={<ModerateArticle/>}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="/" element={<Navigate to="/home" replace />}/>
        <Route path="/*" element={<Navigate to="/404" replace />}/>
</Routes>
</div>

  )
}


export default App;
