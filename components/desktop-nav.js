import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DesktopNav = (props) => {
  const translate = useTranslations()
  return (
    <>
      <nav className={`desktop-nav-nav ${props.rootClassName} `}>
        <Link href="/homepage">
          <a className="desktop-nav-link1">
            {props.text1 ?? (
              <Fragment>
                <span className="desktop-nav-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jxkYIH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
        <Link href="/car-home">
          <a className="desktop-nav-link2">
            {props.text11 ?? (
              <Fragment>
                <span className="desktop-nav-text1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SmH6E-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
        <Link href="/registration-home">
          <a className="desktop-nav-link3">
            {props.text21 ?? (
              <Fragment>
                <span className="desktop-nav-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fH2f4A'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
        <a
          href="https://www.haadthip.com/th/contact"
          target="_blank"
          rel="noreferrer noopener"
          className="desktop-nav-link4"
        >
          {props.text41 ?? (
            <Fragment>
              <span className="desktop-nav-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Cid643'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </a>
        <Link href="/">
          <a className="desktop-nav-link5">
            {props.text411 ?? (
              <Fragment>
                <span className="desktop-nav-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gl2_3k'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
      </nav>
      <style jsx>
        {`
          .desktop-nav-nav {
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
          }

          .desktop-nav-link1 {
            color: #ffffff;
            text-decoration: none;
          }
          .desktop-nav-link2 {
            color: #ffffff;
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .desktop-nav-link3 {
            color: #ffffff;
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .desktop-nav-link4 {
            color: #ffffff;
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .desktop-nav-link5 {
            color: #ffffff;
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .desktop-nav-text1 {
            display: inline-block;
          }
          .desktop-nav-text2 {
            display: inline-block;
          }
          .desktop-nav-text3 {
            display: inline-block;
          }
          .desktop-nav-text4 {
            display: inline-block;
          }
          .desktop-nav-text5 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .desktop-nav-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .desktop-nav-link1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .desktop-nav-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .desktop-nav-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .desktop-nav-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .desktop-nav-link5 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 390px) {
            .desktop-nav-link1 {
              color: #000000;
            }
            .desktop-nav-link2 {
              color: #000000;
            }
            .desktop-nav-link3 {
              color: #000000;
            }
            .desktop-nav-link4 {
              color: #000000;
            }
            .desktop-nav-link5 {
              color: #000000;
            }
          }
        `}
      </style>
    </>
  )
}

DesktopNav.defaultProps = {
  text11: undefined,
  text411: undefined,
  text1: undefined,
  text41: undefined,
  text21: undefined,
  rootClassName: '',
}

DesktopNav.propTypes = {
  text11: PropTypes.element,
  text411: PropTypes.element,
  text1: PropTypes.element,
  text41: PropTypes.element,
  text21: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default DesktopNav
