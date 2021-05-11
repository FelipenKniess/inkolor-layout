import React from 'react';
import Header from './components/Header';
import {
  ContainerInkolorPremium,
  ContainerDiscount
} from './style';

import Button from '../src/components/Button';
import {FiArrowDown} from 'react-icons/fi';

import ImgBannerInkolor from '../src/assets/images/banner-inkolor.png'
function App() {
  return (
    <>
      <Header />
      <ContainerInkolorPremium>
        <div>
          <span>SCHWEIZER FAMILIENUNTERNEHMEN</span>
          <h2>Inkolor Premium Toner</h2>
          <p>Seit 2007 die perfekte Drucklösung für Sie und Ihr Unternehmen</p>
          <Button icon={FiArrowDown} >KAUFE JETZT</Button>
        </div>

        <img src={ImgBannerInkolor} alt="Inkolor" />
      </ContainerInkolorPremium>

      <ContainerDiscount>
        <div>
          <span className="contact">ZÄHLEN SIE AUF UNSERE</span>
          <h2>Vorteile</h2>
          <p>
            Sparen Sie bis zu 70% Ihrer Druckkosten ohne Qualitätseinbusse.
            Inkolor-Toner ist die ideale Wahl für alle Ihre Geräte.
          </p>
          <div className="porcentage-discount">70%</div>
        </div>
        <div className="desc-discount">
          <div>
            <img src="" alt="" />
            <span>Zertifizierte Qualität</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>Geld-zurück - Garantie</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>Professionelle Druckergebnisse</span>
          </div>
        </div>

      </ContainerDiscount>
    </>
  );
}

export default App;