import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import FooterContent from './footer-content'

const Footer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <FooterContent
          callSci1={
            <Fragment>
              <span className="footer-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Tgo7vU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          emailSci1={
            <Fragment>
              <span className="footer-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yOoQCO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          contactSci1={
            <Fragment>
              <span className="footer-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LjAree'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer-contentroot-class-name"
        ></FooterContent>
        <div className="footer-separator"></div>
        <span className="footer-text4">
          {props.text1 ?? (
            <Fragment>
              <span className="footer-text5">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_21KrlE'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .footer-text1 {
            display: inline-block;
          }
          .footer-text2 {
            display: inline-block;
          }
          .footer-text3 {
            display: inline-block;
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .footer-text4 {
            align-self: center;
          }
          .footer-text5 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-layout-space-unit);
            }
            .footer-text4 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text1: undefined,
  rootClassName: '',
}

Footer.propTypes = {
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Footer
