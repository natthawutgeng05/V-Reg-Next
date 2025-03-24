import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SidebarTax = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`sidebar-tax-container1 ${props.rootClassName} `}>
        <div className="sidebar-tax-container2">
          <h1 className="sidebar-tax-heading">
            {props.heading ?? (
              <Fragment>
                <span className="sidebar-tax-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_z8N47I'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <ul className="sidebar-tax-ul list">
            <li className="list-item">
              <Link href="/registration-tax">
                <a className="sidebar-tax-link1">
                  {props.text102 ?? (
                    <Fragment>
                      <span className="sidebar-tax-text7">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_M6pSO3'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </li>
            <li className="list-item">
              <Link href="/registration-changeproperties">
                <a className="sidebar-tax-link2">
                  {props.text1012 ?? (
                    <Fragment>
                      <span className="sidebar-tax-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bU9vEY'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </li>
            <li className="sidebar-tax-li3 list-item">
              <Link href="/registration-regis-car">
                <a className="sidebar-tax-link3">
                  {props.text10112 ?? (
                    <Fragment>
                      <span className="sidebar-tax-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_YzFaGW'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </li>
            <li className="list-item">
              <Link href="/registration-cancel-and-cutoff">
                <a className="sidebar-tax-link4">
                  {props.text101112 ?? (
                    <Fragment>
                      <span className="sidebar-tax-text1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_lHoZoC'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </li>
            <li className="list-item">
              <Link href="/registration-transfer">
                <a className="sidebar-tax-link5">
                  {props.text1011112 ?? (
                    <Fragment>
                      <span className="sidebar-tax-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_9f40aK'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </li>
            <li className="list-item">
              <Link href="/registration-others">
                <a className="sidebar-tax-link6">
                  {props.text10111111 ?? (
                    <Fragment>
                      <span className="sidebar-tax-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_uzXq2d'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .sidebar-tax-container1 {
            width: var(--dl-layout-size-xxlarge);
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .sidebar-tax-container2 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            background-color: rgba(113, 140, 152, 0.36);
          }
          .sidebar-tax-heading {
            margin-bottom: 0px;
          }
          .sidebar-tax-ul {
            list-style-type: disc;
            list-style-image: none;
          }
          .sidebar-tax-link1 {
            width: var(--dl-layout-size-large);
            transition: 0.3s;
            text-decoration: none;
          }
          .sidebar-tax-link1:hover {
            border-radius: var(--dl-layout-radius-buttonradius);
            background-color: #ffbd59;
          }
          .sidebar-tax-link2 {
            width: var(--dl-layout-size-large);
            transition: 0.3s;
            text-decoration: none;
          }
          .sidebar-tax-link2:hover {
            border-radius: var(--dl-layout-radius-buttonradius);
            background-color: #ffbd59;
          }
          .sidebar-tax-li3 {
            transition: 0.3s;
          }

          .sidebar-tax-link3 {
            width: var(--dl-layout-size-large);
            transition: 0.3s;
            text-decoration: none;
          }
          .sidebar-tax-link3:hover {
            border-radius: var(--dl-layout-radius-buttonradius);
            background-color: #ffbd59;
          }
          .sidebar-tax-link4 {
            width: var(--dl-layout-size-large);
            transition: 0.3s;
            text-decoration: none;
          }
          .sidebar-tax-link4:hover {
            border-radius: var(--dl-layout-radius-buttonradius);
            background-color: #ffbd59;
          }
          .sidebar-tax-link5 {
            width: var(--dl-layout-size-large);
            transition: 0.3s;
            text-decoration: none;
          }
          .sidebar-tax-link5:hover {
            border-radius: var(--dl-layout-radius-buttonradius);
            background-color: #ffbd59;
          }
          .sidebar-tax-link6 {
            width: var(--dl-layout-size-large);
            transition: 0.3s;
            text-decoration: none;
          }
          .sidebar-tax-link6:hover {
            border-radius: var(--dl-layout-radius-buttonradius);
            background-color: #ffbd59;
          }
          .sidebar-tax-text1 {
            display: inline-block;
          }
          .sidebar-tax-text2 {
            display: inline-block;
          }
          .sidebar-tax-text3 {
            display: inline-block;
          }
          .sidebar-tax-text4 {
            display: inline-block;
          }
          .sidebar-tax-text5 {
            display: inline-block;
          }
          .sidebar-tax-text6 {
            display: inline-block;
          }
          .sidebar-tax-text7 {
            display: inline-block;
          }

          @media (max-width: 1000px) {
            .sidebar-tax-container1 {
              height: auto;
              margin-right: var(--dl-layout-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

SidebarTax.defaultProps = {
  text101112: undefined,
  heading: undefined,
  text1012: undefined,
  rootClassName: '',
  text1011112: undefined,
  text10112: undefined,
  text10111111: undefined,
  text102: undefined,
}

SidebarTax.propTypes = {
  text101112: PropTypes.element,
  heading: PropTypes.element,
  text1012: PropTypes.element,
  rootClassName: PropTypes.string,
  text1011112: PropTypes.element,
  text10112: PropTypes.element,
  text10111111: PropTypes.element,
  text102: PropTypes.element,
}

export default SidebarTax
