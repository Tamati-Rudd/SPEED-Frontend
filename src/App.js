import { Route, Routes, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ViewArticles from './pages/ViewArticles';
import SubmitArticle from './pages/SubmitArticle';
<<<<<<< Updated upstream
import Moderator from './pages/ModerateArticle';
=======
import ModerateArticle from './pages/ModeratorArticle';
>>>>>>> Stashed changes
import './App.css';
import ModerateArticle from './pages/ModerateArticle';

function App() {
  return (
    <BrowserRouter>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <ul className="header">
              <li><NavLink exact to = "/">Home</NavLink></li>
              <li><NavLink exact to = "/submit">Submit Article</NavLink></li>
              <li><NavLink exact to = "/articles">Articles</NavLink></li>
<<<<<<< Updated upstream
              <li><NavLink exact to = "/moderatearticle">Moderator</NavLink></li>
=======
              <li><NavLink exact to = "/moderateArticle">Moderate Articles</NavLink></li>
>>>>>>> Stashed changes
            </ul>
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path="/articles" element={<ViewArticles/>}/>
              <Route exact path="/submit" element={<SubmitArticle/>}/>
              <Route exact path="/moderateArticle" element={<ModerateArticle/>}/>
              <Route exact path="/404" element={<NotFound/>}/>
              <Route path="*" element={<Navigate to="/404" replace />}/>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
  );
<<<<<<< Updated upstream
}

export default App;
=======
}
>>>>>>> Stashed changes
