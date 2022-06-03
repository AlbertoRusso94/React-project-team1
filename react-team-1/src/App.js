import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
