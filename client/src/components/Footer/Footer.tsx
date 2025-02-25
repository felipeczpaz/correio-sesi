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
