import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailscancelAndCutoff = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`car-detailscancel-and-cutoff-container2 ${props.rootClassName} `}
      >
        <div className="car-detailscancel-and-cutoff-container3">
          <div className="car-detailscancel-and-cutoff-container4">
            <Link href="/vehicle-registration-details">
              <a className="car-detailscancel-and-cutoff-link1">
                {props.text1 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_h0Czbb'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-owner">
              <a className="car-detailscancel-and-cutoff-link2">
                {props.text22 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_rcDJd_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-tax">
              <a className="car-detailscancel-and-cutoff-link3">
                {props.text212 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_SnImlz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-changeproperties">
              <a className="car-detailscancel-and-cutoff-link4">
                {props.text2112 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Me9cOK'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-regis-car">
              <a className="car-detailscancel-and-cutoff-link5">
                {props.text21112 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2JnHD-'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-cancel">
              <a className="car-detailscancel-and-cutoff-link6">
                {props.text211112 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-aDq5N'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-transfer">
              <a className="car-detailscancel-and-cutoff-link7">
                {props.text2111112 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_TJtw79'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-others">
              <a className="car-detailscancel-and-cutoff-link8">
                {props.text21111111 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text46">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZRZbh0'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </div>
          <div className="car-detailscancel-and-cutoff-container5">
            <div className="car-detailscancel-and-cutoff-container11">
              <h3 className="car-detailscancel-and-cutoff-text18">
                {props.heading ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_RLC8KS'),
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
            <div className="car-detailscancel-and-cutoff-container12">
              <h3 className="car-detailscancel-and-cutoff-text19">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_pBvl0S'),
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
          <div className="car-detailscancel-and-cutoff-container6">
            <div className="car-detailscancel-and-cutoff-container13">
              <h3 className="car-detailscancel-and-cutoff-text20">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MG-6Sl'),
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
            <div className="car-detailscancel-and-cutoff-container14">
              <h3 className="car-detailscancel-and-cutoff-text21">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Al7zRu'),
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
          <div className="car-detailscancel-and-cutoff-container7">
            <div className="car-detailscancel-and-cutoff-container15">
              <h3 className="car-detailscancel-and-cutoff-text22">
                {props.heading21 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0s_7bJ'),
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
            <div className="car-detailscancel-and-cutoff-container16">
              <h3 className="car-detailscancel-and-cutoff-text23">
                {props.heading111 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Yc7HoV'),
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
          <div className="car-detailscancel-and-cutoff-container8">
            <div className="car-detailscancel-and-cutoff-container17">
              <h3 className="car-detailscancel-and-cutoff-text24">
                {props.heading211 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_w1kbgF'),
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
            <div className="car-detailscancel-and-cutoff-container18">
              <h3 className="car-detailscancel-and-cutoff-text25">
                {props.heading1111 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DDpA03'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <select>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="car-detailscancel-and-cutoff-container9">
            <button
              type="button"
              className="car-detailscancel-and-cutoff-button1 button"
            >
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_NmUCA2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="car-detailscancel-and-cutoff-button2 button"
            >
              <span>
                {props.button41 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_znobfr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="car-detailscancel-and-cutoff-container10">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="car-detailscancel-and-cutoff-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_CT48Cl'),
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
          .car-detailscancel-and-cutoff-container2 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-detailscancel-and-cutoff-container3 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-detailscancel-and-cutoff-container4 {
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
          .car-detailscancel-and-cutoff-link1 {
            display: flex;
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-link1:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link1:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-link2:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link2:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link3 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-link3:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link3:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link4 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-link4:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link4:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link5 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-link5:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link5:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link6 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-link6:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link6:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link7 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-link7:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link7:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link8 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-link8:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-link8:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailscancel-and-cutoff-container5 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailscancel-and-cutoff-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailscancel-and-cutoff-text18 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailscancel-and-cutoff-container12 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailscancel-and-cutoff-text19 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailscancel-and-cutoff-container6 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailscancel-and-cutoff-container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailscancel-and-cutoff-text20 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailscancel-and-cutoff-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailscancel-and-cutoff-text21 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailscancel-and-cutoff-container7 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailscancel-and-cutoff-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailscancel-and-cutoff-text22 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailscancel-and-cutoff-container16 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailscancel-and-cutoff-text23 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailscancel-and-cutoff-container8 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailscancel-and-cutoff-container17 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailscancel-and-cutoff-text24 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailscancel-and-cutoff-container18 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .car-detailscancel-and-cutoff-text25 {
            width: var(--dl-layout-size-xlarge);
            display: flex;
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailscancel-and-cutoff-container9 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailscancel-and-cutoff-button1 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #6bab8d;
          }
          .car-detailscancel-and-cutoff-button2 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #dc1717;
          }
          .car-detailscancel-and-cutoff-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
          }
          .car-detailscancel-and-cutoff-text29 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text30 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text31 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text32 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text33 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text34 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text35 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text36 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text37 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text38 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text39 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text40 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text41 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text42 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .car-detailscancel-and-cutoff-text43 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text44 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text45 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text46 {
            display: inline-block;
          }
          .car-detailscancel-and-cutoff-text47 {
            display: inline-block;
          }

          @media (max-width: 1000px) {
            .car-detailscancel-and-cutoff-container3 {
              width: 100%;
            }
            .car-detailscancel-and-cutoff-container4 {
              width: 100%;
            }
            .car-detailscancel-and-cutoff-container5 {
              width: 100%;
              justify-content: center;
            }
            .car-detailscancel-and-cutoff-container6 {
              width: 100%;
              justify-content: center;
            }
            .car-detailscancel-and-cutoff-container7 {
              width: 100%;
              justify-content: center;
            }
            .car-detailscancel-and-cutoff-container8 {
              width: 100%;
              justify-content: center;
            }
            .car-detailscancel-and-cutoff-container9 {
              width: 100%;
              align-self: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

CarDetailscancelAndCutoff.defaultProps = {
  textinputPlaceholder211: 'placeholder',
  textinputPlaceholder11: 'placeholder',
  text212: undefined,
  text22: undefined,
  heading21: undefined,
  heading1: undefined,
  heading111: undefined,
  textinputPlaceholder111: 'placeholder',
  heading: undefined,
  button41: undefined,
  text1: undefined,
  button4: undefined,
  text2112: undefined,
  heading1111: undefined,
  rootClassName: '',
  text211112: undefined,
  heading2: undefined,
  text3: undefined,
  text21112: undefined,
  textinputPlaceholder: 'placeholder',
  heading211: undefined,
  heading11: undefined,
  textinputPlaceholder21: 'placeholder',
  text21111111: undefined,
  text2111112: undefined,
  textinputPlaceholder1: 'placeholder',
  textinputPlaceholder2: 'placeholder',
}

CarDetailscancelAndCutoff.propTypes = {
  textinputPlaceholder211: PropTypes.string,
  textinputPlaceholder11: PropTypes.string,
  text212: PropTypes.element,
  text22: PropTypes.element,
  heading21: PropTypes.element,
  heading1: PropTypes.element,
  heading111: PropTypes.element,
  textinputPlaceholder111: PropTypes.string,
  heading: PropTypes.element,
  button41: PropTypes.element,
  text1: PropTypes.element,
  button4: PropTypes.element,
  text2112: PropTypes.element,
  heading1111: PropTypes.element,
  rootClassName: PropTypes.string,
  text211112: PropTypes.element,
  heading2: PropTypes.element,
  text3: PropTypes.element,
  text21112: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  heading211: PropTypes.element,
  heading11: PropTypes.element,
  textinputPlaceholder21: PropTypes.string,
  text21111111: PropTypes.element,
  text2111112: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
}

export default CarDetailscancelAndCutoff
