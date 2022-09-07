import Footer from './components/footer/Footer';
import Navbar, { RenderedNavbar } from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import 'antd/dist/antd.less';
import Layout from './components/UI/Layout';
import Protected from './pages/Protected'
import { useState } from 'react'


function App() {
  const [stored, setStored] = useState(null);
  return (
    <Layout>
      <BrowserRouter>
        <RenderedNavbar stored={stored} setStored={setStored} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<Protected user={stored}/>}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Layout>
  );
}

export default App;
