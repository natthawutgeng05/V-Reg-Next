import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CarHero from '../components/car-hero'
import CarDetailsTransfer from '../components/car-details-transfer'
import Footer from '../components/footer'

const VehicleRegistrationTransfer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="vehicle-registration-transfer-container">
        <Head>
          <title>VehicleRegistrationTransfer - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:title"
            content="VehicleRegistrationTransfer - V-REG"
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
        <Header rootClassName="headerroot-class-name1"></Header>
        <div className="vehicle-registration-transfer-manage-section">
          <CarHero
            rootClassName="car-heroroot-class-name5"
            scientificName1={
              <Fragment>
                <span className="vehicle-registration-transfer-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_hTUCDe'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName11={
              <Fragment>
                <span className="vehicle-registration-transfer-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_akzSRT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName12={
              <Fragment>
                <span className="vehicle-registration-transfer-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QrlB6M'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName111={
              <Fragment>
                <span className="vehicle-registration-transfer-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mHsoYb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName112={
              <Fragment>
                <span className="vehicle-registration-transfer-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZP8kZT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName1111={
              <Fragment>
                <span className="vehicle-registration-transfer-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mGsry2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarHero>
          <CarDetailsTransfer
            text1={
              <Fragment>
                <span className="vehicle-registration-transfer-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gInTM-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="vehicle-registration-transfer-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7-lDpm'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text22={
              <Fragment>
                <span className="vehicle-registration-transfer-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_76cRD_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button4={
              <Fragment>
                <span className="vehicle-registration-transfer-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xOh_u4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="vehicle-registration-transfer-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_k3nxFU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text212={
              <Fragment>
                <span className="vehicle-registration-transfer-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BRSrvW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button41={
              <Fragment>
                <span className="vehicle-registration-transfer-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_m6Figs'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="vehicle-registration-transfer-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wq3BvI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="vehicle-registration-transfer-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oderWl'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2112={
              <Fragment>
                <span className="vehicle-registration-transfer-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SEUyV0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="vehicle-registration-transfer-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MDhQtb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21112={
              <Fragment>
                <span className="vehicle-registration-transfer-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AO3-K1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text211112={
              <Fragment>
                <span className="vehicle-registration-transfer-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NVX65_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2111112={
              <Fragment>
                <span className="vehicle-registration-transfer-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_igw47i'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21111111={
              <Fragment>
                <span className="vehicle-registration-transfer-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JsOfv6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="car-details-transferroot-class-name"
          ></CarDetailsTransfer>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="vehicle-registration-transfer-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_62Jyfg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
      </div>
      <style jsx>
        {`
          .vehicle-registration-transfer-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .vehicle-registration-transfer-manage-section {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: column;
          }
          .vehicle-registration-transfer-text10 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text11 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text12 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text13 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text14 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text15 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text16 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text17 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .vehicle-registration-transfer-text18 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text19 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text20 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text21 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text22 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text23 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text24 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text25 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text26 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text27 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text28 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text29 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text30 {
            display: inline-block;
          }
          .vehicle-registration-transfer-text31 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .vehicle-registration-transfer-manage-section {
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 991px) {
            .vehicle-registration-transfer-manage-section {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .vehicle-registration-transfer-manage-section {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .vehicle-registration-transfer-manage-section {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 390px) {
            .vehicle-registration-transfer-manage-section {
              margin-top: var(--dl-layout-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default VehicleRegistrationTransfer

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
