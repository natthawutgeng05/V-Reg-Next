import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import SearchCarList from '../components/search-car-list'
import CarListTable from '../components/car-list-table'
import Footer from '../components/footer'

const CarHome = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="car-home-container1">
        <Head>
          <title>CarHome - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="CarHome - V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header></Header>
        <div className="car-home-search-tab">
          <SearchCarList
            text={
              <Fragment>
                <span className="car-home-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8lftBg'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="car-home-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qx3_Ko'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="car-home-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yUMt3w'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="car-home-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mDjUTe'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="car-home-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QNgJcL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text11={
              <Fragment>
                <span className="car-home-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9oLP8d'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="car-home-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7iq208'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button1={
              <Fragment>
                <span className="car-home-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Se1eGQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button11={
              <Fragment>
                <span className="car-home-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mnmfZD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="search-car-listroot-class-name"
          ></SearchCarList>
        </div>
        <div className="car-home-action-tab">
          <div className="car-home-container2">
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_N4vo28'),
                }}
              ></span>
            </span>
            <button type="button" className="car-home-button1 button">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_oka3a5'),
                }}
              ></span>
            </button>
            <button type="button" className="car-home-button2 button">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_c73SE6'),
                }}
              ></span>
            </button>
            <button type="button" className="car-home-button3 button">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_ZEGYs6'),
                }}
              ></span>
            </button>
          </div>
          <div className="car-home-container3">
            <button type="button" className="button">
              <span>Export</span>
            </button>
          </div>
        </div>
        <div className="car-home-features">
          <CarListTable
            carNumber1={
              <Fragment>
                <span className="car-home-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ijq90k'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber115={
              <Fragment>
                <span className="car-home-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EObiIo'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber1153={
              <Fragment>
                <span className="car-home-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ncc3mi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="car-list-tableroot-class-name"
            carNumber11531={
              <Fragment>
                <span className="car-home-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6xLfXu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1={
              <Fragment>
                <span className="car-home-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fzhtkz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1={
              <Fragment>
                <span className="car-home-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FS08yD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            carNumber115311={
              <Fragment>
                <span className="car-home-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_V3mUK0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11={
              <Fragment>
                <span className="car-home-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EGgiuB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName115={
              <Fragment>
                <span className="car-home-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VETc4A'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111={
              <Fragment>
                <span className="car-home-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RrHYj-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine125={
              <Fragment>
                <span className="car-home-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PIxrwU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName1153={
              <Fragment>
                <span className="car-home-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sM7jmW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111={
              <Fragment>
                <span className="car-home-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GXjQxZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1125={
              <Fragment>
                <span className="car-home-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PBPPqe'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1253={
              <Fragment>
                <span className="car-home-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8Ma8ny'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName11531={
              <Fragment>
                <span className="car-home-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_07gxZa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111={
              <Fragment>
                <span className="car-home-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_o3NVYX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11253={
              <Fragment>
                <span className="car-home-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NtbqIC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine12531={
              <Fragment>
                <span className="car-home-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RWNXrn'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            collectorName115311={
              <Fragment>
                <span className="car-home-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_F3Wrte'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111={
              <Fragment>
                <span className="car-home-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gmePcC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111125={
              <Fragment>
                <span className="car-home-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lp0jlR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine112531={
              <Fragment>
                <span className="car-home-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WsRRB4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine125311={
              <Fragment>
                <span className="car-home-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ihnxzq'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111={
              <Fragment>
                <span className="car-home-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6qeBtW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111125={
              <Fragment>
                <span className="car-home-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_n1Qkr9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111253={
              <Fragment>
                <span className="car-home-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Jqg03U'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1125311={
              <Fragment>
                <span className="car-home-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_a5HdnV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111={
              <Fragment>
                <span className="car-home-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_65c1WG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111125={
              <Fragment>
                <span className="car-home-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Xx8xN6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111253={
              <Fragment>
                <span className="car-home-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_t1Yk8S'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11112531={
              <Fragment>
                <span className="car-home-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_L8FRrK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111111={
              <Fragment>
                <span className="car-home-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_W_2p1q'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111125={
              <Fragment>
                <span className="car-home-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_w3eCda'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111253={
              <Fragment>
                <span className="car-home-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Khq6kw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111112531={
              <Fragment>
                <span className="car-home-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_cuiZB9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111125311={
              <Fragment>
                <span className="car-home-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZNhUJJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111111={
              <Fragment>
                <span className="car-home-text58">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Lj1zA8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111125={
              <Fragment>
                <span className="car-home-text59">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oen7nY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111253={
              <Fragment>
                <span className="car-home-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_o7N0rk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111112531={
              <Fragment>
                <span className="car-home-text61">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YWxHyy'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111125311={
              <Fragment>
                <span className="car-home-text62">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9oz0Pn'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111111={
              <Fragment>
                <span className="car-home-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_cfJw2-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111125={
              <Fragment>
                <span className="car-home-text64">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zWMs56'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111253={
              <Fragment>
                <span className="car-home-text65">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PZpRJ9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111112531={
              <Fragment>
                <span className="car-home-text66">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WaOnd0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111125311={
              <Fragment>
                <span className="car-home-text67">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__l8Cpn'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111111125={
              <Fragment>
                <span className="car-home-text68">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EnIlvW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111111253={
              <Fragment>
                <span className="car-home-text69">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NPekNy'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111112531={
              <Fragment>
                <span className="car-home-text70">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qBBfli'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111125311={
              <Fragment>
                <span className="car-home-text71">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xVzBnC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111111115={
              <Fragment>
                <span className="car-home-text72">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__2ivjM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111111125={
              <Fragment>
                <span className="car-home-text73">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LAVe5L'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111111253={
              <Fragment>
                <span className="car-home-text74">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_hu3HpC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111112531={
              <Fragment>
                <span className="car-home-text75">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_H0zW4p'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111125311={
              <Fragment>
                <span className="car-home-text76">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4DQ65j'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111111115={
              <Fragment>
                <span className="car-home-text77">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_n4P1m0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111111253={
              <Fragment>
                <span className="car-home-text78">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vHFNIo'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111112531={
              <Fragment>
                <span className="car-home-text79">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bG7dMB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111125311={
              <Fragment>
                <span className="car-home-text80">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kpD6GB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111111111153={
              <Fragment>
                <span className="car-home-text81">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7GGoRZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111111112531={
              <Fragment>
                <span className="car-home-text82">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3_HiCV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine111111111125311={
              <Fragment>
                <span className="car-home-text83">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LmQrHz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111111111531={
              <Fragment>
                <span className="car-home-text84">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zM4Za8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine1111111111125311={
              <Fragment>
                <span className="car-home-text85">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_21p9UG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            dateDetermine11111111111115311={
              <Fragment>
                <span className="car-home-text86">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SRjKP5'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarListTable>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="car-home-text87">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U47o0Q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name17"
        ></Footer>
      </div>
      <style jsx>
        {`
          .car-home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .car-home-search-tab {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .car-home-text10 {
            display: inline-block;
          }
          .car-home-text11 {
            display: inline-block;
          }
          .car-home-text12 {
            display: inline-block;
          }
          .car-home-text13 {
            display: inline-block;
          }
          .car-home-text14 {
            display: inline-block;
          }
          .car-home-text15 {
            display: inline-block;
          }
          .car-home-text16 {
            display: inline-block;
          }
          .car-home-text17 {
            display: inline-block;
          }
          .car-home-text18 {
            display: inline-block;
          }
          .car-home-action-tab {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .car-home-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .car-home-button1 {
            margin-left: var(--dl-layout-space-halfunit);
            margin-right: var(--dl-layout-space-halfunit);
            border-radius: 6px;
          }
          .car-home-button2 {
            margin-left: var(--dl-layout-space-halfunit);
            margin-right: var(--dl-layout-space-halfunit);
            border-radius: 6px;
          }
          .car-home-button3 {
            margin-left: var(--dl-layout-space-halfunit);
            margin-right: var(--dl-layout-space-halfunit);
            border-radius: 6px;
          }
          .car-home-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-home-text21 {
            display: inline-block;
          }
          .car-home-text22 {
            display: inline-block;
            text-decoration: underline;
          }
          .car-home-text23 {
            display: inline-block;
            text-decoration: underline;
          }
          .car-home-text24 {
            display: inline-block;
            text-decoration: underline;
          }
          .car-home-text25 {
            display: inline-block;
          }
          .car-home-text26 {
            display: inline-block;
          }
          .car-home-text27 {
            display: inline-block;
            text-decoration: underline;
          }
          .car-home-text28 {
            display: inline-block;
          }
          .car-home-text29 {
            display: inline-block;
          }
          .car-home-text30 {
            display: inline-block;
          }
          .car-home-text31 {
            display: inline-block;
          }
          .car-home-text32 {
            display: inline-block;
          }
          .car-home-text33 {
            display: inline-block;
          }
          .car-home-text34 {
            display: inline-block;
          }
          .car-home-text35 {
            display: inline-block;
          }
          .car-home-text36 {
            display: inline-block;
          }
          .car-home-text37 {
            display: inline-block;
          }
          .car-home-text38 {
            display: inline-block;
          }
          .car-home-text39 {
            display: inline-block;
          }
          .car-home-text40 {
            display: inline-block;
          }
          .car-home-text41 {
            display: inline-block;
          }
          .car-home-text42 {
            display: inline-block;
          }
          .car-home-text43 {
            display: inline-block;
          }
          .car-home-text44 {
            display: inline-block;
          }
          .car-home-text45 {
            display: inline-block;
          }
          .car-home-text46 {
            display: inline-block;
          }
          .car-home-text47 {
            display: inline-block;
          }
          .car-home-text48 {
            display: inline-block;
          }
          .car-home-text49 {
            display: inline-block;
          }
          .car-home-text50 {
            display: inline-block;
          }
          .car-home-text51 {
            display: inline-block;
          }
          .car-home-text52 {
            display: inline-block;
          }
          .car-home-text53 {
            display: inline-block;
          }
          .car-home-text54 {
            display: inline-block;
          }
          .car-home-text55 {
            display: inline-block;
          }
          .car-home-text56 {
            display: inline-block;
          }
          .car-home-text57 {
            display: inline-block;
          }
          .car-home-text58 {
            display: inline-block;
          }
          .car-home-text59 {
            display: inline-block;
          }
          .car-home-text60 {
            display: inline-block;
          }
          .car-home-text61 {
            display: inline-block;
          }
          .car-home-text62 {
            display: inline-block;
          }
          .car-home-text63 {
            display: inline-block;
          }
          .car-home-text64 {
            display: inline-block;
          }
          .car-home-text65 {
            display: inline-block;
          }
          .car-home-text66 {
            display: inline-block;
          }
          .car-home-text67 {
            display: inline-block;
          }
          .car-home-text68 {
            display: inline-block;
          }
          .car-home-text69 {
            display: inline-block;
          }
          .car-home-text70 {
            display: inline-block;
          }
          .car-home-text71 {
            display: inline-block;
          }
          .car-home-text72 {
            display: inline-block;
          }
          .car-home-text73 {
            display: inline-block;
          }
          .car-home-text74 {
            display: inline-block;
          }
          .car-home-text75 {
            display: inline-block;
          }
          .car-home-text76 {
            display: inline-block;
          }
          .car-home-text77 {
            display: inline-block;
          }
          .car-home-text78 {
            display: inline-block;
          }
          .car-home-text79 {
            display: inline-block;
          }
          .car-home-text80 {
            display: inline-block;
          }
          .car-home-text81 {
            display: inline-block;
          }
          .car-home-text82 {
            display: inline-block;
          }
          .car-home-text83 {
            display: inline-block;
          }
          .car-home-text84 {
            display: inline-block;
          }
          .car-home-text85 {
            display: inline-block;
          }
          .car-home-text86 {
            display: inline-block;
          }
          .car-home-text87 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .car-home-action-tab {
              width: 100%;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 767px) {
            .car-home-features {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .car-home-features {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default CarHome

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
