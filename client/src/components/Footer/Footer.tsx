// src/components/Footer/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="text-center">
          <h5>Correio Sesi</h5>
          <p>Desenvolvido por Felipe Cezar Paz (contato@felipecezar.com).</p>
        </div>
      </div>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} FlowHooks Software. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
