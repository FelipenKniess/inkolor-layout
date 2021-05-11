import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Button from '../src/components/Button';
import ImgDone from './assets/images/done.svg'

import {
  ContainerInkolorPremium,
  ContainerDiscount,
  ContainerDiscoverRange
} from './style';

import {FiArrowDown} from 'react-icons/fi';
import ImgBannerInkolor from '../src/assets/images/banner-inkolor.png'

const App = () => {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <>
      <Header />
      <ContainerInkolorPremium data-aos="fade-up">
        <div>
          <span>SCHWEIZER FAMILIENUNTERNEHMEN</span>
          <h2>Inkolor Premium Toner</h2>
          <p>Seit 2007 die perfekte Drucklösung für Sie und Ihr Unternehmen</p>
          <Button icon={FiArrowDown} >KAUFE JETZT</Button>
        </div>

        <img src={ImgBannerInkolor} alt="Inkolor" />
      </ContainerInkolorPremium>

      <ContainerDiscount data-aos="fade-up">
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
          <img src={ImgDone} alt="done" />
            <span>Zertifizierte Qualität</span>
          </div>
          <div>
            <img src={ImgDone} alt="done" />
            <span>Geld-zurück - Garantie</span>
          </div>
          <div>
          <img src={ImgDone} alt="done" />
            <span>Professionelle Druckergebnisse</span>
          </div>
        </div>
      </ContainerDiscount>

      <ContainerDiscoverRange>
        <div>
          <span className="type-toner">+ 1.000 TONERSORTEN</span>
          <h2>Entdecken Sie unser komplettes Sortiment</h2>
          <strong>Wir führen über 1000 verschiedene Toner in unserem Portfolio.</strong>
          <p>
            Unsere Produkte sind 100% kompatibel zu den Druckern aller gängigen Marken und haben keinerlei Einfluss auf die Herstellergarantie des Gerätes.
          </p>
        </div>
      </ContainerDiscoverRange>
    </>
  );
}

export default App;