import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailsother = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`car-detailsother-container2 ${props.rootClassName} `}>
        <div className="car-detailsother-container3">
          <div className="car-detailsother-container4">
            <Link href="/vehicle-registration-details">
              <a className="car-detailsother-link1">
                {props.text1 ?? (
                  <Fragment>
                    <span className="car-detailsother-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_rnK2FK'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-owner">
              <a className="car-detailsother-link2">
                {props.text22 ?? (
                  <Fragment>
                    <span className="car-detailsother-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0t--yB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-tax">
              <a className="car-detailsother-link3">
                {props.text212 ?? (
                  <Fragment>
                    <span className="car-detailsother-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Fk8hjx'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-changeproperties">
              <a className="car-detailsother-link4">
                {props.text2112 ?? (
                  <Fragment>
                    <span className="car-detailsother-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_H-vEx9'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-regis-car">
              <a className="car-detailsother-link5">
                {props.text21112 ?? (
                  <Fragment>
                    <span className="car-detailsother-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_BLAP90'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-cancel">
              <a className="car-detailsother-link6">
                {props.text211112 ?? (
                  <Fragment>
                    <span className="car-detailsother-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vJ_L1O'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-transfer">
              <a className="car-detailsother-link7">
                {props.text2111112 ?? (
                  <Fragment>
                    <span className="car-detailsother-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_J01zjC'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-others">
              <a className="car-detailsother-link8">
                {props.text21111111 ?? (
                  <Fragment>
                    <span className="car-detailsother-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gFoZBY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </div>
          <div className="car-detailsother-container5">
            <div className="car-detailsother-container11">
              <h3 className="car-detailsother-text18">
                {props.heading ?? (
                  <Fragment>
                    <span className="car-detailsother-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_TQZdRg'),
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
            <div className="car-detailsother-container12">
              <h3 className="car-detailsother-text19">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="car-detailsother-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_objh8D'),
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
          <div className="car-detailsother-container6">
            <div className="car-detailsother-container13">
              <h3 className="car-detailsother-text20">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="car-detailsother-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wFrAav'),
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
            <div className="car-detailsother-container14">
              <h3 className="car-detailsother-text21">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="car-detailsother-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_U3buID'),
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
          <div className="car-detailsother-container7">
            <div className="car-detailsother-container15">
              <h3 className="car-detailsother-text22">
                {props.heading21 ?? (
                  <Fragment>
                    <span className="car-detailsother-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_A7W71P'),
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
            <div className="car-detailsother-container16">
              <h3 className="car-detailsother-text23">
                {props.heading111 ?? (
                  <Fragment>
                    <span className="car-detailsother-text46">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_3hxNvT'),
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
          <div className="car-detailsother-container8">
            <div className="car-detailsother-container17">
              <h3 className="car-detailsother-text24">
                {props.heading211 ?? (
                  <Fragment>
                    <span className="car-detailsother-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_zMutWB'),
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
            <div className="car-detailsother-container18">
              <h3 className="car-detailsother-text25">
                {props.heading1111 ?? (
                  <Fragment>
                    <span className="car-detailsother-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0htclZ'),
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
          <div className="car-detailsother-container9">
            <button type="button" className="car-detailsother-button1 button">
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="car-detailsother-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_VxJf7g'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button type="button" className="car-detailsother-button2 button">
              <span>
                {props.button41 ?? (
                  <Fragment>
                    <span className="car-detailsother-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_qyKrXp'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="car-detailsother-container10">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="car-detailsother-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_qfHI11'),
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
          .car-detailsother-container2 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-detailsother-container3 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-detailsother-container4 {
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
          .car-detailsother-link1 {
            display: flex;
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsother-link1:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsother-link1:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsother-link2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsother-link2:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsother-link2:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsother-link3 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsother-link3:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsother-link3:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsother-link4 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsother-link4:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsother-link4:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsother-link5 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsother-link5:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsother-link5:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsother-link6 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsother-link6:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsother-link6:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsother-link7 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsother-link7:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsother-link7:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsother-link8 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsother-link8:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsother-link8:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsother-container5 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsother-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsother-text18 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsother-container12 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsother-text19 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsother-container6 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsother-container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsother-text20 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsother-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsother-text21 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsother-container7 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsother-container15 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsother-text22 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsother-container16 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsother-text23 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsother-container8 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsother-container17 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .car-detailsother-text24 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsother-container18 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .car-detailsother-text25 {
            width: var(--dl-layout-size-xlarge);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .car-detailsother-container9 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .car-detailsother-button1 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #6bab8d;
          }
          .car-detailsother-button2 {
            color: #ffffff;
            margin-right: var(--dl-layout-space-twounits);
            background-color: #dc1717;
          }
          .car-detailsother-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
          }
          .car-detailsother-text29 {
            display: inline-block;
          }
          .car-detailsother-text30 {
            display: inline-block;
          }
          .car-detailsother-text31 {
            display: inline-block;
          }
          .car-detailsother-text32 {
            display: inline-block;
          }
          .car-detailsother-text33 {
            display: inline-block;
          }
          .car-detailsother-text34 {
            display: inline-block;
          }
          .car-detailsother-text35 {
            display: inline-block;
          }
          .car-detailsother-text36 {
            display: inline-block;
          }
          .car-detailsother-text37 {
            display: inline-block;
          }
          .car-detailsother-text38 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .car-detailsother-text39 {
            display: inline-block;
          }
          .car-detailsother-text40 {
            display: inline-block;
          }
          .car-detailsother-text41 {
            display: inline-block;
          }
          .car-detailsother-text42 {
            display: inline-block;
          }
          .car-detailsother-text43 {
            display: inline-block;
          }
          .car-detailsother-text44 {
            display: inline-block;
          }
          .car-detailsother-text45 {
            display: inline-block;
          }
          .car-detailsother-text46 {
            display: inline-block;
          }
          .car-detailsother-text47 {
            display: inline-block;
          }

          @media (max-width: 1000px) {
            .car-detailsother-container3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CarDetailsother.defaultProps = {
  textinputPlaceholder2: 'placeholder',
  text21112: undefined,
  button41: undefined,
  textinputPlaceholder211: 'placeholder',
  heading11: undefined,
  text212: undefined,
  heading: undefined,
  textinputPlaceholder111: 'placeholder',
  text21111111: undefined,
  text22: undefined,
  text211112: undefined,
  text2112: undefined,
  textinputPlaceholder: 'placeholder',
  textinputPlaceholder11: 'placeholder',
  text3: undefined,
  text1: undefined,
  heading1: undefined,
  text2111112: undefined,
  rootClassName: '',
  textinputPlaceholder1111: 'placeholder',
  textinputPlaceholder21: 'placeholder',
  heading211: undefined,
  heading2: undefined,
  heading21: undefined,
  heading1111: undefined,
  heading111: undefined,
  button4: undefined,
  textinputPlaceholder1: 'placeholder',
}

CarDetailsother.propTypes = {
  textinputPlaceholder2: PropTypes.string,
  text21112: PropTypes.element,
  button41: PropTypes.element,
  textinputPlaceholder211: PropTypes.string,
  heading11: PropTypes.element,
  text212: PropTypes.element,
  heading: PropTypes.element,
  textinputPlaceholder111: PropTypes.string,
  text21111111: PropTypes.element,
  text22: PropTypes.element,
  text211112: PropTypes.element,
  text2112: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder11: PropTypes.string,
  text3: PropTypes.element,
  text1: PropTypes.element,
  heading1: PropTypes.element,
  text2111112: PropTypes.element,
  rootClassName: PropTypes.string,
  textinputPlaceholder1111: PropTypes.string,
  textinputPlaceholder21: PropTypes.string,
  heading211: PropTypes.element,
  heading2: PropTypes.element,
  heading21: PropTypes.element,
  heading1111: PropTypes.element,
  heading111: PropTypes.element,
  button4: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
}

export default CarDetailsother
