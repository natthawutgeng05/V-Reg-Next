import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CarDetailsheaderTable = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="car-detailsheader-table-container1">
        <div className="car-detailsheader-table-container2">
          <div className="car-detailsheader-table-container3">
            <Link href="/vehicle-registration-details">
              <a className="car-detailsheader-table-link1">
                {props.text ?? (
                  <Fragment>
                    <span className="car-detailsheader-table-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_z0FIQ0'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-owner">
              <a className="car-detailsheader-table-link2">
                {props.text2 ?? (
                  <Fragment>
                    <span className="car-detailsheader-table-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bAsJX4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-tax">
              <a className="car-detailsheader-table-link3">
                {props.text21 ?? (
                  <Fragment>
                    <span className="car-detailsheader-table-text25">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_K08Wh7'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-changeproperties">
              <a className="car-detailsheader-table-link4">
                {props.text211 ?? (
                  <Fragment>
                    <span className="car-detailsheader-table-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_TBR6Ck'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-regis-car">
              <a className="car-detailsheader-table-link5">
                {props.text2111 ?? (
                  <Fragment>
                    <span className="car-detailsheader-table-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2tJ4VX'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-cancel">
              <a className="car-detailsheader-table-link6">
                {props.text21111 ?? (
                  <Fragment>
                    <span className="car-detailsheader-table-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_HKxZQN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-transfer">
              <a className="car-detailsheader-table-link7">
                {props.text211111 ?? (
                  <Fragment>
                    <span className="car-detailsheader-table-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_mBTdoT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/vehicle-registration-others">
              <a className="car-detailsheader-table-link8">
                {props.text2111111 ?? (
                  <Fragment>
                    <span className="car-detailsheader-table-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_FTqcG4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .car-detailsheader-table-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .car-detailsheader-table-container2 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .car-detailsheader-table-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            overflow: visible;
            align-self: center;
            align-items: flex-start;
            border-radius: 16px;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: flex-start;
            background-color: #d9d9d9;
          }
          .car-detailsheader-table-link1 {
            display: flex;
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsheader-table-link1:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link1:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsheader-table-link2:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link2:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link3 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsheader-table-link3:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link3:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link4 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsheader-table-link4:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link4:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link5 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsheader-table-link5:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link5:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link6 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsheader-table-link6:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link6:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link7 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsheader-table-link7:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link7:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link8 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: underline;
          }
          .car-detailsheader-table-link8:hover {
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-link8:active {
            font-style: normal;
            font-weight: 800;
            background-color: #ffbd59;
          }
          .car-detailsheader-table-text18 {
            display: inline-block;
          }
          .car-detailsheader-table-text19 {
            display: inline-block;
          }
          .car-detailsheader-table-text20 {
            display: inline-block;
          }
          .car-detailsheader-table-text21 {
            display: inline-block;
          }
          .car-detailsheader-table-text22 {
            display: inline-block;
          }
          .car-detailsheader-table-text23 {
            display: inline-block;
          }
          .car-detailsheader-table-text24 {
            display: inline-block;
          }
          .car-detailsheader-table-text25 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CarDetailsheaderTable.defaultProps = {
  text21111: undefined,
  text211: undefined,
  text: undefined,
  text2: undefined,
  text2111: undefined,
  text2111111: undefined,
  text211111: undefined,
  text21: undefined,
  rootClassName: '',
}

CarDetailsheaderTable.propTypes = {
  text21111: PropTypes.element,
  text211: PropTypes.element,
  text: PropTypes.element,
  text2: PropTypes.element,
  text2111: PropTypes.element,
  text2111111: PropTypes.element,
  text211111: PropTypes.element,
  text21: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CarDetailsheaderTable
