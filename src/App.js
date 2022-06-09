import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import 'antd/dist/antd.less';
import Layout from './components/UI/Layout';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.lordicon.com/xdjxvujz.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Layout>
  );
}

export default App;
