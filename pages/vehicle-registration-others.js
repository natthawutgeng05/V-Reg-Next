import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CarHero from '../components/car-hero'
import CarDetailsother from '../components/car-detailsother'
import Footer from '../components/footer'

const VehicleRegistrationOthers = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="vehicle-registration-others-container">
        <Head>
          <title>VehicleRegistrationOthers - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:title"
            content="VehicleRegistrationOthers - V-REG"
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
        <Header rootClassName="headerroot-class-name18"></Header>
        <div className="vehicle-registration-others-manage-section">
          <CarHero
            rootClassName="car-heroroot-class-name6"
            scientificName1={
              <Fragment>
                <span className="vehicle-registration-others-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IFlv9Y'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName11={
              <Fragment>
                <span className="vehicle-registration-others-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tIuOIc'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName12={
              <Fragment>
                <span className="vehicle-registration-others-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_c9TABz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName111={
              <Fragment>
                <span className="vehicle-registration-others-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tSfSfL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName112={
              <Fragment>
                <span className="vehicle-registration-others-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_w-gK5w'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName1111={
              <Fragment>
                <span className="vehicle-registration-others-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HYUcm0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarHero>
          <CarDetailsother
            text1={
              <Fragment>
                <span className="vehicle-registration-others-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jcJ1Ng'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="vehicle-registration-others-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__k7ld0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text22={
              <Fragment>
                <span className="vehicle-registration-others-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jMFMa0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button4={
              <Fragment>
                <span className="vehicle-registration-others-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oP-tgF'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="vehicle-registration-others-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_F_es10'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text212={
              <Fragment>
                <span className="vehicle-registration-others-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LTcmXM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button41={
              <Fragment>
                <span className="vehicle-registration-others-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4YkYzv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="vehicle-registration-others-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Lbidz2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="vehicle-registration-others-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8Gan-k'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2112={
              <Fragment>
                <span className="vehicle-registration-others-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JekjU4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="vehicle-registration-others-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_exPsxN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading21={
              <Fragment>
                <span className="vehicle-registration-others-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yauGtg'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21112={
              <Fragment>
                <span className="vehicle-registration-others-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DWv1Wj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading111={
              <Fragment>
                <span className="vehicle-registration-others-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_msqNrK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading211={
              <Fragment>
                <span className="vehicle-registration-others-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_emw_9S'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text211112={
              <Fragment>
                <span className="vehicle-registration-others-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ERVreO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1111={
              <Fragment>
                <span className="vehicle-registration-others-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZiT0ks'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2111112={
              <Fragment>
                <span className="vehicle-registration-others-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jqUGqJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21111111={
              <Fragment>
                <span className="vehicle-registration-others-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_hHMsda'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="car-detailsotherroot-class-name"
          ></CarDetailsother>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="vehicle-registration-others-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ja6deX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name18"
        ></Footer>
      </div>
      <style jsx>
        {`
          .vehicle-registration-others-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .vehicle-registration-others-manage-section {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: column;
          }
          .vehicle-registration-others-text10 {
            display: inline-block;
          }
          .vehicle-registration-others-text11 {
            display: inline-block;
          }
          .vehicle-registration-others-text12 {
            display: inline-block;
          }
          .vehicle-registration-others-text13 {
            display: inline-block;
          }
          .vehicle-registration-others-text14 {
            display: inline-block;
          }
          .vehicle-registration-others-text15 {
            display: inline-block;
          }
          .vehicle-registration-others-text16 {
            display: inline-block;
          }
          .vehicle-registration-others-text17 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .vehicle-registration-others-text18 {
            display: inline-block;
          }
          .vehicle-registration-others-text19 {
            display: inline-block;
          }
          .vehicle-registration-others-text20 {
            display: inline-block;
          }
          .vehicle-registration-others-text21 {
            display: inline-block;
          }
          .vehicle-registration-others-text22 {
            display: inline-block;
          }
          .vehicle-registration-others-text23 {
            display: inline-block;
          }
          .vehicle-registration-others-text24 {
            display: inline-block;
          }
          .vehicle-registration-others-text25 {
            display: inline-block;
          }
          .vehicle-registration-others-text26 {
            display: inline-block;
          }
          .vehicle-registration-others-text27 {
            display: inline-block;
          }
          .vehicle-registration-others-text28 {
            display: inline-block;
          }
          .vehicle-registration-others-text29 {
            display: inline-block;
          }
          .vehicle-registration-others-text30 {
            display: inline-block;
          }
          .vehicle-registration-others-text31 {
            display: inline-block;
          }
          .vehicle-registration-others-text32 {
            display: inline-block;
          }
          .vehicle-registration-others-text33 {
            display: inline-block;
          }
          .vehicle-registration-others-text34 {
            display: inline-block;
          }
          .vehicle-registration-others-text35 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .vehicle-registration-others-manage-section {
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 991px) {
            .vehicle-registration-others-manage-section {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .vehicle-registration-others-manage-section {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .vehicle-registration-others-manage-section {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 390px) {
            .vehicle-registration-others-manage-section {
              margin-top: var(--dl-layout-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default VehicleRegistrationOthers

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
