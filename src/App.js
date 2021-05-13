import React, {useEffect, useRef, useCallback} from 'react';
import Aos from 'aos';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import 'aos/dist/aos.css';
import Header from './components/Header';
import Button from '../src/components/Button';
import IconContainer from '../src/components/IconContainer';
import Input from '../src/components/Input'

import getValidationErrors from './utils/getValidationErrors';

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
import ImgBePart from '../src/assets/images/backgroundBePart.png';

import {
  ContainerInkolorPremium,
  ContainerDiscount,
  ContainerDiscoverRange,
  ContainerVisitUs,
  ContainerToner,
  ContainerBePartOf
} from './style';

import {FiArrowDown} from 'react-icons/fi';

const App = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  const formRef = useRef(null)
  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current.setErrors({})

      const schema = Yup.object().shape({
        firma: Yup.string().required(
          'Firma obrigatória'
        ),
        nome: Yup.string().required('Nome Obrigatório'),
        email: Yup.string().required('Email Obrigatório'),
      })

      await schema.validate(data, {
        abortEarly: false
      })

      alert('Cadastrado!');
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current.setErrors(errors)
    }
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

      <ContainerDiscoverRange data-aos="fade-up">
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

      <ContainerVisitUs data-aos="fade-up">
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
            <span>99.8% pünktli""che Lieferungen</span>
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
      <ContainerToner data-aos="fade-up">
        <div className="img-tonner">
          <img src={ImgToner} alt="Toner" />
        </div>
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

      <ContainerBePartOf data-aos="fade-up">
        <div className="desc-bepart">
          <h2>Werden Sie Teil unseres Erfolgs</h2>
          <p>Wir suchen ständig nach neuen Vertriebspartnern mit Erfahrung im Druckerzubehörmarkt.</p>
          <strong>Kontaktieren Sie uns!</strong>
          <img src={ImgBePart} alt="inkolor" />
        </div>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="firma">Firma:</label>
          <Input name="firma" type="text"/>

          <label htmlFor="nome">Nome:</label>
          <Input name="nome" type="text"/>

          <label htmlFor="email">email:</label>
          <Input name="email" type="email"/>

          <button type="submit">
            Enviar
          </button>
        </Form>
      </ContainerBePartOf>
    </>
  );
}

export default App;