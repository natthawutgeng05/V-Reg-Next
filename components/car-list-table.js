import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarListTable = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`car-list-table-container10 ${props.rootClassName} `}>
        <div className="car-list-table-container11">
          <div className="car-list-table-container12">
            <span className="car-list-table-equipment1">
              {props.carNumber1 ?? (
                <Fragment>
                  <span className="car-list-table-text45">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vqKv02'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-car-no1">
              {props.collectorName1 ?? (
                <Fragment>
                  <span className="car-list-table-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tWAoDr'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-licenseplate">
              {props.dateDetermine1 ?? (
                <Fragment>
                  <span className="car-list-table-text60">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__I6MtZ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-province1">
              {props.dateDetermine11 ?? (
                <Fragment>
                  <span className="car-list-table-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dcrPPE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-regis-date1">
              {props.dateDetermine111 ?? (
                <Fragment>
                  <span className="car-list-table-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_HYzDzS'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-center1">
              {props.dateDetermine1111 ?? (
                <Fragment>
                  <span className="car-list-table-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_97GSou'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-division1">
              {props.dateDetermine11111 ?? (
                <Fragment>
                  <span className="car-list-table-text35">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_iGXu8T'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-date-tax-expired1">
              {props.dateDetermine111111 ?? (
                <Fragment>
                  <span className="car-list-table-text38">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8zFOcw'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-regis1">
              {props.dateDetermine1111111 ?? (
                <Fragment>
                  <span className="car-list-table-text59">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_iNdiks'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-tax-now1">
              {props.dateDetermine11111111 ?? (
                <Fragment>
                  <span className="car-list-table-text69">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1pBcHW'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-check1">
              {props.dateDetermine111111111 ?? (
                <Fragment>
                  <span className="car-list-table-text48">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SZ03P2'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cng-cost1">
              {props.dateDetermine1111111111 ?? (
                <Fragment>
                  <span className="car-list-table-text52">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_IEtzIb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-status1">
              {props.dateDetermine11111111111 ?? (
                <Fragment>
                  <span className="car-list-table-text66">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_B0oBt5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-action">
              {props.dateDetermine1111111111115 ?? (
                <Fragment>
                  <span className="car-list-table-text49">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SUcosu'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="car-list-table-container13">
            <Link href="/vehicle-registration-details">
              <a className="car-list-table-link10">
                {props.carNumber115 ?? (
                  <Fragment>
                    <span className="car-list-table-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_68vrl8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <span className="car-list-table-car-no2">
              {props.collectorName115 ?? (
                <Fragment>
                  <span className="car-list-table-text26">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wATsl6'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-license-plate1">
              {props.dateDetermine125 ?? (
                <Fragment>
                  <span className="car-list-table-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_LG-O9h'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-province2">
              {props.dateDetermine1125 ?? (
                <Fragment>
                  <span className="car-list-table-text64">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_N0vCBz'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-regis-date2">
              {props.dateDetermine111125 ?? (
                <Fragment>
                  <span className="car-list-table-text40">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_yBWb12'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-center2">
              {props.dateDetermine1111125 ?? (
                <Fragment>
                  <span className="car-list-table-text31">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DJDDYX'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-division2">
              {props.dateDetermine11111125 ?? (
                <Fragment>
                  <span className="car-list-table-text42">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hS-lzU'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-date-tax-expired2">
              {props.dateDetermine111111125 ?? (
                <Fragment>
                  <span className="car-list-table-text33">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_w66ZWM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-regis2">
              {props.dateDetermine1111111125 ?? (
                <Fragment>
                  <span className="car-list-table-text58">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_J8EkQa'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-tax-now2">
              {props.dateDetermine11111111125 ?? (
                <Fragment>
                  <span className="car-list-table-text61">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_IPA45r'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-check2">
              {props.dateDetermine111111111125 ?? (
                <Fragment>
                  <span className="car-list-table-text55">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_D0xoOW'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cng-cost2">
              {props.dateDetermine1111111111125 ?? (
                <Fragment>
                  <span className="car-list-table-text53">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_IaG1X9'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-status2">
              {props.dateDetermine11111111111115 ?? (
                <Fragment>
                  <span className="car-list-table-text51">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_qrMcZd'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="car-list-table-container14">
              <Link href="/vehicle-registration-details">
                <a className="car-list-table-link11">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="car-list-table-details1"
                  >
                    <path
                      d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </Link>
              <Link href="/edit-car-detail">
                <a className="car-list-table-link12">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    className="car-list-table-edit1"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M42 26v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M14 26.72V34h7.317L42 13.308L34.695 6z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="car-list-table-container15">
            <Link href="/vehicle-registration-details">
              <a className="car-list-table-link13">
                {props.carNumber1153 ?? (
                  <Fragment>
                    <span className="car-list-table-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KwR2tu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <span className="car-list-table-car-no3">
              {props.collectorName1153 ?? (
                <Fragment>
                  <span className="car-list-table-text74">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_S34d8T'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-license-plate2">
              {props.dateDetermine1253 ?? (
                <Fragment>
                  <span className="car-list-table-text56">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2rIheT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-province3">
              {props.dateDetermine11253 ?? (
                <Fragment>
                  <span className="car-list-table-text54">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zvoeul'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-regis-date3">
              {props.dateDetermine1111253 ?? (
                <Fragment>
                  <span className="car-list-table-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Pr2KI-'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-center3">
              {props.dateDetermine11111253 ?? (
                <Fragment>
                  <span className="car-list-table-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_i3hUfe'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-division3">
              {props.dateDetermine111111253 ?? (
                <Fragment>
                  <span className="car-list-table-text73">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YVU6yD'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-date-tax-expired3">
              {props.dateDetermine1111111253 ?? (
                <Fragment>
                  <span className="car-list-table-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_D1kS6_'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-regis3">
              {props.dateDetermine11111111253 ?? (
                <Fragment>
                  <span className="car-list-table-text57">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_bJT5qt'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-tax-now3">
              {props.dateDetermine111111111253 ?? (
                <Fragment>
                  <span className="car-list-table-text44">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_aaf5WY'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-check3">
              {props.dateDetermine1111111111253 ?? (
                <Fragment>
                  <span className="car-list-table-text67">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_eOFOoE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cng-cost3">
              {props.dateDetermine11111111111253 ?? (
                <Fragment>
                  <span className="car-list-table-text68">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Dbq2cd'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-status3">
              {props.dateDetermine111111111111153 ?? (
                <Fragment>
                  <span className="car-list-table-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hXs_OT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="car-list-table-container16">
              <Link href="/vehicle-registration-details">
                <a className="car-list-table-link14">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="car-list-table-details2"
                  >
                    <path
                      d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </Link>
              <Link href="/edit-car-detail">
                <a className="car-list-table-link15">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    className="car-list-table-edit2"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M42 26v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M14 26.72V34h7.317L42 13.308L34.695 6z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="car-list-table-container17">
            <Link href="/vehicle-registration-details">
              <a className="car-list-table-link16">
                {props.carNumber11531 ?? (
                  <Fragment>
                    <span className="car-list-table-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XdoH1T'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <span className="car-list-table-car-no4">
              {props.collectorName11531 ?? (
                <Fragment>
                  <span className="car-list-table-text27">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ABG2Gx'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-license-plate3">
              {props.dateDetermine12531 ?? (
                <Fragment>
                  <span className="car-list-table-text50">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_52KBQ7'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-province4">
              {props.dateDetermine112531 ?? (
                <Fragment>
                  <span className="car-list-table-text65">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_JDZKVn'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-regis-date4">
              {props.dateDetermine11112531 ?? (
                <Fragment>
                  <span className="car-list-table-text37">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_iIE5M2'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-center4">
              {props.dateDetermine111112531 ?? (
                <Fragment>
                  <span className="car-list-table-text32">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xLouAq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-division4">
              {props.dateDetermine1111112531 ?? (
                <Fragment>
                  <span className="car-list-table-text63">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wyixqE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-date-tax-expired4">
              {props.dateDetermine11111112531 ?? (
                <Fragment>
                  <span className="car-list-table-text25">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zkxYxM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-regis4">
              {props.dateDetermine111111112531 ?? (
                <Fragment>
                  <span className="car-list-table-text41">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Inunfz'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-tax-now4">
              {props.dateDetermine1111111112531 ?? (
                <Fragment>
                  <span className="car-list-table-text62">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_LYgJc8'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-check4">
              {props.dateDetermine11111111112531 ?? (
                <Fragment>
                  <span className="car-list-table-text47">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vlFCZs'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cng-cost4">
              {props.dateDetermine111111111112531 ?? (
                <Fragment>
                  <span className="car-list-table-text30">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_evQYeh'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-status4">
              {props.dateDetermine1111111111111531 ?? (
                <Fragment>
                  <span className="car-list-table-text46">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_QFFfFD'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="car-list-table-container18">
              <Link href="/vehicle-registration-details">
                <a className="car-list-table-link17">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="car-list-table-details3"
                  >
                    <path
                      d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </Link>
              <Link href="/edit-car-detail">
                <a className="car-list-table-link18">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    className="car-list-table-edit3"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M42 26v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M14 26.72V34h7.317L42 13.308L34.695 6z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="car-list-table-container19">
            <Link href="/vehicle-registration-details">
              <a className="car-list-table-link19">
                {props.carNumber115311 ?? (
                  <Fragment>
                    <span className="car-list-table-text12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ff_Ph0'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <span className="car-list-table-car-no5">
              {props.collectorName115311 ?? (
                <Fragment>
                  <span className="car-list-table-text75">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_HZGluG'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-license-plate4">
              {props.dateDetermine125311 ?? (
                <Fragment>
                  <span className="car-list-table-text21">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SGua5N'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-province5">
              {props.dateDetermine1125311 ?? (
                <Fragment>
                  <span className="car-list-table-text29">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1aBgZx'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-regis-date5">
              {props.dateDetermine111125311 ?? (
                <Fragment>
                  <span className="car-list-table-text39">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mXpUkq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-center5">
              {props.dateDetermine1111125311 ?? (
                <Fragment>
                  <span className="car-list-table-text72">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_nRlBg3'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-division5">
              {props.dateDetermine11111125311 ?? (
                <Fragment>
                  <span className="car-list-table-text34">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_shOBvD'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-date-tax-expired5">
              {props.dateDetermine111111125311 ?? (
                <Fragment>
                  <span className="car-list-table-text70">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_l1PXoC'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-regis5">
              {props.dateDetermine1111111125311 ?? (
                <Fragment>
                  <span className="car-list-table-text36">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UxpPtX'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-tax-now5">
              {props.dateDetermine11111111125311 ?? (
                <Fragment>
                  <span className="car-list-table-text23">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1G9NMk'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cost-check5">
              {props.dateDetermine111111111125311 ?? (
                <Fragment>
                  <span className="car-list-table-text71">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MYRLuX'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-cng-cost5">
              {props.dateDetermine1111111111125311 ?? (
                <Fragment>
                  <span className="car-list-table-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_i1fAay'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="car-list-table-status5">
              {props.dateDetermine11111111111115311 ?? (
                <Fragment>
                  <span className="car-list-table-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_9OnS4B'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="car-list-table-container20">
              <Link href="/vehicle-registration-details">
                <a className="car-list-table-link20">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="car-list-table-details4"
                  >
                    <path
                      d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </Link>
              <Link href="/edit-car-detail">
                <a className="car-list-table-link21">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    className="car-list-table-edit4"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M42 26v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M14 26.72V34h7.317L42 13.308L34.695 6z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .car-list-table-container10 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-list-table-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .car-list-table-container12 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .car-list-table-equipment1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .car-list-table-car-no1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-licenseplate {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-province1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-regis-date1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-center1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-division1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-date-tax-expired1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-regis1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-tax-now1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-check1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cng-cost1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-status1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-action {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-container13 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .car-list-table-link10 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: 0px;
            text-decoration: none;
          }
          .car-list-table-car-no2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-license-plate1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-province2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-regis-date2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-center2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-division2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-date-tax-expired2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-regis2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-tax-now2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-check2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cng-cost2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-status2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-container14 {
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .car-list-table-link11 {
            display: contents;
          }
          .car-list-table-details1 {
            text-decoration: none;
          }
          .car-list-table-link12 {
            display: contents;
          }
          .car-list-table-edit1 {
            text-decoration: none;
          }
          .car-list-table-container15 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .car-list-table-link13 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: 0px;
            text-decoration: none;
          }
          .car-list-table-car-no3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-license-plate2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-province3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-regis-date3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-center3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-division3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-date-tax-expired3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-regis3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-tax-now3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-check3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cng-cost3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-status3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-container16 {
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .car-list-table-link14 {
            display: contents;
          }
          .car-list-table-details2 {
            text-decoration: none;
          }
          .car-list-table-link15 {
            display: contents;
          }
          .car-list-table-edit2 {
            text-decoration: none;
          }
          .car-list-table-container17 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .car-list-table-link16 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: 0px;
            text-decoration: none;
          }
          .car-list-table-car-no4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-license-plate3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-province4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-regis-date4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-center4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-division4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-date-tax-expired4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-regis4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-tax-now4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-check4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cng-cost4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-status4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-container18 {
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .car-list-table-link17 {
            display: contents;
          }
          .car-list-table-details3 {
            text-decoration: none;
          }
          .car-list-table-link18 {
            display: contents;
          }
          .car-list-table-edit3 {
            text-decoration: none;
          }
          .car-list-table-container19 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .car-list-table-link19 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: 0px;
            text-decoration: none;
          }
          .car-list-table-car-no5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-license-plate4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-province5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-regis-date5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-center5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-division5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-date-tax-expired5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-regis5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-tax-now5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cost-check5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-cng-cost5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-status5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-list-table-container20 {
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .car-list-table-link20 {
            display: contents;
          }
          .car-list-table-details4 {
            text-decoration: none;
          }
          .car-list-table-link21 {
            display: contents;
          }
          .car-list-table-edit4 {
            text-decoration: none;
          }
          .car-list-table-text10 {
            display: inline-block;
          }
          .car-list-table-text11 {
            display: inline-block;
          }
          .car-list-table-text12 {
            display: inline-block;
            text-decoration: underline;
          }
          .car-list-table-text13 {
            display: inline-block;
          }
          .car-list-table-text14 {
            display: inline-block;
            text-decoration: underline;
          }
          .car-list-table-text15 {
            display: inline-block;
          }
          .car-list-table-text16 {
            display: inline-block;
          }
          .car-list-table-text17 {
            display: inline-block;
          }
          .car-list-table-text18 {
            display: inline-block;
          }
          .car-list-table-text19 {
            display: inline-block;
          }
          .car-list-table-text20 {
            display: inline-block;
          }
          .car-list-table-text21 {
            display: inline-block;
          }
          .car-list-table-text22 {
            display: inline-block;
          }
          .car-list-table-text23 {
            display: inline-block;
          }
          .car-list-table-text24 {
            display: inline-block;
          }
          .car-list-table-text25 {
            display: inline-block;
          }
          .car-list-table-text26 {
            display: inline-block;
          }
          .car-list-table-text27 {
            display: inline-block;
          }
          .car-list-table-text28 {
            display: inline-block;
            text-decoration: underline;
          }
          .car-list-table-text29 {
            display: inline-block;
          }
          .car-list-table-text30 {
            display: inline-block;
          }
          .car-list-table-text31 {
            display: inline-block;
          }
          .car-list-table-text32 {
            display: inline-block;
          }
          .car-list-table-text33 {
            display: inline-block;
          }
          .car-list-table-text34 {
            display: inline-block;
          }
          .car-list-table-text35 {
            display: inline-block;
          }
          .car-list-table-text36 {
            display: inline-block;
          }
          .car-list-table-text37 {
            display: inline-block;
          }
          .car-list-table-text38 {
            display: inline-block;
          }
          .car-list-table-text39 {
            display: inline-block;
          }
          .car-list-table-text40 {
            display: inline-block;
          }
          .car-list-table-text41 {
            display: inline-block;
          }
          .car-list-table-text42 {
            display: inline-block;
          }
          .car-list-table-text43 {
            display: inline-block;
            text-decoration: underline;
          }
          .car-list-table-text44 {
            display: inline-block;
          }
          .car-list-table-text45 {
            display: inline-block;
          }
          .car-list-table-text46 {
            display: inline-block;
          }
          .car-list-table-text47 {
            display: inline-block;
          }
          .car-list-table-text48 {
            display: inline-block;
          }
          .car-list-table-text49 {
            display: inline-block;
          }
          .car-list-table-text50 {
            display: inline-block;
          }
          .car-list-table-text51 {
            display: inline-block;
          }
          .car-list-table-text52 {
            display: inline-block;
          }
          .car-list-table-text53 {
            display: inline-block;
          }
          .car-list-table-text54 {
            display: inline-block;
          }
          .car-list-table-text55 {
            display: inline-block;
          }
          .car-list-table-text56 {
            display: inline-block;
          }
          .car-list-table-text57 {
            display: inline-block;
          }
          .car-list-table-text58 {
            display: inline-block;
          }
          .car-list-table-text59 {
            display: inline-block;
          }
          .car-list-table-text60 {
            display: inline-block;
          }
          .car-list-table-text61 {
            display: inline-block;
          }
          .car-list-table-text62 {
            display: inline-block;
          }
          .car-list-table-text63 {
            display: inline-block;
          }
          .car-list-table-text64 {
            display: inline-block;
          }
          .car-list-table-text65 {
            display: inline-block;
          }
          .car-list-table-text66 {
            display: inline-block;
          }
          .car-list-table-text67 {
            display: inline-block;
          }
          .car-list-table-text68 {
            display: inline-block;
          }
          .car-list-table-text69 {
            display: inline-block;
          }
          .car-list-table-text70 {
            display: inline-block;
          }
          .car-list-table-text71 {
            display: inline-block;
          }
          .car-list-table-text72 {
            display: inline-block;
          }
          .car-list-table-text73 {
            display: inline-block;
          }
          .car-list-table-text74 {
            display: inline-block;
          }
          .car-list-table-text75 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .car-list-table-equipment1 {
              color: #000000;
              padding-bottom: 0px;
            }
            .car-list-table-car-no1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-licenseplate {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-province1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-division1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-status1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-action {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-link10 {
              color: #000000;
              padding-bottom: 0px;
            }
            .car-list-table-car-no2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-license-plate1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-province2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-division2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-status2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-link13 {
              color: #000000;
              padding-bottom: 0px;
            }
            .car-list-table-car-no3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-license-plate2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-province3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-division3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-status3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-link16 {
              color: #000000;
              padding-bottom: 0px;
            }
            .car-list-table-car-no4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-license-plate3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-province4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-division4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-status4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-link19 {
              color: #000000;
              padding-bottom: 0px;
            }
            .car-list-table-car-no5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-license-plate4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-province5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-division5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-list-table-status5 {
              color: #000000;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 1400px) {
            .car-list-table-equipment1 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .car-list-table-car-no1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-licenseplate {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-province1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-division1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-status1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-action {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-link10 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .car-list-table-car-no2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-license-plate1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-province2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-division2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-status2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-link13 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .car-list-table-car-no3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-license-plate2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-province3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-division3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-status3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-link16 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .car-list-table-car-no4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-license-plate3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-province4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-division4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-status4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-link19 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .car-list-table-car-no5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-license-plate4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-province5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-regis-date5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-center5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-division5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-date-tax-expired5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-regis5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-tax-now5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cost-check5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-cng-cost5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-list-table-status5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 1000px) {
            .car-list-table-container12 {
              width: 100%;
            }
            .car-list-table-container13 {
              width: 100%;
            }
            .car-list-table-container15 {
              width: 100%;
            }
            .car-list-table-container17 {
              width: 100%;
            }
            .car-list-table-container19 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .car-list-table-car-no1 {
              align-self: center;
            }
            .car-list-table-licenseplate {
              align-self: center;
            }
            .car-list-table-province1 {
              align-self: center;
            }
            .car-list-table-regis-date1 {
              align-self: center;
            }
            .car-list-table-cost-center1 {
              align-self: center;
            }
            .car-list-table-division1 {
              align-self: center;
            }
            .car-list-table-date-tax-expired1 {
              align-self: center;
            }
            .car-list-table-cost-regis1 {
              align-self: center;
            }
            .car-list-table-tax-now1 {
              align-self: center;
            }
            .car-list-table-cost-check1 {
              align-self: center;
            }
            .car-list-table-cng-cost1 {
              align-self: center;
            }
            .car-list-table-status1 {
              align-self: center;
            }
            .car-list-table-action {
              align-self: center;
            }
            .car-list-table-car-no2 {
              align-self: center;
            }
            .car-list-table-license-plate1 {
              align-self: center;
            }
            .car-list-table-province2 {
              align-self: center;
            }
            .car-list-table-regis-date2 {
              align-self: center;
            }
            .car-list-table-cost-center2 {
              align-self: center;
            }
            .car-list-table-division2 {
              align-self: center;
            }
            .car-list-table-date-tax-expired2 {
              align-self: center;
            }
            .car-list-table-cost-regis2 {
              align-self: center;
            }
            .car-list-table-tax-now2 {
              align-self: center;
            }
            .car-list-table-cost-check2 {
              align-self: center;
            }
            .car-list-table-cng-cost2 {
              align-self: center;
            }
            .car-list-table-status2 {
              align-self: center;
            }
            .car-list-table-car-no3 {
              align-self: center;
            }
            .car-list-table-license-plate2 {
              align-self: center;
            }
            .car-list-table-province3 {
              align-self: center;
            }
            .car-list-table-regis-date3 {
              align-self: center;
            }
            .car-list-table-cost-center3 {
              align-self: center;
            }
            .car-list-table-division3 {
              align-self: center;
            }
            .car-list-table-date-tax-expired3 {
              align-self: center;
            }
            .car-list-table-cost-regis3 {
              align-self: center;
            }
            .car-list-table-tax-now3 {
              align-self: center;
            }
            .car-list-table-cost-check3 {
              align-self: center;
            }
            .car-list-table-cng-cost3 {
              align-self: center;
            }
            .car-list-table-status3 {
              align-self: center;
            }
            .car-list-table-car-no4 {
              align-self: center;
            }
            .car-list-table-license-plate3 {
              align-self: center;
            }
            .car-list-table-province4 {
              align-self: center;
            }
            .car-list-table-regis-date4 {
              align-self: center;
            }
            .car-list-table-cost-center4 {
              align-self: center;
            }
            .car-list-table-division4 {
              align-self: center;
            }
            .car-list-table-date-tax-expired4 {
              align-self: center;
            }
            .car-list-table-cost-regis4 {
              align-self: center;
            }
            .car-list-table-tax-now4 {
              align-self: center;
            }
            .car-list-table-cost-check4 {
              align-self: center;
            }
            .car-list-table-cng-cost4 {
              align-self: center;
            }
            .car-list-table-status4 {
              align-self: center;
            }
            .car-list-table-car-no5 {
              align-self: center;
            }
            .car-list-table-license-plate4 {
              align-self: center;
            }
            .car-list-table-province5 {
              align-self: center;
            }
            .car-list-table-regis-date5 {
              align-self: center;
            }
            .car-list-table-cost-center5 {
              align-self: center;
            }
            .car-list-table-division5 {
              align-self: center;
            }
            .car-list-table-date-tax-expired5 {
              align-self: center;
            }
            .car-list-table-cost-regis5 {
              align-self: center;
            }
            .car-list-table-tax-now5 {
              align-self: center;
            }
            .car-list-table-cost-check5 {
              align-self: center;
            }
            .car-list-table-cng-cost5 {
              align-self: center;
            }
            .car-list-table-status5 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .car-list-table-equipment1 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .car-list-table-car-no1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-licenseplate {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-province1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-regis-date1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-center1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-division1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-date-tax-expired1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-regis1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-tax-now1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-check1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cng-cost1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-status1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-action {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-link10 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .car-list-table-car-no2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-license-plate1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-province2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-regis-date2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-center2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-division2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-date-tax-expired2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-regis2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-tax-now2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-check2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cng-cost2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-status2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-link13 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .car-list-table-car-no3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-license-plate2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-province3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-regis-date3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-center3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-division3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-date-tax-expired3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-regis3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-tax-now3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-check3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cng-cost3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-status3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-link16 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .car-list-table-car-no4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-license-plate3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-province4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-regis-date4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-center4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-division4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-date-tax-expired4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-regis4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-tax-now4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-check4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cng-cost4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-status4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-link19 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .car-list-table-car-no5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-license-plate4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-province5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-regis-date5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-center5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-division5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-date-tax-expired5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-regis5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-tax-now5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cost-check5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-cng-cost5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-list-table-status5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 390px) {
            .car-list-table-equipment1 {
              align-self: center;
              text-align: center;
            }
            .car-list-table-link10 {
              align-self: center;
              text-align: center;
            }
            .car-list-table-link13 {
              align-self: center;
              text-align: center;
            }
            .car-list-table-link16 {
              align-self: center;
              text-align: center;
            }
            .car-list-table-link19 {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

CarListTable.defaultProps = {
  dateDetermine11: undefined,
  dateDetermine1111: undefined,
  rootClassName: '',
  carNumber115311: undefined,
  collectorName1: undefined,
  carNumber115: undefined,
  dateDetermine1111111111125311: undefined,
  dateDetermine1111111253: undefined,
  dateDetermine125: undefined,
  dateDetermine1111253: undefined,
  dateDetermine11111111111115311: undefined,
  dateDetermine111: undefined,
  dateDetermine125311: undefined,
  dateDetermine11111253: undefined,
  dateDetermine11111111125311: undefined,
  dateDetermine111111111111153: undefined,
  dateDetermine11111112531: undefined,
  collectorName115: undefined,
  collectorName11531: undefined,
  carNumber1153: undefined,
  dateDetermine1125311: undefined,
  dateDetermine111111111112531: undefined,
  dateDetermine1111125: undefined,
  dateDetermine111112531: undefined,
  dateDetermine111111125: undefined,
  dateDetermine11111125311: undefined,
  dateDetermine11111: undefined,
  dateDetermine1111111125311: undefined,
  dateDetermine11112531: undefined,
  dateDetermine111111: undefined,
  dateDetermine111125311: undefined,
  dateDetermine111125: undefined,
  dateDetermine111111112531: undefined,
  dateDetermine11111125: undefined,
  carNumber11531: undefined,
  dateDetermine111111111253: undefined,
  carNumber1: undefined,
  dateDetermine1111111111111531: undefined,
  dateDetermine11111111112531: undefined,
  dateDetermine111111111: undefined,
  dateDetermine1111111111115: undefined,
  dateDetermine12531: undefined,
  dateDetermine11111111111115: undefined,
  dateDetermine1111111111: undefined,
  dateDetermine1111111111125: undefined,
  dateDetermine11253: undefined,
  dateDetermine111111111125: undefined,
  dateDetermine1253: undefined,
  dateDetermine11111111253: undefined,
  dateDetermine1111111125: undefined,
  dateDetermine1111111: undefined,
  dateDetermine1: undefined,
  dateDetermine11111111125: undefined,
  dateDetermine1111111112531: undefined,
  dateDetermine1111112531: undefined,
  dateDetermine1125: undefined,
  dateDetermine112531: undefined,
  dateDetermine11111111111: undefined,
  dateDetermine1111111111253: undefined,
  dateDetermine11111111111253: undefined,
  dateDetermine11111111: undefined,
  dateDetermine111111125311: undefined,
  dateDetermine111111111125311: undefined,
  dateDetermine1111125311: undefined,
  dateDetermine111111253: undefined,
  collectorName1153: undefined,
  collectorName115311: undefined,
}

CarListTable.propTypes = {
  dateDetermine11: PropTypes.element,
  dateDetermine1111: PropTypes.element,
  rootClassName: PropTypes.string,
  carNumber115311: PropTypes.element,
  collectorName1: PropTypes.element,
  carNumber115: PropTypes.element,
  dateDetermine1111111111125311: PropTypes.element,
  dateDetermine1111111253: PropTypes.element,
  dateDetermine125: PropTypes.element,
  dateDetermine1111253: PropTypes.element,
  dateDetermine11111111111115311: PropTypes.element,
  dateDetermine111: PropTypes.element,
  dateDetermine125311: PropTypes.element,
  dateDetermine11111253: PropTypes.element,
  dateDetermine11111111125311: PropTypes.element,
  dateDetermine111111111111153: PropTypes.element,
  dateDetermine11111112531: PropTypes.element,
  collectorName115: PropTypes.element,
  collectorName11531: PropTypes.element,
  carNumber1153: PropTypes.element,
  dateDetermine1125311: PropTypes.element,
  dateDetermine111111111112531: PropTypes.element,
  dateDetermine1111125: PropTypes.element,
  dateDetermine111112531: PropTypes.element,
  dateDetermine111111125: PropTypes.element,
  dateDetermine11111125311: PropTypes.element,
  dateDetermine11111: PropTypes.element,
  dateDetermine1111111125311: PropTypes.element,
  dateDetermine11112531: PropTypes.element,
  dateDetermine111111: PropTypes.element,
  dateDetermine111125311: PropTypes.element,
  dateDetermine111125: PropTypes.element,
  dateDetermine111111112531: PropTypes.element,
  dateDetermine11111125: PropTypes.element,
  carNumber11531: PropTypes.element,
  dateDetermine111111111253: PropTypes.element,
  carNumber1: PropTypes.element,
  dateDetermine1111111111111531: PropTypes.element,
  dateDetermine11111111112531: PropTypes.element,
  dateDetermine111111111: PropTypes.element,
  dateDetermine1111111111115: PropTypes.element,
  dateDetermine12531: PropTypes.element,
  dateDetermine11111111111115: PropTypes.element,
  dateDetermine1111111111: PropTypes.element,
  dateDetermine1111111111125: PropTypes.element,
  dateDetermine11253: PropTypes.element,
  dateDetermine111111111125: PropTypes.element,
  dateDetermine1253: PropTypes.element,
  dateDetermine11111111253: PropTypes.element,
  dateDetermine1111111125: PropTypes.element,
  dateDetermine1111111: PropTypes.element,
  dateDetermine1: PropTypes.element,
  dateDetermine11111111125: PropTypes.element,
  dateDetermine1111111112531: PropTypes.element,
  dateDetermine1111112531: PropTypes.element,
  dateDetermine1125: PropTypes.element,
  dateDetermine112531: PropTypes.element,
  dateDetermine11111111111: PropTypes.element,
  dateDetermine1111111111253: PropTypes.element,
  dateDetermine11111111111253: PropTypes.element,
  dateDetermine11111111: PropTypes.element,
  dateDetermine111111125311: PropTypes.element,
  dateDetermine111111111125311: PropTypes.element,
  dateDetermine1111125311: PropTypes.element,
  dateDetermine111111253: PropTypes.element,
  collectorName1153: PropTypes.element,
  collectorName115311: PropTypes.element,
}

export default CarListTable
