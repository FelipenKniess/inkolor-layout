import React from 'react';
import Header from './components/Header';
import {InkolorPremiumToner} from './style';
import Button from '../src/components/Button';
import {FiArrowDown} from 'react-icons/fi';

import ImgBannerInkolor from '../src/assets/images/banner-inkolor.png'
function App() {
  return (
    <>
      <Header />
      <InkolorPremiumToner>
        <div>
          <span>SCHWEIZER FAMILIENUNTERNEHMEN</span>
          <h2>Inkolor Premium Toner</h2>
          <p>Seit 2007 die perfekte Drucklösung für Sie und Ihr Unternehmen</p>
          <Button icon={FiArrowDown} >KAUFE JETZT</Button>
        </div>

        <img src={ImgBannerInkolor} alt="Inkolor" />
      </InkolorPremiumToner>
    </>
  );
}

export default App;