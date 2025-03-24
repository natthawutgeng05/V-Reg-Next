import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import MobileNav from './mobile-nav'
import IconSocial from './icon-social'

const MobileMenu = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        data-role="MobileMenu"
        className={`mobile-menu-mobile-menu ${props.rootClassName} `}
      >
        <div className="mobile-menu-nav">
          <div className="mobile-menu-container">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="mobile-menu-image"
            />
            <div
              data-role="CloseMobileMenu"
              className="mobile-menu-close-mobile-menu"
            >
              <svg viewBox="0 0 1024 1024" className="mobile-menu-icon1">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <MobileNav
            text1={
              <Fragment>
                <span className="mobile-menu-text1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_omAU0o'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text11={
              <Fragment>
                <span className="mobile-menu-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ML11_u'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="mobile-menu-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_snQa28'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text32={
              <Fragment>
                <span className="mobile-menu-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AKiPAn'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text41={
              <Fragment>
                <span className="mobile-menu-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_c9K-Z6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text311={
              <Fragment>
                <span className="mobile-menu-text6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gg_lid'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="mobile-navroot-class-name8"
          ></MobileNav>
        </div>
        <IconSocial rootClassName="icon-socialroot-class-name5"></IconSocial>
      </div>
      <style jsx>
        {`
          .mobile-menu-mobile-menu {
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: relative;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .mobile-menu-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-menu-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .mobile-menu-image {
            width: 100px;
            object-fit: cover;
          }
          .mobile-menu-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-menu-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .mobile-menu-text1 {
            display: inline-block;
          }
          .mobile-menu-text2 {
            display: inline-block;
          }
          .mobile-menu-text3 {
            display: inline-block;
          }
          .mobile-menu-text4 {
            display: inline-block;
          }
          .mobile-menu-text5 {
            display: inline-block;
          }
          .mobile-menu-text6 {
            display: inline-block;
          }
          .mobile-menuroot-class-name {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          @media (max-width: 479px) {
            .mobile-menu-mobile-menu {
              padding: 16px;
            }
          }
          @media (max-width: 390px) {
            .mobile-menu-mobile-menu {
              height: 627px;
              display: flex;
            }
            .mobile-menu-nav {
              height: 161px;
            }
            .mobile-menu-container {
              align-self: flex-start;
              justify-content: space-between;
            }
            .mobile-menu-image {
              width: 184px;
              height: 116px;
              align-self: center;
            }
            .mobile-menuroot-class-name {
              height: 100vh;
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

MobileMenu.defaultProps = {
  rootClassName: '',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageAlt: 'image',
}

MobileMenu.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default MobileMenu
