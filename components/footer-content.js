import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FooterContent = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`footer-content-container1 ${props.rootClassName} `}>
        <div className="footer-content-container2">
          <span className="footer-content-text1">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_sCp9cy'),
              }}
            ></span>
          </span>
          <span className="footer-content-text2">
            {props.contactSci1 ?? (
              <Fragment>
                <span className="footer-content-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ACz4zI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="footer-content-text3">
            {props.callSci1 ?? (
              <Fragment>
                <span className="footer-content-text7">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VHggQU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="footer-content-text4">
            {props.emailSci1 ?? (
              <Fragment>
                <span className="footer-content-text6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jYTc_X'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footer-content-links-container">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc2}
            className="footer-content-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .footer-content-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-content-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .footer-content-text1 {
            color: rgb(20, 67, 114);
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-weight: 700;
          }
          .footer-content-text2 {
            color: #3d71b7;
          }
          .footer-content-text3 {
            color: #3d71b7;
          }
          .footer-content-text4 {
            color: #3d71b7;
          }
          .footer-content-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-content-image {
            width: 200px;
            object-fit: cover;
          }
          .footer-content-text5 {
            display: inline-block;
          }
          .footer-content-text6 {
            display: inline-block;
          }
          .footer-content-text7 {
            display: inline-block;
          }

          .footer-contentroot-class-name1 {
            width: var(--dl-layout-size-maxwidth);
          }
          @media (max-width: 767px) {
            .footer-content-container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-content-text1 {
              margin-top: var(--dl-layout-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .footer-content-links-container {
              width: 100%;
              margin-top: var(--dl-layout-space-halfunit);
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer-content-container1 {
              align-items: center;
              flex-direction: column;
            }
            .footer-content-text1 {
              margin-top: var(--dl-layout-space-twounits);
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .footer-content-links-container {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 390px) {
            .footer-content-links-container {
              align-self: center;
              margin-top: var(--dl-layout-space-unit);
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

FooterContent.defaultProps = {
  contactSci1: undefined,
  emailSci1: undefined,
  imageAlt1: 'image',
  callSci1: undefined,
  imageSrc2: '/assets/footer_img-200h.png',
  rootClassName: '',
}

FooterContent.propTypes = {
  contactSci1: PropTypes.element,
  emailSci1: PropTypes.element,
  imageAlt1: PropTypes.string,
  callSci1: PropTypes.element,
  imageSrc2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FooterContent
