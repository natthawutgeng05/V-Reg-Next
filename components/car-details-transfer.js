import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailsTransfer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`car-details-transfer-container2 ${props.rootClassName} `}
      >
        <div className="car-details-transfer-container3">
          <div className="car-details-transfer-container4">
            <Link href="/vehicle-registration-details">
              <a className="car-details-transfer-link1">
                {props.text1 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Dc3VL5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-owner">
              <a className="car-details-transfer-link2">
                {props.text22 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bOT5zj'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-tax">
              <a className="car-details-transfer-link3">
                {props.text212 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_uakkJG'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-changeproperties">
              <a className="car-details-transfer-link4">
                {props.text2112 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text27">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_cn9uDF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-regis-car">
              <a className="car-details-transfer-link5">
                {props.text21112 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_HqKFBA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-cancel">
              <a className="car-details-transfer-link6">
                {props.text211112 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Xc-usJ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-transfer">
              <a className="car-details-transfer-link7">
                {props.text2111112 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bot2Lv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-others">
              <a className="car-details-transfer-link8">
                {props.text21111111 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5C-Jez'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </div>
          <div className="car-details-transfer-container5">
            <div className="car-details-transfer-container11">
              <h3 className="car-details-transfer-text18">
                {props.heading ?? (
                  <Fragment>
                    <span className="car-details-transfer-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nOYzDK'),
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
            <div className="car-details-transfer-container12">
              <h3 className="car-details-transfer-text19">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text25">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0nEboq'),
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
          <div className="car-details-transfer-container6">
            <div className="car-details-transfer-container13">
              <h3 className="car-details-transfer-text20">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_clVCWg'),
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
            <div className="car-details-transfer-container14">
              <h3 className="car-details-transfer-text21">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_btr9fj'),
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
          <div className="car-details-transfer-container7">
            <button
              type="button"
              className="car-details-transfer-button1 button"
            >
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_st8iEj'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="car-details-transfer-button2 button"
            >
              <span>
                {props.button41 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_69N6pu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="car-details-transfer-container8">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="car-details-transfer-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_iKvbIo'),
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
          .car-details-transfer-container2 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-details-transfer-container3 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-details-transfer-container4 {
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
          .car-details-transfer-link1 {
            display: flex;
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-details-transfer-link1:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-details-transfer-link1:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-details-transfer-link2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-details-transfer-link2:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-details-transfer-link2:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-details-transfer-link3 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-details-transfer-link3:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-details-transfer-link3:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-details-transfer-link4 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-details-transfer-link4:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-details-transfer-link4:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-details-transfer-link5 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-details-transfer-link5:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-details-transfer-link5:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-details-transfer-link6 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-details-transfer-link6:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-details-transfer-link6:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-details-transfer-link7 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-details-transfer-link7:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-details-transfer-link7:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-details-transfer-link8 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-details-transfer-link8:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-details-transfer-link8:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-details-transfer-container5 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-details-transfer-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-details-transfer-text18 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-details-transfer-container12 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-details-transfer-text19 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-details-transfer-container6 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-details-transfer-container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-details-transfer-text20 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-details-transfer-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-details-transfer-text21 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-details-transfer-container7 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-details-transfer-button1 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #6bab8d;
          }
          .car-details-transfer-button2 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #dc1717;
          }
          .car-details-transfer-container8 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
          }
          .car-details-transfer-text25 {
            display: inline-block;
          }
          .car-details-transfer-text26 {
            display: inline-block;
          }
          .car-details-transfer-text27 {
            display: inline-block;
          }
          .car-details-transfer-text28 {
            display: inline-block;
          }
          .car-details-transfer-text29 {
            display: inline-block;
          }
          .car-details-transfer-text30 {
            display: inline-block;
          }
          .car-details-transfer-text31 {
            display: inline-block;
          }
          .car-details-transfer-text32 {
            display: inline-block;
          }
          .car-details-transfer-text33 {
            display: inline-block;
          }
          .car-details-transfer-text34 {
            display: inline-block;
          }
          .car-details-transfer-text35 {
            display: inline-block;
          }
          .car-details-transfer-text36 {
            display: inline-block;
          }
          .car-details-transfer-text37 {
            display: inline-block;
          }
          .car-details-transfer-text38 {
            display: inline-block;
          }
          .car-details-transfer-text39 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }

          @media (max-width: 1000px) {
            .car-details-transfer-container3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CarDetailsTransfer.defaultProps = {
  heading1: undefined,
  textinputPlaceholder1: 'placeholder',
  text22: undefined,
  textinputPlaceholder: 'placeholder',
  text2112: undefined,
  button4: undefined,
  button41: undefined,
  text211112: undefined,
  rootClassName: '',
  heading11: undefined,
  text21112: undefined,
  text2111112: undefined,
  heading: undefined,
  textinputPlaceholder11: 'placeholder',
  text1: undefined,
  text212: undefined,
  textinputPlaceholder2: 'placeholder',
  text21111111: undefined,
  heading2: undefined,
  text3: undefined,
}

CarDetailsTransfer.propTypes = {
  heading1: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  text22: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  text2112: PropTypes.element,
  button4: PropTypes.element,
  button41: PropTypes.element,
  text211112: PropTypes.element,
  rootClassName: PropTypes.string,
  heading11: PropTypes.element,
  text21112: PropTypes.element,
  text2111112: PropTypes.element,
  heading: PropTypes.element,
  textinputPlaceholder11: PropTypes.string,
  text1: PropTypes.element,
  text212: PropTypes.element,
  textinputPlaceholder2: PropTypes.string,
  text21111111: PropTypes.element,
  heading2: PropTypes.element,
  text3: PropTypes.element,
}

export default CarDetailsTransfer
