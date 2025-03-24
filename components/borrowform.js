import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Borrowform = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`borrowform-container10 ${props.rootClassName} `}>
        <div className="borrowform-container11">
          <div className="borrowform-container12">
            <h1 className="borrowform-text1">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_-9NyQK'),
                }}
              ></span>
            </h1>
          </div>
          <div className="borrowform-container13">
            <input
              type="text"
              required
              placeholder={props.firstname}
              className="input"
            />
          </div>
        </div>
        <div className="borrowform-container14">
          <div className="borrowform-container15">
            <h1 className="borrowform-text2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_HOiHTs'),
                }}
              ></span>
            </h1>
          </div>
          <div className="borrowform-container16">
            <input
              type="text"
              required
              placeholder={props.lastname}
              className="input"
            />
          </div>
        </div>
        <div className="borrowform-container17">
          <div className="borrowform-container18">
            <h1 className="borrowform-text3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_h8f9P0'),
                }}
              ></span>
            </h1>
          </div>
          <div className="borrowform-container19">
            <input
              type="text"
              required
              placeholder={props.email}
              className="input"
            />
          </div>
        </div>
        <button type="button" className="borrowform-button button">
          <span>
            {props.button1 ?? (
              <Fragment>
                <span className="borrowform-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_whK88u'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <style jsx>
        {`
          .borrowform-container10 {
            width: 587px;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .borrowform-container11 {
            flex: 0 0 auto;
            width: 500px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .borrowform-container12 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .borrowform-text1 {
            font-size: 1.5em;
          }
          .borrowform-container13 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .borrowform-container14 {
            flex: 0 0 auto;
            width: 500px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .borrowform-container15 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .borrowform-text2 {
            font-size: 1.5em;
          }
          .borrowform-container16 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .borrowform-container17 {
            flex: 0 0 auto;
            width: 500px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .borrowform-container18 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .borrowform-text3 {
            font-size: 1.5em;
          }
          .borrowform-container19 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .borrowform-button {
            color: var(--dl-color-gray-white);
            width: 200px;
            height: auto;
            align-self: center;
            text-align: center;
            background-color: rgb(20, 67, 114);
          }
          .borrowform-text5 {
            display: inline-block;
          }
          .borrowformroot-class-name {
            align-self: center;
          }
          @media (max-width: 390px) {
            .borrowform-container10 {
              width: 100%;
              height: auto;
            }
            .borrowform-container11 {
              width: 100%;
              flex-direction: column;
            }
            .borrowform-container14 {
              width: 100%;
              flex-direction: column;
            }
            .borrowform-container17 {
              width: 100%;
              flex-direction: column;
            }
            .borrowform-button {
              margin-top: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Borrowform.defaultProps = {
  button1: undefined,
  rootClassName: '',
  email: 'e-mail',
  lastname: 'lastname',
  firstname: 'firstname',
}

Borrowform.propTypes = {
  button1: PropTypes.element,
  rootClassName: PropTypes.string,
  email: PropTypes.string,
  lastname: PropTypes.string,
  firstname: PropTypes.string,
}

export default Borrowform
