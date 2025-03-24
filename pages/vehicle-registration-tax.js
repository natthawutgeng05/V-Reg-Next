import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CarHero from '../components/car-hero'
import CarDetailstax from '../components/car-detailstax'
import Footer from '../components/footer'

const VehicleRegistrationTax = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="vehicle-registration-tax-container">
        <Head>
          <title>VehicleRegistrationTax - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="VehicleRegistrationTax - V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name6"></Header>
        <div className="vehicle-registration-tax-manage-section">
          <CarHero
            rootClassName="car-heroroot-class-name2"
            scientificName1={
              <Fragment>
                <span className="vehicle-registration-tax-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7Ds52y'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName11={
              <Fragment>
                <span className="vehicle-registration-tax-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6aDzCy'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName12={
              <Fragment>
                <span className="vehicle-registration-tax-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VRfFNJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName111={
              <Fragment>
                <span className="vehicle-registration-tax-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Vhx8y4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName112={
              <Fragment>
                <span className="vehicle-registration-tax-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4Y-e98'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName1111={
              <Fragment>
                <span className="vehicle-registration-tax-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zo0umE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarHero>
          <CarDetailstax
            text1={
              <Fragment>
                <span className="vehicle-registration-tax-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_e99jxS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="vehicle-registration-tax-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xd-ycb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text22={
              <Fragment>
                <span className="vehicle-registration-tax-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ugC17r'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button4={
              <Fragment>
                <span className="vehicle-registration-tax-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3gEbUI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text212={
              <Fragment>
                <span className="vehicle-registration-tax-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vHxlvd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button41={
              <Fragment>
                <span className="vehicle-registration-tax-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GdZyyO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="vehicle-registration-tax-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_b3m2ex'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading3={
              <Fragment>
                <span className="vehicle-registration-tax-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_H7OTHd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2112={
              <Fragment>
                <span className="vehicle-registration-tax-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_s4ioLJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="vehicle-registration-tax-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_q0qVtr'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading12={
              <Fragment>
                <span className="vehicle-registration-tax-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QEeuOi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading21={
              <Fragment>
                <span className="vehicle-registration-tax-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Kftdiw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21112={
              <Fragment>
                <span className="vehicle-registration-tax-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_a-ZL0d'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading111={
              <Fragment>
                <span className="vehicle-registration-tax-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7_nNc2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading211={
              <Fragment>
                <span className="vehicle-registration-tax-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lGsyoq'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text211112={
              <Fragment>
                <span className="vehicle-registration-tax-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_emRQtU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1111={
              <Fragment>
                <span className="vehicle-registration-tax-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qlZr3u'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2111={
              <Fragment>
                <span className="vehicle-registration-tax-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5BysAw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2111112={
              <Fragment>
                <span className="vehicle-registration-tax-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tzWlUf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11111={
              <Fragment>
                <span className="vehicle-registration-tax-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1k_Y9O'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21111111={
              <Fragment>
                <span className="vehicle-registration-tax-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LmIcFJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="car-detailstaxroot-class-name"
          ></CarDetailstax>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="vehicle-registration-tax-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MhTYEI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name5"
        ></Footer>
      </div>
      <style jsx>
        {`
          .vehicle-registration-tax-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .vehicle-registration-tax-manage-section {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: column;
          }
          .vehicle-registration-tax-text10 {
            display: inline-block;
          }
          .vehicle-registration-tax-text11 {
            display: inline-block;
          }
          .vehicle-registration-tax-text12 {
            display: inline-block;
          }
          .vehicle-registration-tax-text13 {
            display: inline-block;
          }
          .vehicle-registration-tax-text14 {
            display: inline-block;
          }
          .vehicle-registration-tax-text15 {
            display: inline-block;
          }
          .vehicle-registration-tax-text16 {
            display: inline-block;
          }
          .vehicle-registration-tax-text17 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .vehicle-registration-tax-text18 {
            display: inline-block;
          }
          .vehicle-registration-tax-text19 {
            display: inline-block;
          }
          .vehicle-registration-tax-text20 {
            display: inline-block;
          }
          .vehicle-registration-tax-text21 {
            display: inline-block;
          }
          .vehicle-registration-tax-text22 {
            display: inline-block;
          }
          .vehicle-registration-tax-text23 {
            display: inline-block;
          }
          .vehicle-registration-tax-text24 {
            display: inline-block;
          }
          .vehicle-registration-tax-text25 {
            display: inline-block;
          }
          .vehicle-registration-tax-text26 {
            display: inline-block;
          }
          .vehicle-registration-tax-text27 {
            display: inline-block;
          }
          .vehicle-registration-tax-text28 {
            display: inline-block;
          }
          .vehicle-registration-tax-text29 {
            display: inline-block;
          }
          .vehicle-registration-tax-text30 {
            display: inline-block;
          }
          .vehicle-registration-tax-text31 {
            display: inline-block;
          }
          .vehicle-registration-tax-text32 {
            display: inline-block;
          }
          .vehicle-registration-tax-text33 {
            display: inline-block;
          }
          .vehicle-registration-tax-text34 {
            display: inline-block;
          }
          .vehicle-registration-tax-text35 {
            display: inline-block;
          }
          .vehicle-registration-tax-text36 {
            display: inline-block;
          }
          .vehicle-registration-tax-text37 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .vehicle-registration-tax-manage-section {
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 991px) {
            .vehicle-registration-tax-manage-section {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .vehicle-registration-tax-container {
              background-image: linear-gradient(
                0deg,
                rgb(255, 255, 255) 94%,
                rgb(20, 67, 114) 91%
              );
            }
            .vehicle-registration-tax-manage-section {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .vehicle-registration-tax-manage-section {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 390px) {
            .vehicle-registration-tax-container {
              background-image: linear-gradient(
                0deg,
                rgb(255, 255, 255) 98%,
                rgb(20, 67, 114) 94%
              );
            }
            .vehicle-registration-tax-manage-section {
              margin-top: var(--dl-layout-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default VehicleRegistrationTax

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
