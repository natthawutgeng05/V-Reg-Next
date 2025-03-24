import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MobileNav = (props) => {
  const translate = useTranslations()
  return (
    <>
      <nav className={`mobile-nav-nav ${props.rootClassName} `}>
        <Link href="/homepage">
          <a className="mobile-nav-link1">
            {props.text1 ?? (
              <Fragment>
                <span className="mobile-nav-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tgVGuk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
        <Link href="/car-home">
          <a className="mobile-nav-link2">
            {props.text11 ?? (
              <Fragment>
                <span className="mobile-nav-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0Clvw9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
        <Link href="/registration-home">
          <a className="mobile-nav-link3">
            {props.text21 ?? (
              <Fragment>
                <span className="mobile-nav-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IyDGp7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
        <Link href="/registration-changeproperties">
          <a className="mobile-nav-link4">
            {props.text32 ?? (
              <Fragment>
                <span className="mobile-nav-text6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_nKuDqF'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
        <Link href="/edit-car-detail">
          <a className="mobile-nav-link5">
            {props.text311 ?? (
              <Fragment>
                <span className="mobile-nav-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rRhyfA'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </a>
        </Link>
        <a
          href="https://www.sci.psu.ac.th/en/contact-en/"
          target="_blank"
          rel="noreferrer noopener"
          className="mobile-nav-link6"
        >
          {props.text41 ?? (
            <Fragment>
              <span className="mobile-nav-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c_ZNey'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </a>
      </nav>
      <style jsx>
        {`
          .mobile-nav-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .mobile-nav-link1 {
            text-decoration: none;
          }
          .mobile-nav-link2 {
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .mobile-nav-link3 {
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .mobile-nav-link4 {
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .mobile-nav-link5 {
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .mobile-nav-link6 {
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .mobile-nav-text1 {
            display: inline-block;
          }
          .mobile-nav-text2 {
            display: inline-block;
          }
          .mobile-nav-text3 {
            display: inline-block;
          }
          .mobile-nav-text4 {
            display: inline-block;
          }
          .mobile-nav-text5 {
            display: inline-block;
          }
          .mobile-nav-text6 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .mobile-nav-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .mobile-nav-link1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .mobile-nav-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .mobile-nav-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .mobile-nav-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .mobile-nav-link5 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .mobile-nav-link6 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

MobileNav.defaultProps = {
  text41: undefined,
  text311: undefined,
  text21: undefined,
  text11: undefined,
  text1: undefined,
  text32: undefined,
  rootClassName: '',
}

MobileNav.propTypes = {
  text41: PropTypes.element,
  text311: PropTypes.element,
  text21: PropTypes.element,
  text11: PropTypes.element,
  text1: PropTypes.element,
  text32: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default MobileNav
