import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CreateNewCar from '../components/create-new-car'
import Footer from '../components/footer'

const EditCarDetail = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="edit-car-detail-container1">
        <Head>
          <title>EditCarDetail - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="EditCarDetail - V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name9"></Header>
        <div className="edit-car-detail-container2">
          <div className="edit-car-detail-container3">
            <h1>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Text_o__uhg'),
                }}
              ></span>
            </h1>
            <CreateNewCar
              text={
                <Fragment>
                  <span className="edit-car-detail-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_OX5hP4'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="edit-car-detail-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dzTEgV'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="edit-car-detail-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ROzF6c'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text11={
                <Fragment>
                  <span className="edit-car-detail-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_o3t6mi'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text14={
                <Fragment>
                  <span className="edit-car-detail-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lG4vBc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text15={
                <Fragment>
                  <span className="edit-car-detail-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_CJ3nIK'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text23={
                <Fragment>
                  <span className="edit-car-detail-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_VC5XgH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              button4={
                <Fragment>
                  <span className="edit-car-detail-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__cAPL_'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text113={
                <Fragment>
                  <span className="edit-car-detail-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_E1WuMS'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text141={
                <Fragment>
                  <span className="edit-car-detail-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Rq4edj'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text151={
                <Fragment>
                  <span className="edit-car-detail-text21">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ERV9bH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text231={
                <Fragment>
                  <span className="edit-car-detail-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_boYLs5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              button41={
                <Fragment>
                  <span className="edit-car-detail-text23">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_iXuoVW'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1131={
                <Fragment>
                  <span className="edit-car-detail-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-a9dFR'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1411={
                <Fragment>
                  <span className="edit-car-detail-text25">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_nhR_7L'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1511={
                <Fragment>
                  <span className="edit-car-detail-text26">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UwMTxw'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2311={
                <Fragment>
                  <span className="edit-car-detail-text27">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_P3scq2'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text11311={
                <Fragment>
                  <span className="edit-car-detail-text28">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_bCHfc7'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text14111={
                <Fragment>
                  <span className="edit-car-detail-text29">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tePDF4'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text15111={
                <Fragment>
                  <span className="edit-car-detail-text30">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_H-O7oT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text23111={
                <Fragment>
                  <span className="edit-car-detail-text31">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Q8j6Ig'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text141111={
                <Fragment>
                  <span className="edit-car-detail-text32">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_BbHExm'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text141112={
                <Fragment>
                  <span className="edit-car-detail-text33">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_51jWvz'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text141113={
                <Fragment>
                  <span className="edit-car-detail-text34">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vrZ1hO'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text141114={
                <Fragment>
                  <span className="edit-car-detail-text35">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MNj0Kb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text141115={
                <Fragment>
                  <span className="edit-car-detail-text36">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2114d8'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text151112={
                <Fragment>
                  <span className="edit-car-detail-text37">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-o2b7U'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text151114={
                <Fragment>
                  <span className="edit-car-detail-text38">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0NZieo'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text151115={
                <Fragment>
                  <span className="edit-car-detail-text39">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_GHZ0ph'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text231112={
                <Fragment>
                  <span className="edit-car-detail-text40">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_yow2XS'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text231114={
                <Fragment>
                  <span className="edit-car-detail-text41">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vxCB76'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text231115={
                <Fragment>
                  <span className="edit-car-detail-text42">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tuz5We'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1131112={
                <Fragment>
                  <span className="edit-car-detail-text43">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_nV2BOD'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1131114={
                <Fragment>
                  <span className="edit-car-detail-text44">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kAuSYV'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1411111={
                <Fragment>
                  <span className="edit-car-detail-text45">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hUYi79'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1411121={
                <Fragment>
                  <span className="edit-car-detail-text46">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wdE9KG'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1411122={
                <Fragment>
                  <span className="edit-car-detail-text47">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vmEi30'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1511121={
                <Fragment>
                  <span className="edit-car-detail-text48">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ib4Nti'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1511122={
                <Fragment>
                  <span className="edit-car-detail-text49">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_TwiZoY'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2311121={
                <Fragment>
                  <span className="edit-car-detail-text50">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_BVzAai'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2311122={
                <Fragment>
                  <span className="edit-car-detail-text51">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_JJzMnh'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text11311121={
                <Fragment>
                  <span className="edit-car-detail-text52">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tZJZki'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text11311122={
                <Fragment>
                  <span className="edit-car-detail-text53">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_OrQ5eJ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text14111111={
                <Fragment>
                  <span className="edit-car-detail-text54">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DJ8RzP'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text14111221={
                <Fragment>
                  <span className="edit-car-detail-text55">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5GGBJi'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text23111221={
                <Fragment>
                  <span className="edit-car-detail-text56">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_LmrOQL'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              rootClassName="create-new-carroot-class-name1"
              text141111121={
                <Fragment>
                  <span className="edit-car-detail-text57">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_AoiBoL'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></CreateNewCar>
          </div>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="edit-car-detail-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GovW5C'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name8"
        ></Footer>
      </div>
      <style jsx>
        {`
          .edit-car-detail-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .edit-car-detail-container2 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            overflow: scroll;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: column;
          }
          .edit-car-detail-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .edit-car-detail-text11 {
            display: inline-block;
          }
          .edit-car-detail-text12 {
            display: inline-block;
          }
          .edit-car-detail-text13 {
            display: inline-block;
          }
          .edit-car-detail-text14 {
            display: inline-block;
          }
          .edit-car-detail-text15 {
            display: inline-block;
          }
          .edit-car-detail-text16 {
            display: inline-block;
          }
          .edit-car-detail-text17 {
            display: inline-block;
          }
          .edit-car-detail-text18 {
            display: inline-block;
          }
          .edit-car-detail-text19 {
            display: inline-block;
          }
          .edit-car-detail-text20 {
            display: inline-block;
          }
          .edit-car-detail-text21 {
            display: inline-block;
          }
          .edit-car-detail-text22 {
            display: inline-block;
          }
          .edit-car-detail-text23 {
            display: inline-block;
          }
          .edit-car-detail-text24 {
            display: inline-block;
          }
          .edit-car-detail-text25 {
            display: inline-block;
          }
          .edit-car-detail-text26 {
            display: inline-block;
          }
          .edit-car-detail-text27 {
            display: inline-block;
          }
          .edit-car-detail-text28 {
            display: inline-block;
          }
          .edit-car-detail-text29 {
            display: inline-block;
          }
          .edit-car-detail-text30 {
            display: inline-block;
          }
          .edit-car-detail-text31 {
            display: inline-block;
          }
          .edit-car-detail-text32 {
            display: inline-block;
          }
          .edit-car-detail-text33 {
            display: inline-block;
          }
          .edit-car-detail-text34 {
            display: inline-block;
          }
          .edit-car-detail-text35 {
            display: inline-block;
          }
          .edit-car-detail-text36 {
            display: inline-block;
          }
          .edit-car-detail-text37 {
            display: inline-block;
          }
          .edit-car-detail-text38 {
            display: inline-block;
          }
          .edit-car-detail-text39 {
            display: inline-block;
          }
          .edit-car-detail-text40 {
            display: inline-block;
          }
          .edit-car-detail-text41 {
            display: inline-block;
          }
          .edit-car-detail-text42 {
            display: inline-block;
          }
          .edit-car-detail-text43 {
            display: inline-block;
          }
          .edit-car-detail-text44 {
            display: inline-block;
          }
          .edit-car-detail-text45 {
            display: inline-block;
          }
          .edit-car-detail-text46 {
            display: inline-block;
          }
          .edit-car-detail-text47 {
            display: inline-block;
          }
          .edit-car-detail-text48 {
            display: inline-block;
          }
          .edit-car-detail-text49 {
            display: inline-block;
          }
          .edit-car-detail-text50 {
            display: inline-block;
          }
          .edit-car-detail-text51 {
            display: inline-block;
          }
          .edit-car-detail-text52 {
            display: inline-block;
          }
          .edit-car-detail-text53 {
            display: inline-block;
          }
          .edit-car-detail-text54 {
            display: inline-block;
          }
          .edit-car-detail-text55 {
            display: inline-block;
          }
          .edit-car-detail-text56 {
            display: inline-block;
          }
          .edit-car-detail-text57 {
            display: inline-block;
          }
          .edit-car-detail-text58 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .edit-car-detail-container2 {
              width: 100%;
            }
            .edit-car-detail-container3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default EditCarDetail

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
