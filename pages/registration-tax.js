import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import SidebarTax from '../components/sidebar-tax'
import RegistratonTaxTable from '../components/registraton-tax-table'
import Footer from '../components/footer'

const RegistrationTax = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="registration-tax-container1">
        <Head>
          <title>RegistrationTax - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="RegistrationTax - V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name7"></Header>
        <div className="registration-tax-container2">
          <SidebarTax
            heading={
              <Fragment>
                <span className="registration-tax-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BjdNIP'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text102={
              <Fragment>
                <span className="registration-tax-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DVkIHm'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1012={
              <Fragment>
                <span className="registration-tax-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AjCtsF'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text10112={
              <Fragment>
                <span className="registration-tax-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sx_2I4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text101112={
              <Fragment>
                <span className="registration-tax-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rsz6W0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1011112={
              <Fragment>
                <span className="registration-tax-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_O6nyJO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text10111111={
              <Fragment>
                <span className="registration-tax-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_78nyIX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="sidebar-taxroot-class-name4"
          ></SidebarTax>
          <RegistratonTaxTable
            text={
              <Fragment>
                <span className="registration-tax-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kejh6X'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="registration-tax-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AIZrrd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="registration-tax-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_iC97vi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text11={
              <Fragment>
                <span className="registration-tax-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KeFUwR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button1={
              <Fragment>
                <span className="registration-tax-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yxHry4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2={
              <Fragment>
                <span className="registration-tax-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yvEPRV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button3={
              <Fragment>
                <span className="registration-tax-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_H_VXbY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button21={
              <Fragment>
                <span className="registration-tax-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UKEK1k'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211={
              <Fragment>
                <span className="registration-tax-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KHb2kA'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111={
              <Fragment>
                <span className="registration-tax-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6Zw8Ex'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button21111={
              <Fragment>
                <span className="registration-tax-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QTVA3Y'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber11={
              <Fragment>
                <span className="registration-tax-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_z1yo6p'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211111={
              <Fragment>
                <span className="registration-tax-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CVPQL0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber111={
              <Fragment>
                <span className="registration-tax-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Y4sj47'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111111={
              <Fragment>
                <span className="registration-tax-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oviMAL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1111={
              <Fragment>
                <span className="registration-tax-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2kHQ_7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1112={
              <Fragment>
                <span className="registration-tax-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jU1fyM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="registraton-tax-tableroot-class-name"
            button21111111={
              <Fragment>
                <span className="registration-tax-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-kaDy3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber11121={
              <Fragment>
                <span className="registration-tax-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LDCyng'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button211111111={
              <Fragment>
                <span className="registration-tax-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_en1oMq'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName11={
              <Fragment>
                <span className="registration-tax-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YxlWF_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine12={
              <Fragment>
                <span className="registration-tax-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DRd4OL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button2111111111={
              <Fragment>
                <span className="registration-tax-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7kvDLa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName111={
              <Fragment>
                <span className="registration-tax-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_J5FSFK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112={
              <Fragment>
                <span className="registration-tax-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rvy59d'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine121={
              <Fragment>
                <span className="registration-tax-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lijjjN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1111={
              <Fragment>
                <span className="registration-tax-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Kealym'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1112={
              <Fragment>
                <span className="registration-tax-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VlegWM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1112={
              <Fragment>
                <span className="registration-tax-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8OqgGU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1121={
              <Fragment>
                <span className="registration-tax-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZqStST'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1211={
              <Fragment>
                <span className="registration-tax-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZkZPok'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1212={
              <Fragment>
                <span className="registration-tax-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dWm1oT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName11121={
              <Fragment>
                <span className="registration-tax-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MV3_tj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11112={
              <Fragment>
                <span className="registration-tax-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6KKvHf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11121={
              <Fragment>
                <span className="registration-tax-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_41dGK7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11211={
              <Fragment>
                <span className="registration-tax-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qhFrBJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11212={
              <Fragment>
                <span className="registration-tax-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_V0t-rj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine12121={
              <Fragment>
                <span className="registration-tax-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dbGKP2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111112={
              <Fragment>
                <span className="registration-tax-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BGq53B'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111121={
              <Fragment>
                <span className="registration-tax-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yPvI4w'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111211={
              <Fragment>
                <span className="registration-tax-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IskZWI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111212={
              <Fragment>
                <span className="registration-tax-text58">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3leFbf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112121={
              <Fragment>
                <span className="registration-tax-text59">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sKy_dB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111112={
              <Fragment>
                <span className="registration-tax-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uFlF53'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111121={
              <Fragment>
                <span className="registration-tax-text61">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oz8_Yk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111211={
              <Fragment>
                <span className="registration-tax-text62">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OhZQEt'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111212={
              <Fragment>
                <span className="registration-tax-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5cdpNU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1112121={
              <Fragment>
                <span className="registration-tax-text64">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MyDyaQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111112={
              <Fragment>
                <span className="registration-tax-text65">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zfA7vz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111121={
              <Fragment>
                <span className="registration-tax-text66">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_flnNBi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111211={
              <Fragment>
                <span className="registration-tax-text67">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-c1fr3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111212={
              <Fragment>
                <span className="registration-tax-text68">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Heyncv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11112121={
              <Fragment>
                <span className="registration-tax-text69">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ULqlUa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111121={
              <Fragment>
                <span className="registration-tax-text70">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BpHNOM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111211={
              <Fragment>
                <span className="registration-tax-text71">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5wQ4OG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111212={
              <Fragment>
                <span className="registration-tax-text72">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NIZoXI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111112121={
              <Fragment>
                <span className="registration-tax-text73">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_y41-GM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111211={
              <Fragment>
                <span className="registration-tax-text74">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NOfIyp'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111212={
              <Fragment>
                <span className="registration-tax-text75">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LTewQa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111112121={
              <Fragment>
                <span className="registration-tax-text76">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6tUFwV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111112121={
              <Fragment>
                <span className="registration-tax-text77">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OdhgyT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111111151={
              <Fragment>
                <span className="registration-tax-text78">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mt25ZL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></RegistratonTaxTable>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="registration-tax-text79">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vSAWqV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name6"
        ></Footer>
      </div>
      <style jsx>
        {`
          .registration-tax-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .registration-tax-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
          }
          .registration-tax-text10 {
            display: inline-block;
          }
          .registration-tax-text11 {
            display: inline-block;
          }
          .registration-tax-text12 {
            display: inline-block;
          }
          .registration-tax-text13 {
            display: inline-block;
          }
          .registration-tax-text14 {
            display: inline-block;
          }
          .registration-tax-text15 {
            display: inline-block;
          }
          .registration-tax-text16 {
            display: inline-block;
          }
          .registration-tax-text17 {
            display: inline-block;
          }
          .registration-tax-text18 {
            display: inline-block;
          }
          .registration-tax-text19 {
            display: inline-block;
          }
          .registration-tax-text20 {
            display: inline-block;
          }
          .registration-tax-text21 {
            display: inline-block;
          }
          .registration-tax-text22 {
            display: inline-block;
          }
          .registration-tax-text23 {
            display: inline-block;
          }
          .registration-tax-text24 {
            display: inline-block;
          }
          .registration-tax-text25 {
            display: inline-block;
          }
          .registration-tax-text26 {
            display: inline-block;
          }
          .registration-tax-text27 {
            display: inline-block;
          }
          .registration-tax-text28 {
            display: inline-block;
          }
          .registration-tax-text29 {
            display: inline-block;
          }
          .registration-tax-text30 {
            display: inline-block;
          }
          .registration-tax-text31 {
            display: inline-block;
          }
          .registration-tax-text32 {
            display: inline-block;
          }
          .registration-tax-text33 {
            display: inline-block;
          }
          .registration-tax-text34 {
            display: inline-block;
          }
          .registration-tax-text35 {
            display: inline-block;
          }
          .registration-tax-text36 {
            display: inline-block;
          }
          .registration-tax-text37 {
            display: inline-block;
          }
          .registration-tax-text38 {
            display: inline-block;
          }
          .registration-tax-text39 {
            display: inline-block;
          }
          .registration-tax-text40 {
            display: inline-block;
          }
          .registration-tax-text41 {
            display: inline-block;
          }
          .registration-tax-text42 {
            display: inline-block;
          }
          .registration-tax-text43 {
            display: inline-block;
          }
          .registration-tax-text44 {
            display: inline-block;
          }
          .registration-tax-text45 {
            display: inline-block;
          }
          .registration-tax-text46 {
            display: inline-block;
          }
          .registration-tax-text47 {
            display: inline-block;
          }
          .registration-tax-text48 {
            display: inline-block;
          }
          .registration-tax-text49 {
            display: inline-block;
          }
          .registration-tax-text50 {
            display: inline-block;
          }
          .registration-tax-text51 {
            display: inline-block;
          }
          .registration-tax-text52 {
            display: inline-block;
          }
          .registration-tax-text53 {
            display: inline-block;
          }
          .registration-tax-text54 {
            display: inline-block;
          }
          .registration-tax-text55 {
            display: inline-block;
          }
          .registration-tax-text56 {
            display: inline-block;
          }
          .registration-tax-text57 {
            display: inline-block;
          }
          .registration-tax-text58 {
            display: inline-block;
          }
          .registration-tax-text59 {
            display: inline-block;
          }
          .registration-tax-text60 {
            display: inline-block;
          }
          .registration-tax-text61 {
            display: inline-block;
          }
          .registration-tax-text62 {
            display: inline-block;
          }
          .registration-tax-text63 {
            display: inline-block;
          }
          .registration-tax-text64 {
            display: inline-block;
          }
          .registration-tax-text65 {
            display: inline-block;
          }
          .registration-tax-text66 {
            display: inline-block;
          }
          .registration-tax-text67 {
            display: inline-block;
          }
          .registration-tax-text68 {
            display: inline-block;
          }
          .registration-tax-text69 {
            display: inline-block;
          }
          .registration-tax-text70 {
            display: inline-block;
          }
          .registration-tax-text71 {
            display: inline-block;
          }
          .registration-tax-text72 {
            display: inline-block;
          }
          .registration-tax-text73 {
            display: inline-block;
          }
          .registration-tax-text74 {
            display: inline-block;
          }
          .registration-tax-text75 {
            display: inline-block;
          }
          .registration-tax-text76 {
            display: inline-block;
          }
          .registration-tax-text77 {
            display: inline-block;
          }
          .registration-tax-text78 {
            display: inline-block;
          }
          .registration-tax-text79 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .registration-tax-container2 {
              width: var(--dl-layout-size-maxwidth);
            }
          }
          @media (max-width: 1000px) {
            .registration-tax-container2 {
              width: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .registration-tax-container1 {
              background-image: linear-gradient(
                0deg,
                rgb(255, 255, 255) 94%,
                rgb(20, 67, 114) 91%
              );
            }
          }
          @media (max-width: 390px) {
            .registration-tax-container1 {
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

export default RegistrationTax

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
