import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarHero = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`car-hero-container10 ${props.rootClassName} `}>
        <div className="car-hero-container11">
          <h3 className="car-hero-heading1">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('Heading_yW5uI-'),
              }}
            ></span>
          </h3>
        </div>
        <div className="car-hero-container12">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="car-hero-image"
          />
        </div>
        <div className="car-hero-container13">
          <div className="car-hero-container14">
            <h1 className="car-hero-heading2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Heading_P6vRId'),
                }}
              ></span>
            </h1>
            <h1 className="car-hero-text10">
              {props.scientificName1 ?? (
                <Fragment>
                  <span className="car-hero-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tFp8uF'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="car-hero-container15">
            <h1 className="car-hero-heading3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Heading_Svh6Rp'),
                }}
              ></span>
            </h1>
            <h1 className="car-hero-text11">
              {props.scientificName11 ?? (
                <Fragment>
                  <span className="car-hero-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UxOQAQ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="car-hero-container16">
            <h1 className="car-hero-heading4">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Heading_qzx8p-'),
                }}
              ></span>
            </h1>
            <h1 className="car-hero-text12">
              {props.scientificName111 ?? (
                <Fragment>
                  <span className="car-hero-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_CdiGe3'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
        </div>
        <div className="car-hero-container17">
          <div className="car-hero-container18">
            <h1 className="car-hero-heading5">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Heading_00_upD'),
                }}
              ></span>
            </h1>
            <h1 className="car-hero-text13">
              {props.scientificName12 ?? (
                <Fragment>
                  <span className="car-hero-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_XtFEXM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="car-hero-container19">
            <h1 className="car-hero-heading6">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Heading_twKqOR'),
                }}
              ></span>
            </h1>
            <h1 className="car-hero-text14">
              {props.scientificName112 ?? (
                <Fragment>
                  <span className="car-hero-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UoLpKu'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="car-hero-container20">
            <h1 className="car-hero-heading7">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Heading_B8Mcyi'),
                }}
              ></span>
            </h1>
            <h1 className="car-hero-text15">
              {props.scientificName1111 ?? (
                <Fragment>
                  <span className="car-hero-text21">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KW1nLq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .car-hero-container10 {
            display: flex;
            position: relative;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .car-hero-container11 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
          }
          .car-hero-heading1 {
            color: rgb(255, 255, 255);
            font-size: 1rem;
            font-style: normal;
            font-weight: 100;
            line-height: 2;
            border-radius: 30px;
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(9, 123, 74);
          }
          .car-hero-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .car-hero-image {
            width: 200px;
            object-fit: cover;
          }
          .car-hero-container13 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .car-hero-container14 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .car-hero-heading2 {
            color: rgb(20, 67, 114);
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .car-hero-text10 {
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
          }
          .car-hero-container15 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .car-hero-heading3 {
            color: rgb(20, 67, 114);
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .car-hero-text11 {
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
          }
          .car-hero-container16 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .car-hero-heading4 {
            color: rgb(20, 67, 114);
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .car-hero-text12 {
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
          }
          .car-hero-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .car-hero-container18 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .car-hero-heading5 {
            color: rgb(20, 67, 114);
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .car-hero-text13 {
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
          }
          .car-hero-container19 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .car-hero-heading6 {
            color: rgb(20, 67, 114);
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .car-hero-text14 {
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
          }
          .car-hero-container20 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .car-hero-heading7 {
            color: rgb(20, 67, 114);
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .car-hero-text15 {
            width: var(--dl-layout-size-xlarge);
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
          }
          .car-hero-text16 {
            display: inline-block;
          }
          .car-hero-text17 {
            display: inline-block;
          }
          .car-hero-text18 {
            display: inline-block;
          }
          .car-hero-text19 {
            display: inline-block;
          }
          .car-hero-text20 {
            display: inline-block;
          }
          .car-hero-text21 {
            display: inline-block;
          }

          @media (max-width: 1000px) {
            .car-hero-container10 {
              width: 100%;
            }
            .car-hero-container11 {
              width: 100%;
            }
            .car-hero-container12 {
              width: 100%;
            }
            .car-hero-container13 {
              width: 100%;
            }
            .car-hero-container17 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .car-hero-heading1 {
              text-align: center;
            }
            .car-hero-heading2 {
              text-align: center;
            }
            .car-hero-heading3 {
              text-align: center;
            }
            .car-hero-heading4 {
              text-align: center;
            }
            .car-hero-heading5 {
              text-align: center;
            }
            .car-hero-heading6 {
              text-align: center;
            }
            .car-hero-heading7 {
              text-align: center;
            }
          }
          @media (max-width: 390px) {
            .car-hero-container10 {
              flex-direction: column;
            }
            .car-hero-heading1 {
              align-self: flex-start;
              text-align: left;
            }
            .car-hero-heading2 {
              align-self: flex-start;
              text-align: left;
            }
            .car-hero-heading3 {
              align-self: flex-start;
              text-align: left;
            }
            .car-hero-heading4 {
              align-self: flex-start;
              text-align: left;
            }
            .car-hero-heading5 {
              align-self: flex-start;
              text-align: left;
            }
            .car-hero-heading6 {
              align-self: flex-start;
              text-align: left;
            }
            .car-hero-heading7 {
              align-self: flex-start;
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

CarHero.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  scientificName12: undefined,
  scientificName1: undefined,
  scientificName11: undefined,
  scientificName112: undefined,
  rootClassName: '',
  scientificName111: undefined,
  scientificName1111: undefined,
  imageAlt: 'image',
}

CarHero.propTypes = {
  imageSrc: PropTypes.string,
  scientificName12: PropTypes.element,
  scientificName1: PropTypes.element,
  scientificName11: PropTypes.element,
  scientificName112: PropTypes.element,
  rootClassName: PropTypes.string,
  scientificName111: PropTypes.element,
  scientificName1111: PropTypes.element,
  imageAlt: PropTypes.string,
}

export default CarHero
