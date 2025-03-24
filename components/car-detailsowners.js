import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailsowners = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`car-detailsowners-container2 ${props.rootClassName} `}>
        <div className="car-detailsowners-container3">
          <div className="car-detailsowners-container4">
            <Link href="/vehicle-registration-details">
              <a className="car-detailsowners-link1">
                {props.text1 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ELC35s'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-owner">
              <a className="car-detailsowners-link2">
                {props.text22 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_uqX_3K'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-tax">
              <a className="car-detailsowners-link3">
                {props.text212 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_o695Wm'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-changeproperties">
              <a className="car-detailsowners-link4">
                {props.text2112 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_x6ccZm'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-regis-car">
              <a className="car-detailsowners-link5">
                {props.text21112 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_lZ8ruO'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-cancel">
              <a className="car-detailsowners-link6">
                {props.text211112 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5HrsL1'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-transfer">
              <a className="car-detailsowners-link7">
                {props.text2111112 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZvgiuY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-others">
              <a className="car-detailsowners-link8">
                {props.text21111111 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_oJZvw7'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </div>
          <div className="car-detailsowners-container5">
            <div className="car-detailsowners-container11">
              <h3 className="car-detailsowners-text18">
                {props.heading ?? (
                  <Fragment>
                    <span className="car-detailsowners-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1CLcWr'),
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
            <div className="car-detailsowners-container12">
              <h3 className="car-detailsowners-text19">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_OIu6PI'),
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
          <div className="car-detailsowners-container6">
            <div className="car-detailsowners-container13">
              <h3 className="car-detailsowners-text20">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_FqytxE'),
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
            <div className="car-detailsowners-container14">
              <h3 className="car-detailsowners-text21">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_43rl0Y'),
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
          <div className="car-detailsowners-container7">
            <div className="car-detailsowners-container15">
              <h3 className="car-detailsowners-text22">
                {props.heading21 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__4Ixtx'),
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
            <div className="car-detailsowners-container16">
              <h3 className="car-detailsowners-text23">
                {props.heading111 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text46">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_K4BUZi'),
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
          <div className="car-detailsowners-container8">
            <div className="car-detailsowners-container17">
              <h3 className="car-detailsowners-text24">
                {props.heading211 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_AvRJMM'),
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
            <div className="car-detailsowners-container18">
              <h3 className="car-detailsowners-text25">
                {props.heading1111 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_jEgQSb'),
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
          <div className="car-detailsowners-container9">
            <button type="button" className="car-detailsowners-button1 button">
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_a7iCKO'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button type="button" className="car-detailsowners-button2 button">
              <span>
                {props.button41 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_OmQM7Q'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="car-detailsowners-container10">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="car-detailsowners-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_x1vSB-'),
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
          .car-detailsowners-container2 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-detailsowners-container3 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-detailsowners-container4 {
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
          .car-detailsowners-link1 {
            display: flex;
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsowners-link1:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsowners-link1:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsowners-link2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsowners-link2:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsowners-link2:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsowners-link3 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsowners-link3:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsowners-link3:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsowners-link4 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsowners-link4:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsowners-link4:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsowners-link5 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsowners-link5:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsowners-link5:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsowners-link6 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsowners-link6:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsowners-link6:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsowners-link7 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsowners-link7:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsowners-link7:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsowners-link8 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsowners-link8:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsowners-link8:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsowners-container5 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsowners-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsowners-text18 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsowners-container12 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsowners-text19 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsowners-container6 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsowners-container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsowners-text20 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsowners-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsowners-text21 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsowners-container7 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsowners-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsowners-text22 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsowners-container16 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsowners-text23 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsowners-container8 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsowners-container17 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsowners-text24 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsowners-container18 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsowners-text25 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsowners-container9 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsowners-button1 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #6bab8d;
          }
          .car-detailsowners-button2 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #dc1717;
          }
          .car-detailsowners-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
          }
          .car-detailsowners-text29 {
            display: inline-block;
          }
          .car-detailsowners-text30 {
            display: inline-block;
          }
          .car-detailsowners-text31 {
            display: inline-block;
          }
          .car-detailsowners-text32 {
            display: inline-block;
          }
          .car-detailsowners-text33 {
            display: inline-block;
          }
          .car-detailsowners-text34 {
            display: inline-block;
          }
          .car-detailsowners-text35 {
            display: inline-block;
          }
          .car-detailsowners-text36 {
            display: inline-block;
          }
          .car-detailsowners-text37 {
            display: inline-block;
          }
          .car-detailsowners-text38 {
            display: inline-block;
          }
          .car-detailsowners-text39 {
            display: inline-block;
          }
          .car-detailsowners-text40 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .car-detailsowners-text41 {
            display: inline-block;
          }
          .car-detailsowners-text42 {
            display: inline-block;
          }
          .car-detailsowners-text43 {
            display: inline-block;
          }
          .car-detailsowners-text44 {
            display: inline-block;
          }
          .car-detailsowners-text45 {
            display: inline-block;
          }
          .car-detailsowners-text46 {
            display: inline-block;
          }
          .car-detailsowners-text47 {
            display: inline-block;
          }

          @media (max-width: 1000px) {
            .car-detailsowners-container3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CarDetailsowners.defaultProps = {
  heading2: undefined,
  text2112: undefined,
  heading11: undefined,
  heading: undefined,
  heading211: undefined,
  text22: undefined,
  textinputPlaceholder11: 'placeholder',
  heading1111: undefined,
  textinputPlaceholder1111: 'placeholder',
  text211112: undefined,
  button41: undefined,
  text212: undefined,
  button4: undefined,
  textinputPlaceholder21: 'placeholder',
  textinputPlaceholder2: 'placeholder',
  textinputPlaceholder1: 'placeholder',
  text3: undefined,
  text21111111: undefined,
  rootClassName: '',
  heading1: undefined,
  textinputPlaceholder111: 'placeholder',
  heading21: undefined,
  text1: undefined,
  text2111112: undefined,
  heading111: undefined,
  textinputPlaceholder211: 'placeholder',
  textinputPlaceholder: 'placeholder',
  text21112: undefined,
}

CarDetailsowners.propTypes = {
  heading2: PropTypes.element,
  text2112: PropTypes.element,
  heading11: PropTypes.element,
  heading: PropTypes.element,
  heading211: PropTypes.element,
  text22: PropTypes.element,
  textinputPlaceholder11: PropTypes.string,
  heading1111: PropTypes.element,
  textinputPlaceholder1111: PropTypes.string,
  text211112: PropTypes.element,
  button41: PropTypes.element,
  text212: PropTypes.element,
  button4: PropTypes.element,
  textinputPlaceholder21: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  text3: PropTypes.element,
  text21111111: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  textinputPlaceholder111: PropTypes.string,
  heading21: PropTypes.element,
  text1: PropTypes.element,
  text2111112: PropTypes.element,
  heading111: PropTypes.element,
  textinputPlaceholder211: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text21112: PropTypes.element,
}

export default CarDetailsowners
