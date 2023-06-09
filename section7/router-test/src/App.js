import './App.css';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import './App.css';
import Layout from './Layout';
import BookList from './pages/BookList';
import BookIndex from './pages/BookIndex';
import BookDetail from './pages/BookDetail';

function App() {
  const isAuthenticated = true;

  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/information">information</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav> */}
      {/* <a href="information">aタグです</a> */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/auth"
            element={isAuthenticated ? <Navigate to="/contact" /> : <Home />}
          />

          <Route path="/book-list" element={<BookList />}>
            <Route index element={<BookIndex />} />
            <Route path=":id" element={<BookDetail />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
