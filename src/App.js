import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Button from '../src/components/Button';
import IconContainer from '../src/components/IconContainer';

import imgIconDiscount from './assets/images/iconDiscount.svg'
import ImgDone from './assets/images/done.svg'
import ImgBannerInkolor from '../src/assets/images/banner-inkolor.png'

import ImgDiscover from '../src/assets/images/bannerDiscoverRange.png'
import ImgPhone from '../src/assets/images/phone.png'
import ImgVisit1 from '../src/assets/images/item1visit.svg'
import ImgVisit2 from '../src/assets/images/item2visit.svg'
import ImgVisit3 from '../src/assets/images/item3visit.svg'
import ImgIconVisit from '../src/assets/images/iconvisit.svg'
import ImgToner from '../src/assets/images/toner.png';


import {
  ContainerInkolorPremium,
  ContainerDiscount,
  ContainerDiscoverRange,
  ContainerVisitUs,
  ContainerToner,
  ContainerQuality
} from './style';

import {FiArrowDown} from 'react-icons/fi';


const App = () => {

  useEffect(() => {
    Aos.init({duration: 1})
  }, [])

  return (
    <>
      <Header />
      <ContainerInkolorPremium data-aos="fade-up">
        <div className="header-inkolor">
          <span>SCHWEIZER FAMILIENUNTERNEHMEN</span>
          <h2>Inkolor Premium Toner</h2>
          <p>Seit 2007 die perfekte Drucklösung für Sie und Ihr Unternehmen</p>
          <Button icon={FiArrowDown} >KAUFE JETZT</Button>
        </div>
        <div>
          <img src={ImgBannerInkolor} alt="Backgroun inkolor" />
        </div>
      </ContainerInkolorPremium>

      <ContainerDiscount data-aos="fade-up">
        <IconContainer>
          <img src={imgIconDiscount} alt="Icon Discount" />
        </IconContainer>
        <div className="title-discount">
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
        <div className="desc-discover">
          <span className="type-toner">+ 1.000 TONERSORTEN</span>
          <h2>Entdecken Sie unser komplettes Sortiment</h2>
          <strong>Wir führen über 1000 verschiedene Toner in unserem Portfolio.</strong>
          <p>
            Unsere Produkte sind 1ContainerVisitUs00% kompatibel zu den Druckern aller gängigen Marken und haben keinerlei Einfluss auf die Herstellergarantie des Gerätes.
          </p>
        </div>
        <div className="img-discover">
          <img src={ImgDiscover} alt="Image Discover" />
        </div>
      </ContainerDiscoverRange>

      <ContainerVisitUs>
        <div className="desc-visit">
          <IconContainer>
            <img src={ImgIconVisit} alt="IconVisit" />
          </IconContainer>
          <h2>Besuchen Sie uns</h2>
          <strong>Inkolor.ch ist der führende Schweizer Druckerzubehör-Shop, seit 2007 geführt von der Gründerfamilie.</strong>
          <p>
            Entdecken Sie unsere Qualitätsprodukte und den ausserordentlichen Kundenservice verbunden mit einem modernen, nutzerfreundlichen Shoperlebnis.
          </p>
        </div>
        <div className="img-phone">
          <img src={ImgPhone} ContainerToneralt="phone" />
        </div>
        <div className="carac-visit">
          <div className="item-carac">
            <span>3 Jahre Geld-zurück-Garantie</span>
            <div>
              <img src={ImgVisit1} alt="Visit 1" />
            </div>
          </div>
          <div className="item-carac">
            <span>99.8% pünktliche Lieferungen</span>
            <div>
              <img src={ImgVisit2} alt="Visit 2" />
            </div>
          </div>
          <div className="item-carac">
            <span>Sicheres und einfaches Einkaufen</span>
            <div>
              <img src={ImgVisit3} alt="Visit 3" />
            </div>
          </div>
        </div>
      </ContainerVisitUs>
      <ContainerToner>
        <img src={ImgToner} alt="Toner" />
        <div className="desc-toner">
          <span>Risikofrei und bewähr</span>
          <h2>Mit Inkolor sind Sie auf der sicheren Seite</h2>
          <div className="carac-toner">
            <div>
              <img src={ImgDone} alt="done" />
              <p>Der Gebrauch von Inkolor - Toner hat keinerlei Einfluss auf die Herstellergarantie Ihres Gerätes</p>
            </div>
            <div>
              <img src={ImgDone} alt="done" />
              <p>Unsere To nerzusammensetzungen wurden über Jahre intensiv getestet , sind speziell auf jedes Gerät abgestimmt und garantieren professionelle Resultate.</p>
            </div>
            <div>
              <img src={ImgDone} alt="done" />
              <p>Alle Inkolor-Produkte sind patentsicher</p>
            </div>
          </div>
        </div>
      </ContainerToner>

      {/* <ContainerQuality>
        <IconContainer>
          <img src={ImgIconQuality} alt="" />
        </IconContainer>
        <div className="desc-quality">
          <h2>Optimale Druckqualität</h2>
          <p>Zuverlässig und konsistent von der ersten bis zu letzten Seite.</p>
          <div className="items-quality">
            <div className="item-quality">
              <img src={ImgIconQuality1} alt="" />
              <span>Höchste Auflösung</span>
            </div>
            <div className="item-quality">
              <img src={ImgIconQuality2} alt="" />
              <span>Lichtecht</span>
            </div>
            <div className="item-quality">
              <img src={ImgIconQuality3} alt="" />
              <span>Präzise Details</span>
            </div>
            <div className="item-quality">
              <img src={ImgIconQuality4} alt="" />
              <span>Brillante Farben</span>
            </div>
          </div>
        </div>
        <div className="image-quality">
          <img src={ImgBannerQuality} alt="Quality" />
        </div>
      </ContainerQuality> */}
    </>
  );
}

export default App;