import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Header from './components/Header';
import './App.css';

const App = () => (
  <>
    <Header />
    <Home />
  </>
);

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="/categories" element={<Categories />} />
  </Routes>
</BrowserRouter>;

export default App;
