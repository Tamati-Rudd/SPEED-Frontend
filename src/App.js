import { Route, Routes, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ViewArticles from './pages/ViewArticles';
import SubmitArticle from './pages/SubmitArticle';
import ModerateArticle from './pages/ModerateArticle';
import './App.css';

/**
 * Main page of the SPEED application
 * @returns Page components
 */
function App() {
  return (
    <BrowserRouter>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <ul className="header">
              <li><NavLink exact to = "/">Home</NavLink></li>
              <li><NavLink exact to = "/submit">Submit Article</NavLink></li>
              <li><NavLink exact to = "/articles">Articles</NavLink></li>
              <li><NavLink exact to = "/moderate">Moderate Article</NavLink></li>
            </ul>
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path="/articles" element={<ViewArticles/>}/>
              <Route exact path="/submit" element={<SubmitArticle/>}/>
              <Route exact path="/moderate" element={<ModerateArticle/>}/>
              <Route exact path="/404" element={<NotFound/>}/>
              <Route exact path="/submit" element={<SubmitArticle/>}/>
              <Route path="*" element={<Navigate to="/404" replace />}/>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
  );
}

export default App;
