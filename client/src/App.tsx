/*
************************************************************
*                                                          *
*   Flowhooks Software - All Rights Reserved               *
*          (c) 2025 Felipe Cezar Zwerchowski Paz LTDA.     *
*                                                          *
*  This software is proprietary.                           *
*  Unauthorized use, reproduction, or distribution is      *
*  strictly prohibited.                                    *
*                                                          *
*  Author: Felipe Cezar Paz (git@felipecezar.com)          *
*  File:                                                   *
*  Description:                                            *
*                                                          *
************************************************************
*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home'; // Import the Home component

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set up the home route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
