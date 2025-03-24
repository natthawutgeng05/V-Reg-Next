import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailsdetails = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`car-detailsdetails-container10 ${props.rootClassName} `}>
        <div className="car-detailsdetails-container11">
          <div className="car-detailsdetails-container12">
            <Link href="/vehicle-registration-details">
              <a className="car-detailsdetails-link1">
                {props.text4 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text49">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_GTzz5h'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-owner">
              <a className="car-detailsdetails-link2">
                {props.text22 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text52">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_OuijmI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-tax">
              <a className="car-detailsdetails-link3">
                {props.text212 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_AVSidu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-changeproperties">
              <a className="car-detailsdetails-link4">
                {props.text2112 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_iL48Oe'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-regis-car">
              <a className="car-detailsdetails-link5">
                {props.text21112 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__U2xwF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-cancel">
              <a className="car-detailsdetails-link6">
                {props.text211112 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text48">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_h0aFYs'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-transfer">
              <a className="car-detailsdetails-link7">
                {props.text2111112 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gyzePT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-others">
              <a className="car-detailsdetails-link8">
                {props.text21111111 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_fEkly5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </div>
          <div className="car-detailsdetails-container13">
            <div className="car-detailsdetails-container14">
              <h3 className="car-detailsdetails-text18">
                {props.heading ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text51">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7uppDD'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="input"
              />
            </div>
            <div className="car-detailsdetails-container15">
              <h3 className="car-detailsdetails-text19">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5mh5Qv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                disabled
                placeholder={props.textinputPlaceholder1}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailsdetails-container16">
            <div className="car-detailsdetails-container17">
              <h3 className="car-detailsdetails-text20">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text50">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0J3uMI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder2}
                className="input"
              />
            </div>
            <div className="car-detailsdetails-container18">
              <h3 className="car-detailsdetails-text21">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text46">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5Whyog'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                disabled
                placeholder={props.textinputPlaceholder11}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailsdetails-container19">
            <div className="car-detailsdetails-container110">
              <h3 className="car-detailsdetails-text22">
                {props.heading21 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text55">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-eg0jb'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                disabled
                placeholder={props.textinputPlaceholder21}
                className="input"
              />
            </div>
            <div className="car-detailsdetails-container111">
              <h3 className="car-detailsdetails-text23">
                {props.heading111 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_JhQpM2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder111}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailsdetails-container20">
            <div className="car-detailsdetails-container112">
              <h3 className="car-detailsdetails-text24">
                {props.heading211 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text54">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_OlWmsg'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder211}
                className="input"
              />
            </div>
            <div className="car-detailsdetails-container113">
              <h3 className="car-detailsdetails-text25">
                {props.heading1111 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4HWAnY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder1111}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailsdetails-container21">
            <div className="car-detailsdetails-container114">
              <h3 className="car-detailsdetails-text26">
                {props.heading2111 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_GfpIyx'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder2111}
                className="car-detailsdetails-textinput18 input"
              />
              <input
                type="file"
                placeholder={props.textinputPlaceholder3}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailsdetails-container22">
            <ul className="car-detailsdetails-ul list">
              <li className="car-detailsdetails-li1 list-item">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fkHJg3'),
                    }}
                  ></span>
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M3 3a1 1 0 0 0-1 1v3h7.586L12 4.586L10.414 3zm11.414 2l-4 4H2v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_iwej6X'),
                    }}
                  ></span>
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_L_35tB'),
                    }}
                  ></span>
                </span>
              </li>
              <li className="list-item">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gpbp6p'),
                    }}
                  ></span>
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M3 3a1 1 0 0 0-1 1v3h7.586L12 4.586L10.414 3zm11.414 2l-4 4H2v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EBw89n'),
                    }}
                  ></span>
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_G4nYqO'),
                    }}
                  ></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="car-detailsdetails-container23">
            <button type="button" className="car-detailsdetails-button1 button">
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_F2y8Wn'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button type="button" className="car-detailsdetails-button2 button">
              <span>
                {props.button41 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text53">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_f9YrUN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="car-detailsdetails-container24">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="car-detailsdetails-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_qgqBsr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <svg width="48" height="48" viewBox="0 0 48 48">
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
                  <path d="M14 26.72V34h7.317L42 13.308L34.695 6z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .car-detailsdetails-container10 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-detailsdetails-container11 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-detailsdetails-container12 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            overflow: visible;
            align-self: center;
            align-items: flex-start;
            border-radius: 16px;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: flex-start;
            background-color: #d9d9d9;
          }
          .car-detailsdetails-link1 {
            display: flex;
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsdetails-link1:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link1:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsdetails-link2:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link2:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link3 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsdetails-link3:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link3:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link4 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsdetails-link4:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link4:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link5 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsdetails-link5:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link5:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link6 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsdetails-link6:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link6:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link7 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsdetails-link7:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link7:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link8 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsdetails-link8:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsdetails-link8:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsdetails-container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsdetails-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsdetails-text18 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsdetails-text19 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-container16 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsdetails-container17 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsdetails-text20 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-container18 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsdetails-text21 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-container19 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsdetails-container110 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsdetails-text22 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-container111 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsdetails-text23 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-container20 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsdetails-container112 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsdetails-text24 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-container113 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsdetails-text25 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-container21 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsdetails-container114 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsdetails-text26 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsdetails-textinput18 {
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsdetails-container22 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsdetails-ul {
            align-self: center;
            list-style-type: disc;
          }
          .car-detailsdetails-li1 {
            list-style-image: none;
            list-style-position: outside;
          }
          .car-detailsdetails-container23 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsdetails-button1 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #6bab8d;
          }
          .car-detailsdetails-button2 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #dc1717;
          }
          .car-detailsdetails-container24 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
          }
          .car-detailsdetails-text36 {
            display: inline-block;
          }
          .car-detailsdetails-text37 {
            display: inline-block;
          }
          .car-detailsdetails-text38 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .car-detailsdetails-text39 {
            display: inline-block;
          }
          .car-detailsdetails-text40 {
            display: inline-block;
          }
          .car-detailsdetails-text41 {
            display: inline-block;
          }
          .car-detailsdetails-text42 {
            display: inline-block;
          }
          .car-detailsdetails-text43 {
            display: inline-block;
          }
          .car-detailsdetails-text44 {
            display: inline-block;
          }
          .car-detailsdetails-text45 {
            display: inline-block;
          }
          .car-detailsdetails-text46 {
            display: inline-block;
          }
          .car-detailsdetails-text47 {
            display: inline-block;
          }
          .car-detailsdetails-text48 {
            display: inline-block;
          }
          .car-detailsdetails-text49 {
            display: inline-block;
          }
          .car-detailsdetails-text50 {
            display: inline-block;
          }
          .car-detailsdetails-text51 {
            display: inline-block;
          }
          .car-detailsdetails-text52 {
            display: inline-block;
          }
          .car-detailsdetails-text53 {
            display: inline-block;
          }
          .car-detailsdetails-text54 {
            display: inline-block;
          }
          .car-detailsdetails-text55 {
            display: inline-block;
          }

          @media (max-width: 1000px) {
            .car-detailsdetails-container11 {
              width: 100%;
              overflow: scroll;
            }
          }
        `}
      </style>
    </>
  )
}

CarDetailsdetails.defaultProps = {
  heading111: undefined,
  button4: undefined,
  textinputPlaceholder11: 'placeholder',
  text3: undefined,
  text2112: undefined,
  heading2111: undefined,
  heading1: undefined,
  textinputPlaceholder211: 'placeholder',
  textinputPlaceholder2111: 'placeholder',
  text21111111: undefined,
  heading1111: undefined,
  text21112: undefined,
  text2111112: undefined,
  textinputPlaceholder111: 'placeholder',
  heading11: undefined,
  rootClassName: '',
  textinputPlaceholder: 'placeholder',
  textinputPlaceholder2: 'placeholder',
  text212: undefined,
  text211112: undefined,
  text4: undefined,
  heading2: undefined,
  heading: undefined,
  text22: undefined,
  button41: undefined,
  textinputPlaceholder1: 'placeholder',
  heading211: undefined,
  textinputPlaceholder3: 'placeholder',
  textinputPlaceholder1111: 'placeholder',
  textinputPlaceholder21: 'placeholder',
  heading21: undefined,
}

CarDetailsdetails.propTypes = {
  heading111: PropTypes.element,
  button4: PropTypes.element,
  textinputPlaceholder11: PropTypes.string,
  text3: PropTypes.element,
  text2112: PropTypes.element,
  heading2111: PropTypes.element,
  heading1: PropTypes.element,
  textinputPlaceholder211: PropTypes.string,
  textinputPlaceholder2111: PropTypes.string,
  text21111111: PropTypes.element,
  heading1111: PropTypes.element,
  text21112: PropTypes.element,
  text2111112: PropTypes.element,
  textinputPlaceholder111: PropTypes.string,
  heading11: PropTypes.element,
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  text212: PropTypes.element,
  text211112: PropTypes.element,
  text4: PropTypes.element,
  heading2: PropTypes.element,
  heading: PropTypes.element,
  text22: PropTypes.element,
  button41: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  heading211: PropTypes.element,
  textinputPlaceholder3: PropTypes.string,
  textinputPlaceholder1111: PropTypes.string,
  textinputPlaceholder21: PropTypes.string,
  heading21: PropTypes.element,
}

export default CarDetailsdetails
