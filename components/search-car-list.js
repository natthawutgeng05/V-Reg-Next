import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SearchCarList = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`search-car-list-container10 ${props.rootClassName} `}>
        <div className="search-car-list-container11">
          <Link href="/create-new-car">
            <a className="search-car-list-link button">
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="search-car-list-text25">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2ISYzh'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
          </Link>
          <button type="button" className="search-car-list-button1 button">
            <span>
              {props.button1 ?? (
                <Fragment>
                  <span className="search-car-list-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_HdPMBR'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button type="button" className="button">
            <span>
              {props.button11 ?? (
                <Fragment>
                  <span className="search-car-list-text21">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Z8xPiE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <div className="search-car-list-container12">
          <div className="search-car-list-container13">
            <span>
              {props.text ?? (
                <Fragment>
                  <span className="search-car-list-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5lxnMT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder}
              className="input"
            />
          </div>
          <div className="search-car-list-container14">
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="search-car-list-text23">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_d36XeZ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder1}
              className="input"
            />
          </div>
          <div className="search-car-list-container15">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="search-car-list-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kQDjXI'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder2}
              className="input"
            />
          </div>
        </div>
        <div className="search-car-list-container16">
          <div className="search-car-list-container17">
            <span>
              {props.text4 ?? (
                <Fragment>
                  <span className="search-car-list-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_FOj9eI'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder4}
              className="input"
            />
          </div>
          <div className="search-car-list-container18">
            <span>
              {props.text11 ?? (
                <Fragment>
                  <span className="search-car-list-text26">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5MgBWh'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder11}
              className="input"
            />
          </div>
          <div className="search-car-list-container19">
            <span>
              {props.text21 ?? (
                <Fragment>
                  <span className="search-car-list-text27">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pSS_iL'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder21}
              className="input"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .search-car-list-container10 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .search-car-list-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .search-car-list-link {
            color: #ffffff;
            margin-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
            background-color: #0074f0;
          }
          .search-car-list-button1 {
            margin-right: var(--dl-layout-space-halfunit);
          }
          .search-car-list-container12 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .search-car-list-container13 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
          }
          .search-car-list-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
          }
          .search-car-list-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .search-car-list-container16 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .search-car-list-container17 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
          }
          .search-car-list-container18 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
          }
          .search-car-list-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .search-car-list-text19 {
            display: inline-block;
          }
          .search-car-list-text20 {
            display: inline-block;
          }
          .search-car-list-text21 {
            display: inline-block;
          }
          .search-car-list-text22 {
            display: inline-block;
          }
          .search-car-list-text23 {
            display: inline-block;
          }
          .search-car-list-text24 {
            display: inline-block;
          }
          .search-car-list-text25 {
            display: inline-block;
          }
          .search-car-list-text26 {
            display: inline-block;
          }
          .search-car-list-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

SearchCarList.defaultProps = {
  textinputPlaceholder2: 'placeholder',
  text: undefined,
  button1: undefined,
  textinputPlaceholder: 'placeholder',
  rootClassName: '',
  textinputPlaceholder4: 'placeholder',
  button11: undefined,
  textinputPlaceholder21: 'placeholder',
  textinputPlaceholder11: 'placeholder',
  text2: undefined,
  text1: undefined,
  textinputPlaceholder1: 'placeholder',
  text4: undefined,
  button: undefined,
  text11: undefined,
  text21: undefined,
}

SearchCarList.propTypes = {
  textinputPlaceholder2: PropTypes.string,
  text: PropTypes.element,
  button1: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  button11: PropTypes.element,
  textinputPlaceholder21: PropTypes.string,
  textinputPlaceholder11: PropTypes.string,
  text2: PropTypes.element,
  text1: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  text4: PropTypes.element,
  button: PropTypes.element,
  text11: PropTypes.element,
  text21: PropTypes.element,
}

export default SearchCarList
