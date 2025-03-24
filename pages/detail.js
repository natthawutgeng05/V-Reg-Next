import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CarHero from '../components/car-hero'
import CarDetailsdetails from '../components/car-detailsdetails'
import Footer from '../components/footer'

const Detail = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="detail-container">
        <Head>
          <title>Detail - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="Detail - V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name8"></Header>
        <div className="detail-research-content">
          <CarHero
            scientificName1={
              <Fragment>
                <span className="detail-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_aCh-re'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName11={
              <Fragment>
                <span className="detail-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_hV8H6n'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName12={
              <Fragment>
                <span className="detail-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bSO4DC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName111={
              <Fragment>
                <span className="detail-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_J4SCIx'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName112={
              <Fragment>
                <span className="detail-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_blEFio'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName1111={
              <Fragment>
                <span className="detail-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_G5WCC-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarHero>
          <CarDetailsdetails
            text3={
              <Fragment>
                <span className="detail-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lhXXNh'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="detail-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_l0Bi5j'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text22={
              <Fragment>
                <span className="detail-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xxrWIs'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button4={
              <Fragment>
                <span className="detail-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_i4CJcG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="detail-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rSF9pP'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text212={
              <Fragment>
                <span className="detail-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_R2yF-7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button41={
              <Fragment>
                <span className="detail-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Wv3DhM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="detail-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jZ4X-4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="detail-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_f7PA79'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2112={
              <Fragment>
                <span className="detail-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IrJ-qJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="detail-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-3s7pj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading21={
              <Fragment>
                <span className="detail-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Q4iWQI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21112={
              <Fragment>
                <span className="detail-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7jE5_r'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading111={
              <Fragment>
                <span className="detail-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_a6c07_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading211={
              <Fragment>
                <span className="detail-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TqYMFg'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text211112={
              <Fragment>
                <span className="detail-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zwhlTZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1111={
              <Fragment>
                <span className="detail-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_H6yV1l'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2111={
              <Fragment>
                <span className="detail-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EH8LhO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2111112={
              <Fragment>
                <span className="detail-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MJpfI2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21111111={
              <Fragment>
                <span className="detail-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WeyOn6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="car-detailsdetailsroot-class-name1"
            textinputPlaceholder="ทะเบียนรถ"
          ></CarDetailsdetails>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="detail-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a5kWJQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name7"
        ></Footer>
      </div>
      <style jsx>
        {`
          .detail-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .detail-research-content {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: column;
          }
          .detail-text10 {
            display: inline-block;
          }
          .detail-text11 {
            display: inline-block;
          }
          .detail-text12 {
            display: inline-block;
          }
          .detail-text13 {
            display: inline-block;
          }
          .detail-text14 {
            display: inline-block;
          }
          .detail-text15 {
            display: inline-block;
          }
          .detail-text16 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .detail-text17 {
            display: inline-block;
          }
          .detail-text18 {
            display: inline-block;
          }
          .detail-text19 {
            display: inline-block;
          }
          .detail-text20 {
            display: inline-block;
          }
          .detail-text21 {
            display: inline-block;
          }
          .detail-text22 {
            display: inline-block;
          }
          .detail-text23 {
            display: inline-block;
          }
          .detail-text24 {
            display: inline-block;
          }
          .detail-text25 {
            display: inline-block;
          }
          .detail-text26 {
            display: inline-block;
          }
          .detail-text27 {
            display: inline-block;
          }
          .detail-text28 {
            display: inline-block;
          }
          .detail-text29 {
            display: inline-block;
          }
          .detail-text30 {
            display: inline-block;
          }
          .detail-text31 {
            display: inline-block;
          }
          .detail-text32 {
            display: inline-block;
          }
          .detail-text33 {
            display: inline-block;
          }
          .detail-text34 {
            display: inline-block;
          }
          .detail-text35 {
            display: inline-block;
          }
          .detail-text36 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .detail-research-content {
              width: 100%;
              overflow: scroll;
              max-width: 100%;
            }
          }
          @media (max-width: 991px) {
            .detail-research-content {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .detail-research-content {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .detail-research-content {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 390px) {
            .detail-research-content {
              height: 1967px;
              margin-top: 204px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Detail

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
