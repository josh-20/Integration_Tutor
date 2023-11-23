import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';


export default function App() {
  return (
      <Router>
          {/* <Header /> */}
          <Routes>
              <Route path="/"  element={<Home/>} />
              <Route path="/Question1" element={<Question1/>} />
              <Route path="/Question2" element={<Question2/>} />
          </Routes>
      </Router>
  );
}
