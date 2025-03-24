import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const RegistratonChangePropTable = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`registraton-change-prop-table-container10 ${props.rootClassName} `}
      >
        <div className="registraton-change-prop-table-container11">
          <div className="registraton-change-prop-table-container12">
            <div className="registraton-change-prop-table-container13">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="registraton-change-prop-table-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__UaJ1C'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <select>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="registraton-change-prop-table-container14">
              <span>
                {props.text1 ?? (
                  <Fragment>
                    <span className="registraton-change-prop-table-text25">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bkyyur'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <select>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="registraton-change-prop-table-container15">
              <span>
                {props.text11 ?? (
                  <Fragment>
                    <span className="registraton-change-prop-table-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_p-WgLi'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <select>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="registraton-change-prop-table-container16">
            <button
              type="button"
              className="registraton-change-prop-table-button button"
            >
              <span>
                {props.button3 ?? (
                  <Fragment>
                    <span className="registraton-change-prop-table-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vYphvy'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="registraton-change-prop-table-container17">
          <span className="registraton-change-prop-table-equipment1">
            {props.carNumber11 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_urSUbx'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-car-no1">
            {props.collectorName11 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-kocOl'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-licenseplate1">
            {props.dateDetermine12 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FQR_s2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-province1">
            {props.dateDetermine112 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_iEYGAy'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-regis-date1">
            {props.dateDetermine1112 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ozY_-F'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-cost-center1">
            {props.dateDetermine11112 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Is9fvZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-action">
            {props.dateDetermine11111111111151 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mllCYx'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="registraton-change-prop-table-container18">
          <span className="registraton-change-prop-table-equipment2">
            {props.carNumber111 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zXlQyR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-car-no2">
            {props.collectorName111 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BhLcSH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-licenseplate2">
            {props.dateDetermine121 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FYoQRY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-province2">
            {props.dateDetermine1121 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_phboTa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-regis-date2">
            {props.dateDetermine11121 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FwNQwJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-cost-center2">
            {props.dateDetermine111121 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ANbj0A'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="registraton-change-prop-table-container19">
            <Link href="/vehicle-registration-changeproperties">
              <a className="registraton-change-prop-table-link1">
                <svg
                  width="24"
                  height="24"
                  view-box="0 0 24 24"
                  className="registraton-change-prop-table-icon1"
                >
                  <path
                    d="m14.304 4.844l2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565l6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="registraton-change-prop-table-container20">
          <span className="registraton-change-prop-table-equipment3">
            {props.carNumber1115 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NLBU0C'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-car-no3">
            {props.collectorName1115 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_b1w-8g'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-licenseplate3">
            {props.dateDetermine1215 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_v3VFo-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-province3">
            {props.dateDetermine11215 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oJg37n'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-regis-date3">
            {props.dateDetermine111215 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0f88fE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-cost-center3">
            {props.dateDetermine1111215 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_nJyCy7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="registraton-change-prop-table-container21">
            <Link href="/vehicle-registration-changeproperties">
              <a className="registraton-change-prop-table-link2">
                <svg
                  width="24"
                  height="24"
                  view-box="0 0 24 24"
                  className="registraton-change-prop-table-icon3"
                >
                  <path
                    d="m14.304 4.844l2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565l6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="registraton-change-prop-table-container22">
          <span className="registraton-change-prop-table-equipment4">
            {props.carNumber1114 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dLeEa0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-car-no4">
            {props.collectorName1114 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5u1Mw6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-licenseplate4">
            {props.dateDetermine1214 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1fuZkY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-province4">
            {props.dateDetermine11214 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wkn4ku'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-regis-date4">
            {props.dateDetermine111214 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5FTgPE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-cost-center4">
            {props.dateDetermine1111214 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7C5ENV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="registraton-change-prop-table-container23">
            <Link href="/vehicle-registration-changeproperties">
              <a className="registraton-change-prop-table-link3">
                <svg
                  width="24"
                  height="24"
                  view-box="0 0 24 24"
                  className="registraton-change-prop-table-icon5"
                >
                  <path
                    d="m14.304 4.844l2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565l6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="registraton-change-prop-table-container24">
          <span className="registraton-change-prop-table-equipment5">
            {props.carNumber1113 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BAm3Y1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-car-no5">
            {props.collectorName1113 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_r47zCg'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-licenseplate5">
            {props.dateDetermine1213 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_eZZ7xH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-province5">
            {props.dateDetermine11213 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_spb-DS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-regis-date5">
            {props.dateDetermine111213 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kM-Tk0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-change-prop-table-cost-center5">
            {props.dateDetermine1111213 ?? (
              <Fragment>
                <span className="registraton-change-prop-table-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tH-MjD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="registraton-change-prop-table-container25">
            <Link href="/vehicle-registration-changeproperties">
              <a className="registraton-change-prop-table-link4">
                <svg
                  width="24"
                  height="24"
                  view-box="0 0 24 24"
                  className="registraton-change-prop-table-icon7"
                >
                  <path
                    d="m14.304 4.844l2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565l6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .registraton-change-prop-table-container10 {
            width: auto;
            height: auto;
            display: flex;
            overflow: scroll;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .registraton-change-prop-table-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: space-between;
          }
          .registraton-change-prop-table-container12 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .registraton-change-prop-table-container13 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .registraton-change-prop-table-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .registraton-change-prop-table-container15 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .registraton-change-prop-table-container16 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .registraton-change-prop-table-button {
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-change-prop-table-container17 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-change-prop-table-equipment1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-change-prop-table-car-no1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-licenseplate1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-province1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-regis-date1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-cost-center1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-action {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-container18 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-change-prop-table-equipment2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-change-prop-table-car-no2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-licenseplate2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-province2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-regis-date2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-cost-center2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-container19 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .registraton-change-prop-table-link1 {
            display: contents;
          }
          .registraton-change-prop-table-icon1 {
            text-decoration: none;
          }
          .registraton-change-prop-table-container20 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-change-prop-table-equipment3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-change-prop-table-car-no3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-licenseplate3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-province3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-regis-date3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-cost-center3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-container21 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .registraton-change-prop-table-link2 {
            display: contents;
          }
          .registraton-change-prop-table-icon3 {
            text-decoration: none;
          }
          .registraton-change-prop-table-container22 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-change-prop-table-equipment4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-change-prop-table-car-no4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-licenseplate4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-province4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-regis-date4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-cost-center4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-container23 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .registraton-change-prop-table-link3 {
            display: contents;
          }
          .registraton-change-prop-table-icon5 {
            text-decoration: none;
          }
          .registraton-change-prop-table-container24 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-change-prop-table-equipment5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-change-prop-table-car-no5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-licenseplate5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-province5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-regis-date5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-cost-center5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .registraton-change-prop-table-container25 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .registraton-change-prop-table-link4 {
            display: contents;
          }
          .registraton-change-prop-table-icon7 {
            text-decoration: none;
          }
          .registraton-change-prop-table-text14 {
            display: inline-block;
          }
          .registraton-change-prop-table-text15 {
            display: inline-block;
          }
          .registraton-change-prop-table-text16 {
            display: inline-block;
          }
          .registraton-change-prop-table-text17 {
            display: inline-block;
          }
          .registraton-change-prop-table-text18 {
            display: inline-block;
          }
          .registraton-change-prop-table-text19 {
            display: inline-block;
          }
          .registraton-change-prop-table-text20 {
            display: inline-block;
          }
          .registraton-change-prop-table-text21 {
            display: inline-block;
          }
          .registraton-change-prop-table-text22 {
            display: inline-block;
          }
          .registraton-change-prop-table-text23 {
            display: inline-block;
          }
          .registraton-change-prop-table-text24 {
            display: inline-block;
          }
          .registraton-change-prop-table-text25 {
            display: inline-block;
          }
          .registraton-change-prop-table-text26 {
            display: inline-block;
          }
          .registraton-change-prop-table-text27 {
            display: inline-block;
          }
          .registraton-change-prop-table-text28 {
            display: inline-block;
          }
          .registraton-change-prop-table-text29 {
            display: inline-block;
          }
          .registraton-change-prop-table-text30 {
            display: inline-block;
          }
          .registraton-change-prop-table-text31 {
            display: inline-block;
          }
          .registraton-change-prop-table-text32 {
            display: inline-block;
          }
          .registraton-change-prop-table-text33 {
            display: inline-block;
          }
          .registraton-change-prop-table-text34 {
            display: inline-block;
          }
          .registraton-change-prop-table-text35 {
            display: inline-block;
          }
          .registraton-change-prop-table-text36 {
            display: inline-block;
          }
          .registraton-change-prop-table-text37 {
            display: inline-block;
          }
          .registraton-change-prop-table-text38 {
            display: inline-block;
          }
          .registraton-change-prop-table-text39 {
            display: inline-block;
          }
          .registraton-change-prop-table-text40 {
            display: inline-block;
          }
          .registraton-change-prop-table-text41 {
            display: inline-block;
          }
          .registraton-change-prop-table-text42 {
            display: inline-block;
          }
          .registraton-change-prop-table-text43 {
            display: inline-block;
          }
          .registraton-change-prop-table-text44 {
            display: inline-block;
          }
          .registraton-change-prop-table-text45 {
            display: inline-block;
          }
          .registraton-change-prop-table-text46 {
            display: inline-block;
          }
          .registraton-change-prop-table-text47 {
            display: inline-block;
          }
          .registraton-change-prop-table-text48 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .registraton-change-prop-table-container10 {
              width: 100%;
            }
            .registraton-change-prop-table-container11 {
              width: 100%;
            }
            .registraton-change-prop-table-container17 {
              width: 100%;
            }
            .registraton-change-prop-table-equipment1 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-action {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-container18 {
              width: 100%;
            }
            .registraton-change-prop-table-equipment2 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-container20 {
              width: 100%;
            }
            .registraton-change-prop-table-equipment3 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-container22 {
              width: 100%;
            }
            .registraton-change-prop-table-equipment4 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-container24 {
              width: 100%;
            }
            .registraton-change-prop-table-equipment5 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center5 {
              color: #000000;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 1400px) {
            .registraton-change-prop-table-equipment1 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-action {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-equipment2 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-equipment3 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-equipment4 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-equipment5 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-change-prop-table-car-no5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-licenseplate5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-province5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-regis-date5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-change-prop-table-cost-center5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 1000px) {
            .registraton-change-prop-table-container10 {
              width: 100%;
            }
            .registraton-change-prop-table-container11 {
              width: 100%;
            }
            .registraton-change-prop-table-container17 {
              width: 100%;
            }
            .registraton-change-prop-table-container18 {
              width: 100%;
            }
            .registraton-change-prop-table-container20 {
              width: 100%;
            }
            .registraton-change-prop-table-container22 {
              width: 100%;
            }
            .registraton-change-prop-table-container24 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .registraton-change-prop-table-car-no1 {
              align-self: center;
            }
            .registraton-change-prop-table-licenseplate1 {
              align-self: center;
            }
            .registraton-change-prop-table-province1 {
              align-self: center;
            }
            .registraton-change-prop-table-regis-date1 {
              align-self: center;
            }
            .registraton-change-prop-table-cost-center1 {
              align-self: center;
            }
            .registraton-change-prop-table-action {
              align-self: center;
            }
            .registraton-change-prop-table-car-no2 {
              align-self: center;
            }
            .registraton-change-prop-table-licenseplate2 {
              align-self: center;
            }
            .registraton-change-prop-table-province2 {
              align-self: center;
            }
            .registraton-change-prop-table-regis-date2 {
              align-self: center;
            }
            .registraton-change-prop-table-cost-center2 {
              align-self: center;
            }
            .registraton-change-prop-table-car-no3 {
              align-self: center;
            }
            .registraton-change-prop-table-licenseplate3 {
              align-self: center;
            }
            .registraton-change-prop-table-province3 {
              align-self: center;
            }
            .registraton-change-prop-table-regis-date3 {
              align-self: center;
            }
            .registraton-change-prop-table-cost-center3 {
              align-self: center;
            }
            .registraton-change-prop-table-car-no4 {
              align-self: center;
            }
            .registraton-change-prop-table-licenseplate4 {
              align-self: center;
            }
            .registraton-change-prop-table-province4 {
              align-self: center;
            }
            .registraton-change-prop-table-regis-date4 {
              align-self: center;
            }
            .registraton-change-prop-table-cost-center4 {
              align-self: center;
            }
            .registraton-change-prop-table-car-no5 {
              align-self: center;
            }
            .registraton-change-prop-table-licenseplate5 {
              align-self: center;
            }
            .registraton-change-prop-table-province5 {
              align-self: center;
            }
            .registraton-change-prop-table-regis-date5 {
              align-self: center;
            }
            .registraton-change-prop-table-cost-center5 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .registraton-change-prop-table-equipment1 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-change-prop-table-car-no1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-licenseplate1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-province1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-regis-date1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-cost-center1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-action {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-equipment2 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-change-prop-table-car-no2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-licenseplate2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-province2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-regis-date2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-cost-center2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-equipment3 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-change-prop-table-car-no3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-licenseplate3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-province3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-regis-date3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-cost-center3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-equipment4 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-change-prop-table-car-no4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-licenseplate4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-province4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-regis-date4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-cost-center4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-equipment5 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-change-prop-table-car-no5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-licenseplate5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-province5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-regis-date5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-change-prop-table-cost-center5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 390px) {
            .registraton-change-prop-table-equipment1 {
              align-self: center;
              text-align: center;
            }
            .registraton-change-prop-table-equipment2 {
              align-self: center;
              text-align: center;
            }
            .registraton-change-prop-table-equipment3 {
              align-self: center;
              text-align: center;
            }
            .registraton-change-prop-table-equipment4 {
              align-self: center;
              text-align: center;
            }
            .registraton-change-prop-table-equipment5 {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

RegistratonChangePropTable.defaultProps = {
  dateDetermine112: undefined,
  dateDetermine111213: undefined,
  carNumber11: undefined,
  rootClassName: '',
  dateDetermine1111214: undefined,
  dateDetermine111214: undefined,
  dateDetermine1215: undefined,
  carNumber111: undefined,
  collectorName11: undefined,
  collectorName1115: undefined,
  button3: undefined,
  dateDetermine121: undefined,
  text1: undefined,
  dateDetermine1214: undefined,
  dateDetermine11121: undefined,
  dateDetermine111215: undefined,
  dateDetermine11112: undefined,
  dateDetermine11111111111151: undefined,
  dateDetermine1112: undefined,
  carNumber1114: undefined,
  dateDetermine1121: undefined,
  dateDetermine111121: undefined,
  collectorName111: undefined,
  dateDetermine11214: undefined,
  dateDetermine1111215: undefined,
  collectorName1113: undefined,
  dateDetermine11215: undefined,
  text: undefined,
  dateDetermine11213: undefined,
  dateDetermine12: undefined,
  carNumber1113: undefined,
  text11: undefined,
  dateDetermine1111213: undefined,
  dateDetermine1213: undefined,
  carNumber1115: undefined,
  collectorName1114: undefined,
}

RegistratonChangePropTable.propTypes = {
  dateDetermine112: PropTypes.element,
  dateDetermine111213: PropTypes.element,
  carNumber11: PropTypes.element,
  rootClassName: PropTypes.string,
  dateDetermine1111214: PropTypes.element,
  dateDetermine111214: PropTypes.element,
  dateDetermine1215: PropTypes.element,
  carNumber111: PropTypes.element,
  collectorName11: PropTypes.element,
  collectorName1115: PropTypes.element,
  button3: PropTypes.element,
  dateDetermine121: PropTypes.element,
  text1: PropTypes.element,
  dateDetermine1214: PropTypes.element,
  dateDetermine11121: PropTypes.element,
  dateDetermine111215: PropTypes.element,
  dateDetermine11112: PropTypes.element,
  dateDetermine11111111111151: PropTypes.element,
  dateDetermine1112: PropTypes.element,
  carNumber1114: PropTypes.element,
  dateDetermine1121: PropTypes.element,
  dateDetermine111121: PropTypes.element,
  collectorName111: PropTypes.element,
  dateDetermine11214: PropTypes.element,
  dateDetermine1111215: PropTypes.element,
  collectorName1113: PropTypes.element,
  dateDetermine11215: PropTypes.element,
  text: PropTypes.element,
  dateDetermine11213: PropTypes.element,
  dateDetermine12: PropTypes.element,
  carNumber1113: PropTypes.element,
  text11: PropTypes.element,
  dateDetermine1111213: PropTypes.element,
  dateDetermine1213: PropTypes.element,
  carNumber1115: PropTypes.element,
  collectorName1114: PropTypes.element,
}

export default RegistratonChangePropTable
