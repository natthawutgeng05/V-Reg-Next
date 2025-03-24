import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CardNavigation = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`card-navigation-testimonial-card ${props.rootClassName} `}
      >
        <div className="card-navigation-testimonial">
          <span className="card-navigation-text1">
            {props.name1 ?? (
              <Fragment>
                <span className="card-navigation-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qc96pO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .card-navigation-testimonial-card {
            width: 266px;
            height: 291px;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/assets/logo-300h.png');
            background-position: center;
          }
          .card-navigation-testimonial {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.65);
          }
          .card-navigation-text1 {
            color: #000000;
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            text-align: justify;
            font-weight: 800;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .card-navigation-text2 {
            display: inline-block;
          }
          .card-navigationroot-class-name {
            background-size: cover;
            background-image: a98d9d99-aa13-4936-93c1-c0f406ff35e4;
          }
          .card-navigationroot-class-name1 {
            background-size: cover;
            background-image: 71f34166-852f-4153-ad4d-f1f12260e2d4;
          }
          .card-navigationroot-class-name2 {
            background-size: cover;
            background-image: 50d737bc-4ae5-4166-be8c-7a1c90806e3a;
            background-repeat: no-repeat;
            background-position: center;
          }
          .card-navigationroot-class-name3 {
            background-size: cover;
            background-image: 50d737bc-4ae5-4166-be8c-7a1c90806e3a;
            background-repeat: no-repeat;
            background-position: center;
          }
          .card-navigationroot-class-name4 {
            background-size: cover;
            background-image: a98d9d99-aa13-4936-93c1-c0f406ff35e4;
          }
          .card-navigationroot-class-name5 {
            background-size: cover;
            background-image: 71f34166-852f-4153-ad4d-f1f12260e2d4;
          }

          @media (max-width: 1000px) {
            .card-navigation-testimonial-card {
              background-color: rgba(0, 0, 0, 0.25);
            }
            .card-navigation-testimonial {
              width: 268px;
              justify-content: center;
            }
            .card-navigation-text1 {
              color: #000000;
              font-style: normal;
              font-weight: 800;
            }
            .card-navigationroot-class-name {
              background-size: cover;
              background-color: transparent;
              background-image: a98d9d99-aa13-4936-93c1-c0f406ff35e4;
            }
            .card-navigationroot-class-name1 {
              background-size: cover;
              background-color: transparent;
              background-image: 71f34166-852f-4153-ad4d-f1f12260e2d4;
            }
            .card-navigationroot-class-name4 {
              background-size: cover;
              background-color: transparent;
              background-image: a98d9d99-aa13-4936-93c1-c0f406ff35e4;
            }
            .card-navigationroot-class-name5 {
              background-size: cover;
              background-color: transparent;
              background-image: 71f34166-852f-4153-ad4d-f1f12260e2d4;
            }
          }
          @media (max-width: 767px) {
            .card-navigation-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .card-navigation-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .card-navigation-text1 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

CardNavigation.defaultProps = {
  name1: undefined,
  rootClassName: '',
}

CardNavigation.propTypes = {
  name1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CardNavigation
