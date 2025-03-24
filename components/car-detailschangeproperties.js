import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailschangeproperties = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`car-detailschangeproperties-container10 ${props.rootClassName} `}
      >
        <div className="car-detailschangeproperties-container11">
          <div className="car-detailschangeproperties-container12">
            <Link href="/vehicle-registration-details">
              <a className="car-detailschangeproperties-link1">
                {props.text1 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text46">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5kUqcf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-owner">
              <a className="car-detailschangeproperties-link2">
                {props.text22 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text49">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_pBccTT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-tax">
              <a className="car-detailschangeproperties-link3">
                {props.text212 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_oX8vCs'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-changeproperties">
              <a className="car-detailschangeproperties-link4">
                {props.text2112 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text66">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_BAJVQ_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-regis-car">
              <a className="car-detailschangeproperties-link5">
                {props.text21112 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XjmmTf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-cancel">
              <a className="car-detailschangeproperties-link6">
                {props.text211112 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KcN-fa'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-transfer">
              <a className="car-detailschangeproperties-link7">
                {props.text2111112 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text64">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vMcaNf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-others">
              <a className="car-detailschangeproperties-link8">
                {props.text21111111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text51">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_uGBp9I'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </div>
          <div className="car-detailschangeproperties-container13">
            <div className="car-detailschangeproperties-container110">
              <h3 className="car-detailschangeproperties-text18">
                {props.heading ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text56">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KQpVqJ'),
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
            <div className="car-detailschangeproperties-container111">
              <h3 className="car-detailschangeproperties-text19">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text48">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-b5cRt'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                disabled
                placeholder={props.textinputPlaceholder1}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container14">
            <div className="car-detailschangeproperties-container112">
              <h3 className="car-detailschangeproperties-text20">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__EtjqS'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                placeholder={props.textinputPlaceholder2}
                className="input"
              />
            </div>
            <div className="car-detailschangeproperties-container113">
              <h3 className="car-detailschangeproperties-text21">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text65">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DjEPrO'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                disabled
                placeholder={props.textinputPlaceholder11}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container15">
            <div className="car-detailschangeproperties-container114">
              <h3 className="car-detailschangeproperties-text22">
                {props.heading21 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text50">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bn0lbA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                disabled
                placeholder={props.textinputPlaceholder21}
                className="input"
              />
            </div>
            <div className="car-detailschangeproperties-container115">
              <h3 className="car-detailschangeproperties-text23">
                {props.heading111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-SdnN3'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                placeholder={props.textinputPlaceholder111}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container16">
            <div className="car-detailschangeproperties-container116">
              <h3 className="car-detailschangeproperties-text24">
                {props.heading211 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text55">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_PKTSnz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                placeholder={props.textinputPlaceholder211}
                className="input"
              />
            </div>
            <div className="car-detailschangeproperties-container117">
              <h3 className="car-detailschangeproperties-text25">
                {props.heading1111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text58">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_zWh-OI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                placeholder={props.textinputPlaceholder1111}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container17">
            <div className="car-detailschangeproperties-container118">
              <h3 className="car-detailschangeproperties-text26">
                {props.heading2111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text52">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9B-qRr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                placeholder={props.textinputPlaceholder2111}
                className="input"
              />
            </div>
            <div className="car-detailschangeproperties-container119">
              <h3 className="car-detailschangeproperties-text27">
                {props.heading11111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text67">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7h4yH3'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                placeholder={props.textinputPlaceholder11111}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container18">
            <div className="car-detailschangeproperties-container120">
              <h3 className="car-detailschangeproperties-text28">
                {props.heading21111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text54">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XTJ09O'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder21111}
                className="input"
              />
            </div>
            <div className="car-detailschangeproperties-container121">
              <h3 className="car-detailschangeproperties-text29">
                {props.heading111111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eaZgMd'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                placeholder={props.textinputPlaceholder111111}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container19">
            <div className="car-detailschangeproperties-container122">
              <h3 className="car-detailschangeproperties-text30">
                {props.heading211111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text62">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ShA15P'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder211111}
                className="input"
              />
            </div>
            <div className="car-detailschangeproperties-container123">
              <h3 className="car-detailschangeproperties-text31">
                {props.heading1111111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text57">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_GBfIaL'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder1111111}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container20">
            <div className="car-detailschangeproperties-container124">
              <h3 className="car-detailschangeproperties-text32">
                {props.heading2111111 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text60">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9rwLWq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
            </div>
          </div>
          <div className="car-detailschangeproperties-container21">
            <div className="car-detailschangeproperties-container125">
              <h3 className="car-detailschangeproperties-text33">
                {props.heading2111112 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text61">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2lUBN-'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                placeholder={props.textinputPlaceholder2111112}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container22">
            <div className="car-detailschangeproperties-container126">
              <h3 className="car-detailschangeproperties-text34">
                {props.heading21111121 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text59">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_lh7wB6'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="car-detailschangeproperties-image1"
              />
            </div>
            <div className="car-detailschangeproperties-container127">
              <h3 className="car-detailschangeproperties-text35">
                {props.heading211111211 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text63">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_IGfCTM'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="car-detailschangeproperties-image2"
              />
            </div>
          </div>
          <div className="car-detailschangeproperties-container23">
            <button
              type="button"
              className="car-detailschangeproperties-button1 button"
            >
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4U53T7'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="car-detailschangeproperties-button2 button"
            >
              <span>
                {props.button41 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eiCJ9c'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="car-detailschangeproperties-container24">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="car-detailschangeproperties-text53">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1M6lIK'),
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
          .car-detailschangeproperties-container10 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-detailschangeproperties-container11 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-detailschangeproperties-container12 {
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
          .car-detailschangeproperties-link1 {
            display: flex;
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailschangeproperties-link1:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link1:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailschangeproperties-link2:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link2:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link3 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailschangeproperties-link3:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link3:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link4 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailschangeproperties-link4:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link4:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link5 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailschangeproperties-link5:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link5:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link6 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailschangeproperties-link6:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link6:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link7 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailschangeproperties-link7:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link7:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link8 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailschangeproperties-link8:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-link8:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailschangeproperties-container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container110 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text18 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container111 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailschangeproperties-text19 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container112 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text20 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container113 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailschangeproperties-text21 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container114 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text22 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container115 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailschangeproperties-text23 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container16 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container116 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text24 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container117 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailschangeproperties-text25 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container17 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container118 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text26 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container119 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailschangeproperties-text27 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container18 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container120 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text28 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container121 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailschangeproperties-text29 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container19 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container122 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text30 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container123 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailschangeproperties-text31 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container20 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container124 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text32 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container21 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container125 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text33 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-container22 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-container126 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text34 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-image1 {
            width: 200px;
            object-fit: cover;
          }
          .car-detailschangeproperties-container127 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailschangeproperties-text35 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailschangeproperties-image2 {
            width: 200px;
            object-fit: cover;
          }
          .car-detailschangeproperties-container23 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailschangeproperties-button1 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #6bab8d;
          }
          .car-detailschangeproperties-button2 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #dc1717;
          }
          .car-detailschangeproperties-container24 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
          }
          .car-detailschangeproperties-text39 {
            display: inline-block;
          }
          .car-detailschangeproperties-text40 {
            display: inline-block;
          }
          .car-detailschangeproperties-text41 {
            display: inline-block;
          }
          .car-detailschangeproperties-text42 {
            display: inline-block;
          }
          .car-detailschangeproperties-text43 {
            display: inline-block;
          }
          .car-detailschangeproperties-text44 {
            display: inline-block;
          }
          .car-detailschangeproperties-text45 {
            display: inline-block;
          }
          .car-detailschangeproperties-text46 {
            display: inline-block;
          }
          .car-detailschangeproperties-text47 {
            display: inline-block;
          }
          .car-detailschangeproperties-text48 {
            display: inline-block;
          }
          .car-detailschangeproperties-text49 {
            display: inline-block;
          }
          .car-detailschangeproperties-text50 {
            display: inline-block;
          }
          .car-detailschangeproperties-text51 {
            display: inline-block;
          }
          .car-detailschangeproperties-text52 {
            display: inline-block;
          }
          .car-detailschangeproperties-text53 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .car-detailschangeproperties-text54 {
            display: inline-block;
          }
          .car-detailschangeproperties-text55 {
            display: inline-block;
          }
          .car-detailschangeproperties-text56 {
            display: inline-block;
          }
          .car-detailschangeproperties-text57 {
            display: inline-block;
          }
          .car-detailschangeproperties-text58 {
            display: inline-block;
          }
          .car-detailschangeproperties-text59 {
            display: inline-block;
          }
          .car-detailschangeproperties-text60 {
            display: inline-block;
          }
          .car-detailschangeproperties-text61 {
            display: inline-block;
          }
          .car-detailschangeproperties-text62 {
            display: inline-block;
          }
          .car-detailschangeproperties-text63 {
            display: inline-block;
          }
          .car-detailschangeproperties-text64 {
            display: inline-block;
          }
          .car-detailschangeproperties-text65 {
            display: inline-block;
          }
          .car-detailschangeproperties-text66 {
            display: inline-block;
          }
          .car-detailschangeproperties-text67 {
            display: inline-block;
          }

          @media (max-width: 1000px) {
            .car-detailschangeproperties-container11 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CarDetailschangeproperties.defaultProps = {
  text21112: undefined,
  heading111: undefined,
  text212: undefined,
  text211112: undefined,
  textinputPlaceholder111111: 'placeholder',
  textinputPlaceholder1: 'placeholder',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading111111: undefined,
  button4: undefined,
  button41: undefined,
  text1: undefined,
  heading2: undefined,
  heading1: undefined,
  text22: undefined,
  textinputPlaceholder21111: 'placeholder',
  heading21: undefined,
  textinputPlaceholder21: 'placeholder',
  text21111111: undefined,
  textinputPlaceholder: 'placeholder',
  textinputPlaceholder111: 'placeholder',
  rootClassName: '',
  heading2111: undefined,
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  textinputPlaceholder211111: 'placeholder',
  textinputPlaceholder2111: 'placeholder',
  text3: undefined,
  heading21111: undefined,
  textinputPlaceholder2: 'placeholder',
  heading211: undefined,
  textinputPlaceholder2111112: 'placeholder',
  textinputPlaceholder1111111: 'placeholder',
  heading: undefined,
  heading1111111: undefined,
  textinputPlaceholder211: 'placeholder',
  heading1111: undefined,
  heading21111121: undefined,
  heading2111111: undefined,
  heading2111112: undefined,
  heading211111: undefined,
  heading211111211: undefined,
  textinputPlaceholder11111: 'placeholder',
  text2111112: undefined,
  heading11: undefined,
  textinputPlaceholder1111: 'placeholder',
  textinputPlaceholder11: 'placeholder',
  imageAlt: 'image',
  imageAlt1: 'image',
  text2112: undefined,
  heading11111: undefined,
}

CarDetailschangeproperties.propTypes = {
  text21112: PropTypes.element,
  heading111: PropTypes.element,
  text212: PropTypes.element,
  text211112: PropTypes.element,
  textinputPlaceholder111111: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  imageSrc1: PropTypes.string,
  heading111111: PropTypes.element,
  button4: PropTypes.element,
  button41: PropTypes.element,
  text1: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  text22: PropTypes.element,
  textinputPlaceholder21111: PropTypes.string,
  heading21: PropTypes.element,
  textinputPlaceholder21: PropTypes.string,
  text21111111: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder111: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2111: PropTypes.element,
  imageSrc: PropTypes.string,
  textinputPlaceholder211111: PropTypes.string,
  textinputPlaceholder2111: PropTypes.string,
  text3: PropTypes.element,
  heading21111: PropTypes.element,
  textinputPlaceholder2: PropTypes.string,
  heading211: PropTypes.element,
  textinputPlaceholder2111112: PropTypes.string,
  textinputPlaceholder1111111: PropTypes.string,
  heading: PropTypes.element,
  heading1111111: PropTypes.element,
  textinputPlaceholder211: PropTypes.string,
  heading1111: PropTypes.element,
  heading21111121: PropTypes.element,
  heading2111111: PropTypes.element,
  heading2111112: PropTypes.element,
  heading211111: PropTypes.element,
  heading211111211: PropTypes.element,
  textinputPlaceholder11111: PropTypes.string,
  text2111112: PropTypes.element,
  heading11: PropTypes.element,
  textinputPlaceholder1111: PropTypes.string,
  textinputPlaceholder11: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  text2112: PropTypes.element,
  heading11111: PropTypes.element,
}

export default CarDetailschangeproperties
