import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import SidebarTax from '../components/sidebar-tax'
import RegistratonRegisCarTable from '../components/registraton-regis-car-table'
import Footer from '../components/footer'

const RegistrationRegisCar = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="registration-regis-car-container1">
        <Head>
          <title>RegistrationRegisCar - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="RegistrationRegisCar - V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name10"></Header>
        <div className="registration-regis-car-container2">
          <SidebarTax
            heading={
              <Fragment>
                <span className="registration-regis-car-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_eIrl0k'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text102={
              <Fragment>
                <span className="registration-regis-car-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8Alwbf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1012={
              <Fragment>
                <span className="registration-regis-car-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Nfsv8F'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text10112={
              <Fragment>
                <span className="registration-regis-car-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CXIRBi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text101112={
              <Fragment>
                <span className="registration-regis-car-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rpCpT5'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1011112={
              <Fragment>
                <span className="registration-regis-car-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EY3osH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text10111111={
              <Fragment>
                <span className="registration-regis-car-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9Wi3C2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="sidebar-taxroot-class-name3"
          ></SidebarTax>
          <RegistratonRegisCarTable
            text={
              <Fragment>
                <span className="registration-regis-car-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IpcQlf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="registration-regis-car-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AT1g8m'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="registration-regis-car-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_aP4ig_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text11={
              <Fragment>
                <span className="registration-regis-car-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YftRbR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button1={
              <Fragment>
                <span className="registration-regis-car-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_M9oEA1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2={
              <Fragment>
                <span className="registration-regis-car-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IJEkq9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button3={
              <Fragment>
                <span className="registration-regis-car-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3aQpWz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button21={
              <Fragment>
                <span className="registration-regis-car-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BcBApP'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211={
              <Fragment>
                <span className="registration-regis-car-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OgRKAW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111={
              <Fragment>
                <span className="registration-regis-car-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6OGl5F'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button21111={
              <Fragment>
                <span className="registration-regis-car-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ALwkf_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber11={
              <Fragment>
                <span className="registration-regis-car-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qrqST6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211111={
              <Fragment>
                <span className="registration-regis-car-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yZyJF9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber111={
              <Fragment>
                <span className="registration-regis-car-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RIDwob'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111111={
              <Fragment>
                <span className="registration-regis-car-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_iGNq3V'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1113={
              <Fragment>
                <span className="registration-regis-car-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wTjEcR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1114={
              <Fragment>
                <span className="registration-regis-car-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Ik8VW1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1115={
              <Fragment>
                <span className="registration-regis-car-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gojY3y'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1116={
              <Fragment>
                <span className="registration-regis-car-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Y-rfS3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="registraton-regis-car-tableroot-class-name"
            button21111111={
              <Fragment>
                <span className="registration-regis-car-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FDOqVp'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211111111={
              <Fragment>
                <span className="registration-regis-car-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-k2IBN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName11={
              <Fragment>
                <span className="registration-regis-car-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8upp4x'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine12={
              <Fragment>
                <span className="registration-regis-car-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0Q7DsK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111111111={
              <Fragment>
                <span className="registration-regis-car-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xpFq4G'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName111={
              <Fragment>
                <span className="registration-regis-car-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qeP8j-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112={
              <Fragment>
                <span className="registration-regis-car-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_okVw48'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine121={
              <Fragment>
                <span className="registration-regis-car-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GxJYNB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1113={
              <Fragment>
                <span className="registration-regis-car-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WunP-R'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1114={
              <Fragment>
                <span className="registration-regis-car-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_i0Di6l'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1115={
              <Fragment>
                <span className="registration-regis-car-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_r1nkQC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1116={
              <Fragment>
                <span className="registration-regis-car-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bct_Yj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1112={
              <Fragment>
                <span className="registration-regis-car-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uyZCpR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121={
              <Fragment>
                <span className="registration-regis-car-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_t2mUSp'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1213={
              <Fragment>
                <span className="registration-regis-car-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ovdrmk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1214={
              <Fragment>
                <span className="registration-regis-car-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GHpJpS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1215={
              <Fragment>
                <span className="registration-regis-car-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VVRy7R'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1216={
              <Fragment>
                <span className="registration-regis-car-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9gp4qG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11112={
              <Fragment>
                <span className="registration-regis-car-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4FnV3B'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11121={
              <Fragment>
                <span className="registration-regis-car-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gQcmB_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11213={
              <Fragment>
                <span className="registration-regis-car-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2Enkfb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11214={
              <Fragment>
                <span className="registration-regis-car-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VZhs7U'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11215={
              <Fragment>
                <span className="registration-regis-car-text58">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_cGfm8E'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11216={
              <Fragment>
                <span className="registration-regis-car-text59">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_--moCT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111121={
              <Fragment>
                <span className="registration-regis-car-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RtlXbN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111213={
              <Fragment>
                <span className="registration-regis-car-text61">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_01eC6x'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111214={
              <Fragment>
                <span className="registration-regis-car-text62">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_n1y2d6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111215={
              <Fragment>
                <span className="registration-regis-car-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qNrYiH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111216={
              <Fragment>
                <span className="registration-regis-car-text64">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_y5wKdt'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111213={
              <Fragment>
                <span className="registration-regis-car-text65">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dvJyFJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111214={
              <Fragment>
                <span className="registration-regis-car-text66">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Hfnn-1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111215={
              <Fragment>
                <span className="registration-regis-car-text67">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oEOA_W'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111216={
              <Fragment>
                <span className="registration-regis-car-text68">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yTSqiw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111111151={
              <Fragment>
                <span className="registration-regis-car-text69">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HYe7oh'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></RegistratonRegisCarTable>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="registration-regis-car-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tTns7Q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name9"
        ></Footer>
      </div>
      <style jsx>
        {`
          .registration-regis-car-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .registration-regis-car-container2 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
          }
          .registration-regis-car-text10 {
            display: inline-block;
          }
          .registration-regis-car-text11 {
            display: inline-block;
          }
          .registration-regis-car-text12 {
            display: inline-block;
          }
          .registration-regis-car-text13 {
            display: inline-block;
          }
          .registration-regis-car-text14 {
            display: inline-block;
          }
          .registration-regis-car-text15 {
            display: inline-block;
          }
          .registration-regis-car-text16 {
            display: inline-block;
          }
          .registration-regis-car-text17 {
            display: inline-block;
          }
          .registration-regis-car-text18 {
            display: inline-block;
          }
          .registration-regis-car-text19 {
            display: inline-block;
          }
          .registration-regis-car-text20 {
            display: inline-block;
          }
          .registration-regis-car-text21 {
            display: inline-block;
          }
          .registration-regis-car-text22 {
            display: inline-block;
          }
          .registration-regis-car-text23 {
            display: inline-block;
          }
          .registration-regis-car-text24 {
            display: inline-block;
          }
          .registration-regis-car-text25 {
            display: inline-block;
          }
          .registration-regis-car-text26 {
            display: inline-block;
          }
          .registration-regis-car-text27 {
            display: inline-block;
          }
          .registration-regis-car-text28 {
            display: inline-block;
          }
          .registration-regis-car-text29 {
            display: inline-block;
          }
          .registration-regis-car-text30 {
            display: inline-block;
          }
          .registration-regis-car-text31 {
            display: inline-block;
          }
          .registration-regis-car-text32 {
            display: inline-block;
          }
          .registration-regis-car-text33 {
            display: inline-block;
          }
          .registration-regis-car-text34 {
            display: inline-block;
          }
          .registration-regis-car-text35 {
            display: inline-block;
          }
          .registration-regis-car-text36 {
            display: inline-block;
          }
          .registration-regis-car-text37 {
            display: inline-block;
          }
          .registration-regis-car-text38 {
            display: inline-block;
          }
          .registration-regis-car-text39 {
            display: inline-block;
          }
          .registration-regis-car-text40 {
            display: inline-block;
          }
          .registration-regis-car-text41 {
            display: inline-block;
          }
          .registration-regis-car-text42 {
            display: inline-block;
          }
          .registration-regis-car-text43 {
            display: inline-block;
          }
          .registration-regis-car-text44 {
            display: inline-block;
          }
          .registration-regis-car-text45 {
            display: inline-block;
          }
          .registration-regis-car-text46 {
            display: inline-block;
          }
          .registration-regis-car-text47 {
            display: inline-block;
          }
          .registration-regis-car-text48 {
            display: inline-block;
          }
          .registration-regis-car-text49 {
            display: inline-block;
          }
          .registration-regis-car-text50 {
            display: inline-block;
          }
          .registration-regis-car-text51 {
            display: inline-block;
          }
          .registration-regis-car-text52 {
            display: inline-block;
          }
          .registration-regis-car-text53 {
            display: inline-block;
          }
          .registration-regis-car-text54 {
            display: inline-block;
          }
          .registration-regis-car-text55 {
            display: inline-block;
          }
          .registration-regis-car-text56 {
            display: inline-block;
          }
          .registration-regis-car-text57 {
            display: inline-block;
          }
          .registration-regis-car-text58 {
            display: inline-block;
          }
          .registration-regis-car-text59 {
            display: inline-block;
          }
          .registration-regis-car-text60 {
            display: inline-block;
          }
          .registration-regis-car-text61 {
            display: inline-block;
          }
          .registration-regis-car-text62 {
            display: inline-block;
          }
          .registration-regis-car-text63 {
            display: inline-block;
          }
          .registration-regis-car-text64 {
            display: inline-block;
          }
          .registration-regis-car-text65 {
            display: inline-block;
          }
          .registration-regis-car-text66 {
            display: inline-block;
          }
          .registration-regis-car-text67 {
            display: inline-block;
          }
          .registration-regis-car-text68 {
            display: inline-block;
          }
          .registration-regis-car-text69 {
            display: inline-block;
          }
          .registration-regis-car-text70 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .registration-regis-car-container2 {
              width: 100%;
            }
          }
          @media (max-width: 390px) {
            .registration-regis-car-container1 {
              background-image: linear-gradient(
                0deg,
                rgb(255, 255, 255) 77%,
                rgb(20, 67, 114) 89%
              );
            }
          }
        `}
      </style>
    </>
  )
}

export default RegistrationRegisCar

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
