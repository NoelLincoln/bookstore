import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Header from './components/Header';
import Books from './components/Books';
import './App.css';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="/" element={<Books />} />
    </Routes>
  </>
);

export default App;
