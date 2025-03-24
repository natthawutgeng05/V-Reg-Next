import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailsregistration = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`car-detailsregistration-container2 ${props.rootClassName} `}
      >
        <div className="car-detailsregistration-container3">
          <div className="car-detailsregistration-container4">
            <Link href="/vehicle-registration-details">
              <a className="car-detailsregistration-link1">
                {props.text1 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_egR7Gc'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-owner">
              <a className="car-detailsregistration-link2">
                {props.text22 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4DlGL2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-tax">
              <a className="car-detailsregistration-link3">
                {props.text212 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_PezKxL'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-changeproperties">
              <a className="car-detailsregistration-link4">
                {props.text2112 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_pFbUZ7'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-regis-car">
              <a className="car-detailsregistration-link5">
                {props.text21112 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0E5TPq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-cancel">
              <a className="car-detailsregistration-link6">
                {props.text211112 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_soXU9z'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-transfer">
              <a className="car-detailsregistration-link7">
                {props.text2111112 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vWdRUF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-others">
              <a className="car-detailsregistration-link8">
                {props.text21111111 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ah2Z1G'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </div>
          <div className="car-detailsregistration-container5">
            <div className="car-detailsregistration-container11">
              <h3 className="car-detailsregistration-text18">
                {props.heading ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ki3Tte'),
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
            <div className="car-detailsregistration-container12">
              <h3 className="car-detailsregistration-text19">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_85qT5a'),
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
            <div className="car-detailsregistration-container13">
              <h3 className="car-detailsregistration-text20">
                {props.heading12 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_VEizOy'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="date"
                disabled
                placeholder={props.textinputPlaceholder12}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailsregistration-container6">
            <div className="car-detailsregistration-container14">
              <h3 className="car-detailsregistration-text21">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_6XAM4C'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M11.5 16.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4zm.503 4.5q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="car-detailsregistration-container7">
            <div className="car-detailsregistration-container15">
              <h3 className="car-detailsregistration-text22">
                {props.heading21 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ORsNaP'),
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
            <div className="car-detailsregistration-container16">
              <h3 className="car-detailsregistration-text23">
                {props.heading211 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_tW3aS_'),
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
            <div className="car-detailsregistration-container17">
              <h3 className="car-detailsregistration-text24">
                {props.heading2111 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_z81ZaF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <input
                type="text"
                placeholder={props.textinputPlaceholder2111}
                className="input"
              />
            </div>
          </div>
          <div className="car-detailsregistration-container8">
            <button
              type="button"
              className="car-detailsregistration-button1 button"
            >
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dy4Qtw'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="car-detailsregistration-button2 button"
            >
              <span>
                {props.button41 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_lkJOtQ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="car-detailsregistration-container9">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="car-detailsregistration-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Le7vme'),
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
          .car-detailsregistration-container2 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-detailsregistration-container3 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-detailsregistration-container4 {
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
          .car-detailsregistration-link1 {
            display: flex;
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsregistration-link1:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link1:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsregistration-link2:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link2:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link3 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsregistration-link3:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link3:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link4 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsregistration-link4:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link4:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link5 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsregistration-link5:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link5:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link6 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsregistration-link6:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link6:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link7 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsregistration-link7:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link7:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link8 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsregistration-link8:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsregistration-link8:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsregistration-container5 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsregistration-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsregistration-text18 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsregistration-container12 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsregistration-text19 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsregistration-container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsregistration-text20 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsregistration-container6 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsregistration-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .car-detailsregistration-text21 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsregistration-container7 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .car-detailsregistration-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsregistration-text22 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsregistration-container16 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsregistration-text23 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsregistration-container17 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsregistration-text24 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsregistration-container8 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsregistration-button1 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #6bab8d;
          }
          .car-detailsregistration-button2 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #dc1717;
          }
          .car-detailsregistration-container9 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
          }
          .car-detailsregistration-text28 {
            display: inline-block;
          }
          .car-detailsregistration-text29 {
            display: inline-block;
          }
          .car-detailsregistration-text30 {
            display: inline-block;
          }
          .car-detailsregistration-text31 {
            display: inline-block;
          }
          .car-detailsregistration-text32 {
            display: inline-block;
          }
          .car-detailsregistration-text33 {
            display: inline-block;
          }
          .car-detailsregistration-text34 {
            display: inline-block;
          }
          .car-detailsregistration-text35 {
            display: inline-block;
          }
          .car-detailsregistration-text36 {
            display: inline-block;
          }
          .car-detailsregistration-text37 {
            display: inline-block;
          }
          .car-detailsregistration-text38 {
            display: inline-block;
          }
          .car-detailsregistration-text39 {
            display: inline-block;
          }
          .car-detailsregistration-text40 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .car-detailsregistration-text41 {
            display: inline-block;
          }
          .car-detailsregistration-text42 {
            display: inline-block;
          }
          .car-detailsregistration-text43 {
            display: inline-block;
          }
          .car-detailsregistration-text44 {
            display: inline-block;
          }
          .car-detailsregistration-text45 {
            display: inline-block;
          }

          @media (max-width: 1000px) {
            .car-detailsregistration-container3 {
              width: 100%;
            }
            .car-detailsregistration-container5 {
              width: 100%;
              align-self: center;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .car-detailsregistration-container11 {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .car-detailsregistration-container12 {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .car-detailsregistration-container13 {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

CarDetailsregistration.defaultProps = {
  textinputPlaceholder1: 'placeholder',
  heading2111: undefined,
  button4: undefined,
  heading211: undefined,
  textinputPlaceholder211: 'placeholder',
  textinputPlaceholder: 'placeholder',
  heading12: undefined,
  textinputPlaceholder12: 'placeholder',
  text212: undefined,
  text22: undefined,
  text211112: undefined,
  textinputPlaceholder21: 'placeholder',
  heading21: undefined,
  button41: undefined,
  text21111111: undefined,
  heading2: undefined,
  text21112: undefined,
  text3: undefined,
  heading1: undefined,
  text2111112: undefined,
  textinputPlaceholder2111: 'placeholder',
  heading: undefined,
  text2112: undefined,
  text1: undefined,
  rootClassName: '',
}

CarDetailsregistration.propTypes = {
  textinputPlaceholder1: PropTypes.string,
  heading2111: PropTypes.element,
  button4: PropTypes.element,
  heading211: PropTypes.element,
  textinputPlaceholder211: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  heading12: PropTypes.element,
  textinputPlaceholder12: PropTypes.string,
  text212: PropTypes.element,
  text22: PropTypes.element,
  text211112: PropTypes.element,
  textinputPlaceholder21: PropTypes.string,
  heading21: PropTypes.element,
  button41: PropTypes.element,
  text21111111: PropTypes.element,
  heading2: PropTypes.element,
  text21112: PropTypes.element,
  text3: PropTypes.element,
  heading1: PropTypes.element,
  text2111112: PropTypes.element,
  textinputPlaceholder2111: PropTypes.string,
  heading: PropTypes.element,
  text2112: PropTypes.element,
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CarDetailsregistration
