import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import SidebarTax from '../components/sidebar-tax'
import RegistratonCancelTable from '../components/registraton-cancel-table'
import Footer from '../components/footer'

const RegistrationCancelAndCutoff = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="registration-cancel-and-cutoff-container1">
        <Head>
          <title>RegistrationCancelAndCutoff - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:title"
            content="RegistrationCancelAndCutoff - V-REG"
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
        <Header rootClassName="headerroot-class-name15"></Header>
        <div className="registration-cancel-and-cutoff-container2">
          <SidebarTax
            heading={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1h_LNU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text102={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_T3eDo5'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1012={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zX1_su'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text10112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CWS5Sj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text101112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5oetC1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1011112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EsiyAk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text10111111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_r_duI9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="sidebar-taxroot-class-name"
          ></SidebarTax>
          <RegistratonCancelTable
            text={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DoVAoz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__mVAzG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lYtmcu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text11={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_91SCuh'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button1={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Qoa2V4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1ZieqF'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button3={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_izp-BU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button21={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uT5dQB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_m7a_oC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HEBfhn'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button21111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fKt9lQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber11={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_t2--zO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZufJIL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8LZ85q'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_U3f5_S'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7Wzis3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_34gfV3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1117={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_W22VfK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="registraton-cancel-tableroot-class-name"
            button21111111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KNyGOH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211111111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gRIlwR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName11={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Ak5w1j'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine12={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bGGdIx'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111111111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5jFHEW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Ie3ZV_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HSSMX4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jElKfR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Ab0nnB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1117={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mgwk1D'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SYgngp'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9L7Hth'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_95xf0_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11121={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uH0fIC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11122={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YIRmQl'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11211={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_A5WqSn'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11212={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_roCFNb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11217={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1poU_b'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11218={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9f5nRY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111121={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xYgXXy'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111211={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PeoX0v'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111212={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OmwX5f'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111217={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JP2bS7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111221={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text58">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5OV_X4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text59">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__eSZWY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SgLnkU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112113={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text61">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OJmrZd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112114={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text62">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0NKPaW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112115={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Unwlar'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111211={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text64">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_eOBRSS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111212={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text65">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_avMI5K'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111217={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text66">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jzcekv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121111={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text67">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JXk8mV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121112={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text68">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RewP8a'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121113={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text69">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8jzYxG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121121={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text70">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BY-Tjc'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121122={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text71">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5DCISZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121123={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text72">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_e0TyBy'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111111151={
              <Fragment>
                <span className="registration-cancel-and-cutoff-text73">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NXQy7u'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></RegistratonCancelTable>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="registration-cancel-and-cutoff-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0klKVd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name14"
        ></Footer>
      </div>
      <style jsx>
        {`
          .registration-cancel-and-cutoff-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .registration-cancel-and-cutoff-container2 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
          }
          .registration-cancel-and-cutoff-text10 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text11 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text12 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text13 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text14 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text15 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text16 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text17 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text18 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text19 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text20 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text21 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text22 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text23 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text24 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text25 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text26 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text27 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text28 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text29 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text30 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text31 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text32 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text33 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text34 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text35 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text36 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text37 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text38 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text39 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text40 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text41 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text42 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text43 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text44 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text45 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text46 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text47 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text48 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text49 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text50 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text51 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text52 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text53 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text54 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text55 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text56 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text57 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text58 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text59 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text60 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text61 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text62 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text63 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text64 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text65 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text66 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text67 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text68 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text69 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text70 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text71 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text72 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text73 {
            display: inline-block;
          }
          .registration-cancel-and-cutoff-text74 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .registration-cancel-and-cutoff-container2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .registration-cancel-and-cutoff-container1 {
              background-image: linear-gradient(
                0deg,
                rgb(255, 255, 255) 94%,
                rgb(20, 67, 114) 91%
              );
            }
          }
          @media (max-width: 390px) {
            .registration-cancel-and-cutoff-container1 {
              background-image: linear-gradient(
                0deg,
                rgb(255, 255, 255) 98%,
                rgb(20, 67, 114) 94%
              );
            }
          }
        `}
      </style>
    </>
  )
}

export default RegistrationCancelAndCutoff

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
