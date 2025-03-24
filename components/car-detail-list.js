import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailList = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="car-detail-list-testimonial-card">
        <span className="car-detail-list-equipment">
          {props.carNumber1 ?? (
            <Fragment>
              <span className="car-detail-list-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7u9NNV'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-car-no">
          {props.collectorName1 ?? (
            <Fragment>
              <span className="car-detail-list-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X-2uFn'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text10">
          {props.dateDetermine1 ?? (
            <Fragment>
              <span className="car-detail-list-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n9amHG'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text11">
          {props.dateDetermine11 ?? (
            <Fragment>
              <span className="car-detail-list-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5jvEaa'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text12">
          {props.dateDetermine111 ?? (
            <Fragment>
              <span className="car-detail-list-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JqtUnp'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text13">
          {props.dateDetermine1111 ?? (
            <Fragment>
              <span className="car-detail-list-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PmFW8_'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text14">
          {props.dateDetermine11111 ?? (
            <Fragment>
              <span className="car-detail-list-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DR2RBK'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text15">
          {props.dateDetermine111111 ?? (
            <Fragment>
              <span className="car-detail-list-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PlyfO-'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text16">
          {props.dateDetermine1111111 ?? (
            <Fragment>
              <span className="car-detail-list-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aYFWUL'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text17">
          {props.dateDetermine11111111 ?? (
            <Fragment>
              <span className="car-detail-list-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-3jaUR'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text18">
          {props.dateDetermine111111111 ?? (
            <Fragment>
              <span className="car-detail-list-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jFqvjZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text19">
          {props.dateDetermine1111111111 ?? (
            <Fragment>
              <span className="car-detail-list-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NWqP8Z'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text20">
          {props.dateDetermine11111111111 ?? (
            <Fragment>
              <span className="car-detail-list-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ceWZVf'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="car-detail-list-text21">
          {props.dateDetermine111111111111 ?? (
            <Fragment>
              <span className="car-detail-list-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_edJl2f'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <Link href="/vehicle-registration-details">
          <a className="car-detail-list-link button">
            <span>
              {props.button1 ?? (
                <Fragment>
                  <span className="car-detail-list-text23">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_qOF4Ab'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .car-detail-list-testimonial-card {
            width: 100%;
            height: 122px;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: space-between;
          }
          .car-detail-list-equipment {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            padding-bottom: 0px;
          }
          .car-detail-list-car-no {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text10 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text11 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text12 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text13 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text14 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text15 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text16 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text17 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text18 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text19 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text20 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-text21 {
            color: #000000;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .car-detail-list-link {
            color: var(--dl-color-gray-white);
            text-decoration: none;
            background-color: #144372;
          }
          .car-detail-list-text23 {
            display: inline-block;
          }
          .car-detail-list-text24 {
            display: inline-block;
          }
          .car-detail-list-text25 {
            display: inline-block;
          }
          .car-detail-list-text26 {
            display: inline-block;
          }
          .car-detail-list-text27 {
            display: inline-block;
          }
          .car-detail-list-text28 {
            display: inline-block;
          }
          .car-detail-list-text29 {
            display: inline-block;
          }
          .car-detail-list-text30 {
            display: inline-block;
          }
          .car-detail-list-text31 {
            display: inline-block;
          }
          .car-detail-list-text32 {
            display: inline-block;
          }
          .car-detail-list-text33 {
            display: inline-block;
          }
          .car-detail-list-text34 {
            display: inline-block;
          }
          .car-detail-list-text35 {
            display: inline-block;
          }
          .car-detail-list-text36 {
            display: inline-block;
          }
          .car-detail-list-text37 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .car-detail-list-testimonial-card {
              width: 1549px;
              height: 111px;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-equipment {
              color: #000000;
              padding-bottom: 0px;
            }
            .car-detail-list-car-no {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text10 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text11 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text12 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text13 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text14 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text15 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text16 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text17 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text18 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text19 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text20 {
              color: #000000;
              margin-bottom: 0px;
            }
            .car-detail-list-text21 {
              color: #000000;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 1400px) {
            .car-detail-list-testimonial-card {
              width: 1269px;
              height: 93px;
              align-items: center;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-halfunit);
              justify-content: space-between;
            }
            .car-detail-list-equipment {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .car-detail-list-car-no {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text10 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text11 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text12 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text13 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text14 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text15 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text16 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text17 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text18 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text19 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text20 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-text21 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .car-detail-list-link {
              color: #ffc843;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              border-width: 0px;
              background-color: #144372;
            }
          }
          @media (max-width: 1000px) {
            .car-detail-list-testimonial-card {
              width: 100%;
              height: auto;
              flex-direction: column;
            }
          }
          @media (max-width: 991px) {
            .car-detail-list-car-no {
              align-self: center;
            }
            .car-detail-list-text10 {
              align-self: center;
            }
            .car-detail-list-text11 {
              align-self: center;
            }
            .car-detail-list-text12 {
              align-self: center;
            }
            .car-detail-list-text13 {
              align-self: center;
            }
            .car-detail-list-text14 {
              align-self: center;
            }
            .car-detail-list-text15 {
              align-self: center;
            }
            .car-detail-list-text16 {
              align-self: center;
            }
            .car-detail-list-text17 {
              align-self: center;
            }
            .car-detail-list-text18 {
              align-self: center;
            }
            .car-detail-list-text19 {
              align-self: center;
            }
            .car-detail-list-text20 {
              align-self: center;
            }
            .car-detail-list-text21 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .car-detail-list-testimonial-card {
              width: 100%;
              height: auto;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .car-detail-list-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .car-detail-list-equipment {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .car-detail-list-car-no {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text10 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text11 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text12 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text13 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text14 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text15 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text16 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text17 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text18 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text19 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text20 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .car-detail-list-text21 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 390px) {
            .car-detail-list-testimonial-card {
              height: 230px;
              flex-direction: column;
              justify-content: space-between;
            }
            .car-detail-list-equipment {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

CarDetailList.defaultProps = {
  button1: undefined,
  dateDetermine11111111111: undefined,
  dateDetermine111: undefined,
  dateDetermine11: undefined,
  dateDetermine11111111: undefined,
  collectorName1: undefined,
  dateDetermine11111: undefined,
  dateDetermine1111: undefined,
  dateDetermine1111111111: undefined,
  carNumber1: undefined,
  dateDetermine111111111111: undefined,
  dateDetermine111111: undefined,
  dateDetermine1: undefined,
  dateDetermine1111111: undefined,
  dateDetermine111111111: undefined,
  rootClassName: '',
}

CarDetailList.propTypes = {
  button1: PropTypes.element,
  dateDetermine11111111111: PropTypes.element,
  dateDetermine111: PropTypes.element,
  dateDetermine11: PropTypes.element,
  dateDetermine11111111: PropTypes.element,
  collectorName1: PropTypes.element,
  dateDetermine11111: PropTypes.element,
  dateDetermine1111: PropTypes.element,
  dateDetermine1111111111: PropTypes.element,
  carNumber1: PropTypes.element,
  dateDetermine111111111111: PropTypes.element,
  dateDetermine111111: PropTypes.element,
  dateDetermine1: PropTypes.element,
  dateDetermine1111111: PropTypes.element,
  dateDetermine111111111: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CarDetailList
