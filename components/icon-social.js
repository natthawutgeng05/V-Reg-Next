import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const IconSocial = (props) => {
  return (
    <>
      <div className={`icon-social-icon-group ${props.rootClassName} `}>
        <div className="icon-social-container">
          <a
            href="https://www.facebook.com/PsuSci"
            target="_blank"
            rel="noreferrer noopener"
            className="icon-social-link1"
          >
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="icon-social-image1"
            />
          </a>
          <a
            href="https://www.instagram.com/PsuSci/"
            target="_blank"
            rel="noreferrer noopener"
            className="icon-social-link2"
          >
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="icon-social-image2"
            />
          </a>
          <a
            href="https://twitter.com/psu_sci"
            target="_blank"
            rel="noreferrer noopener"
            className="icon-social-link3"
          >
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="icon-social-image3"
            />
          </a>
          <a
            href="https://www.youtube.com/c/PSUSciofficial"
            target="_blank"
            rel="noreferrer noopener"
            className="icon-social-link4"
          >
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="icon-social-image4"
            />
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .icon-social-icon-group {
            width: auto;
            position: relative;
          }
          .icon-social-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .icon-social-link1 {
            display: contents;
          }
          .icon-social-image1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .icon-social-link2 {
            display: contents;
          }
          .icon-social-image2 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .icon-social-link3 {
            display: contents;
          }
          .icon-social-image3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .icon-social-link4 {
            display: contents;
          }
          .icon-social-image4 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            object-fit: cover;
            text-decoration: none;
          }

          @media (max-width: 479px) {
            .icon-social-icon-group {
              display: none;
            }
          }
          @media (max-width: 390px) {
            .icon-socialroot-class-name3 {
              display: flex;
            }
            .icon-socialroot-class-name4 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

IconSocial.defaultProps = {
  imageSrc3: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageSrc2: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageAlt3: 'image',
  imageAlt1: 'image',
  rootClassName: '',
  imageAlt4: 'image',
  imageSrc4: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageAlt2: 'image',
}

IconSocial.propTypes = {
  imageSrc3: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default IconSocial
