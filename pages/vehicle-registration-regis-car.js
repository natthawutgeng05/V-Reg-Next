import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CarHero from '../components/car-hero'
import CarDetailsregistration from '../components/car-detailsregistration'
import Footer from '../components/footer'

const VehicleRegistrationRegisCar = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="vehicle-registration-regis-car-container">
        <Head>
          <title>VehicleRegistrationRegisCar - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:title"
            content="VehicleRegistrationRegisCar - V-REG"
          />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name3"></Header>
        <div className="vehicle-registration-regis-car-manage-section">
          <CarHero
            rootClassName="car-heroroot-class-name4"
            scientificName1={
              <Fragment>
                <span className="vehicle-registration-regis-car-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_O96yVu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName11={
              <Fragment>
                <span className="vehicle-registration-regis-car-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AXYRS8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName12={
              <Fragment>
                <span className="vehicle-registration-regis-car-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1MrJn7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName111={
              <Fragment>
                <span className="vehicle-registration-regis-car-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_nzuGAV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName112={
              <Fragment>
                <span className="vehicle-registration-regis-car-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uBt-my'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName1111={
              <Fragment>
                <span className="vehicle-registration-regis-car-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GNEJVh'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarHero>
          <CarDetailsregistration
            text1={
              <Fragment>
                <span className="vehicle-registration-regis-car-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gZIYIk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="vehicle-registration-regis-car-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CJGOh9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text22={
              <Fragment>
                <span className="vehicle-registration-regis-car-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ySKr1X'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button4={
              <Fragment>
                <span className="vehicle-registration-regis-car-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oqqTck'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="vehicle-registration-regis-car-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jKOWdE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text212={
              <Fragment>
                <span className="vehicle-registration-regis-car-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mh2IBG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button41={
              <Fragment>
                <span className="vehicle-registration-regis-car-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_f1eQPl'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="vehicle-registration-regis-car-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oIpSCD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="vehicle-registration-regis-car-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xmqhxO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2112={
              <Fragment>
                <span className="vehicle-registration-regis-car-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zzF6NB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading12={
              <Fragment>
                <span className="vehicle-registration-regis-car-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3sne5H'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading21={
              <Fragment>
                <span className="vehicle-registration-regis-car-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZVzztJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21112={
              <Fragment>
                <span className="vehicle-registration-regis-car-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fr4Xh7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading211={
              <Fragment>
                <span className="vehicle-registration-regis-car-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_hWC3am'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text211112={
              <Fragment>
                <span className="vehicle-registration-regis-car-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7VxYbm'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2111={
              <Fragment>
                <span className="vehicle-registration-regis-car-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2XrzdJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2111112={
              <Fragment>
                <span className="vehicle-registration-regis-car-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8LPKOv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21111111={
              <Fragment>
                <span className="vehicle-registration-regis-car-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_r2S6zf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="car-detailsregistrationroot-class-name"
          ></CarDetailsregistration>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="vehicle-registration-regis-car-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5q6Ogv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name2"
        ></Footer>
      </div>
      <style jsx>
        {`
          .vehicle-registration-regis-car-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .vehicle-registration-regis-car-manage-section {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: column;
          }
          .vehicle-registration-regis-car-text10 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text11 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text12 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text13 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text14 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text15 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text16 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text17 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .vehicle-registration-regis-car-text18 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text19 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text20 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text21 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text22 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text23 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text24 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text25 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text26 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text27 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text28 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text29 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text30 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text31 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text32 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text33 {
            display: inline-block;
          }
          .vehicle-registration-regis-car-text34 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .vehicle-registration-regis-car-manage-section {
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 991px) {
            .vehicle-registration-regis-car-manage-section {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .vehicle-registration-regis-car-manage-section {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .vehicle-registration-regis-car-manage-section {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 390px) {
            .vehicle-registration-regis-car-manage-section {
              margin-top: var(--dl-layout-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default VehicleRegistrationRegisCar

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
