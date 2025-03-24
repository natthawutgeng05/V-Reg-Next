import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CarHero from '../components/car-hero'
import CarDetailschangeproperties from '../components/car-detailschangeproperties'
import Footer from '../components/footer'

const VehicleRegistrationChangeproperties = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="vehicle-registration-changeproperties-container">
        <Head>
          <title>VehicleRegistrationChangeproperties - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:title"
            content="VehicleRegistrationChangeproperties - V-REG"
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
        <Header rootClassName="headerroot-class-name4"></Header>
        <div className="vehicle-registration-changeproperties-manage-section">
          <CarHero
            rootClassName="car-heroroot-class-name3"
            scientificName1={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ADNWZt'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName11={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XlexU2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName12={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uuXvSd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jqdYbj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName112={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bTT14C'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName1111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_v2a1PA'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarHero>
          <CarDetailschangeproperties
            text1={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_y8Bhbd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_X6jAWF'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text22={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sLbdkJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button4={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9dWKad'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_d6DhZo'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text212={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gg3IqK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button41={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CbI25d'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_p-K895'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6G45bu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2112={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xn3OxU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tu9xOE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading21={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Nn16mq'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21112={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2NfZTB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kB20a7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading211={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_i0RSsE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text211112={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mw8DL4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5jtt_o'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WO9-VH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2111112={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yW2doc'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LJmlWz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading21111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_E3GB_J'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21111111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wMOygW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading111111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CaCmbI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading211111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VpLMUO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="car-detailschangepropertiesroot-class-name"
            heading1111111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gs6RBu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2111111={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0qT6kM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2111112={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7CNjld'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading21111121={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_slohSz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading211111211={
              <Fragment>
                <span className="vehicle-registration-changeproperties-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_96bsQY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarDetailschangeproperties>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="vehicle-registration-changeproperties-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_H1NAaj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name3"
        ></Footer>
      </div>
      <style jsx>
        {`
          .vehicle-registration-changeproperties-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .vehicle-registration-changeproperties-manage-section {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: column;
          }
          .vehicle-registration-changeproperties-text10 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text11 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text12 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text13 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text14 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text15 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text16 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text17 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .vehicle-registration-changeproperties-text18 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text19 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text20 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text21 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text22 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text23 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text24 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text25 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text26 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text27 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text28 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text29 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text30 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text31 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text32 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text33 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text34 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text35 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text36 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text37 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text38 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text39 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text40 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text41 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text42 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text43 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text44 {
            display: inline-block;
          }
          .vehicle-registration-changeproperties-text45 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .vehicle-registration-changeproperties-container {
              background-image: linear-gradient(
                0deg,
                rgb(255, 255, 255) 94%,
                rgb(20, 67, 114) 92%
              );
            }
            .vehicle-registration-changeproperties-manage-section {
              width: 100%;
              height: auto;
              max-width: 100%;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 991px) {
            .vehicle-registration-changeproperties-manage-section {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .vehicle-registration-changeproperties-manage-section {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .vehicle-registration-changeproperties-manage-section {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 390px) {
            .vehicle-registration-changeproperties-manage-section {
              margin-top: var(--dl-layout-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default VehicleRegistrationChangeproperties

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
