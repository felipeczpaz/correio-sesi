// src/components/Navbar/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">Correio Sesi</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto"> {/* Use me-auto to push items to the right */}
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/" onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about" onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/contact" onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}>Contact</Link>
            </li>
          </ul>
          <ul className="navbar-nav"> {/* New list for Login and Register */}
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/login" onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/register" onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
