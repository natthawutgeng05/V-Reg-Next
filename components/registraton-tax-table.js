import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const RegistratonTaxTable = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`registraton-tax-table-container10 ${props.rootClassName} `}
      >
        <div className="registraton-tax-table-container11">
          <div className="registraton-tax-table-container12">
            <div className="registraton-tax-table-container13">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text66">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_iKVIay'),
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
            <div className="registraton-tax-table-container14">
              <span>
                {props.text1 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text61">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_f_y6jj'),
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
            <div className="registraton-tax-table-container15">
              <span>
                {props.text11 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text62">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MDcsMM'),
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
          <div className="registraton-tax-table-container16">
            <button
              type="button"
              className="registraton-tax-table-button10 button"
            >
              <span>
                {props.button3 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text81">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_81bPly'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="registraton-tax-table-container17">
          <div className="registraton-tax-table-container18">
            <button
              type="button"
              className="registraton-tax-table-button11 button"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7cBg4B'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button12 button"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text59">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bgtFP5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button13 button"
            >
              <span>
                {props.button21 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text58">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ek7hLA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button14 button"
            >
              <span>
                {props.button211 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text71">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4bo3QG'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button15 button"
            >
              <span>
                {props.button2111 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_PGHI1v'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button16 button"
            >
              <span>
                {props.button21111 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text84">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5T4yhm'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button17 button"
            >
              <span>
                {props.button211111 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text57">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DsoRG3'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button18 button"
            >
              <span>
                {props.button2111111 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text48">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kym_aP'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button19 button"
            >
              <span>
                {props.button21111111 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_cIIG15'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button20 button"
            >
              <span>
                {props.button211111111 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text64">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vM_Pni'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button21 button"
            >
              <span>
                {props.button2111111111 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wFiRGj'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button
              type="button"
              className="registraton-tax-table-button22 button"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="registraton-tax-table-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Czlvf2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="registraton-tax-table-container19">
          <span className="registraton-tax-table-equipment1">
            {props.carNumber11 ?? (
              <Fragment>
                <span className="registraton-tax-table-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BnxCdh'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-no1">
            {props.collectorName11 ?? (
              <Fragment>
                <span className="registraton-tax-table-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gUC_aY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-licenseplate1">
            {props.dateDetermine12 ?? (
              <Fragment>
                <span className="registraton-tax-table-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OrU9zw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-province1">
            {props.dateDetermine112 ?? (
              <Fragment>
                <span className="registraton-tax-table-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-xib-o'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-regis-date1">
            {props.dateDetermine1112 ?? (
              <Fragment>
                <span className="registraton-tax-table-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zLR3eu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-cost-center1">
            {props.dateDetermine11112 ?? (
              <Fragment>
                <span className="registraton-tax-table-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vEKKYV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-division1">
            {props.dateDetermine111112 ?? (
              <Fragment>
                <span className="registraton-tax-table-text87">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IJdA_e'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-date-tax-expired1">
            {props.dateDetermine1111112 ?? (
              <Fragment>
                <span className="registraton-tax-table-text86">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_otBsvx'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-agr1">
            {props.dateDetermine11111112 ?? (
              <Fragment>
                <span className="registraton-tax-table-text72">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rAqjfS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-action">
            {props.dateDetermine11111111111151 ?? (
              <Fragment>
                <span className="registraton-tax-table-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TkWWPV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="registraton-tax-table-container20">
          <span className="registraton-tax-table-equipment2">
            {props.carNumber111 ?? (
              <Fragment>
                <span className="registraton-tax-table-text78">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__hYeou'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-no2">
            {props.collectorName111 ?? (
              <Fragment>
                <span className="registraton-tax-table-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TMFJ63'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-licenseplate2">
            {props.dateDetermine121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text76">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IODWp9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-province2">
            {props.dateDetermine1121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_x5oIB6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-regis-date2">
            {props.dateDetermine11121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AjI2il'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-cost-center2">
            {props.dateDetermine111121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text68">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Kq0Jno'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-division2">
            {props.dateDetermine1111121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text79">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LiXbQM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-date-tax-expired2">
            {props.dateDetermine11111121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_63AorZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-agr2">
            {props.dateDetermine111111121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Nu6xS8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="registraton-tax-table-container21">
            <Link href="/vehicle-registration-tax">
              <a className="registraton-tax-table-link1">
                <svg
                  width="24"
                  height="24"
                  view-box="0 0 24 24"
                  className="registraton-tax-table-icon1"
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
        <div className="registraton-tax-table-container22">
          <span className="registraton-tax-table-equipment3">
            {props.carNumber1112 ?? (
              <Fragment>
                <span className="registraton-tax-table-text70">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mPKh3r'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-no3">
            {props.collectorName1112 ?? (
              <Fragment>
                <span className="registraton-tax-table-text77">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fTC2pR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-licenseplate3">
            {props.dateDetermine1212 ?? (
              <Fragment>
                <span className="registraton-tax-table-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6kt-dr'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-province3">
            {props.dateDetermine11212 ?? (
              <Fragment>
                <span className="registraton-tax-table-text82">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_m79kOE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-regis-date3">
            {props.dateDetermine111212 ?? (
              <Fragment>
                <span className="registraton-tax-table-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KHi1HC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-cost-center3">
            {props.dateDetermine1111212 ?? (
              <Fragment>
                <span className="registraton-tax-table-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZKi_Sb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-division3">
            {props.dateDetermine11111212 ?? (
              <Fragment>
                <span className="registraton-tax-table-text85">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XmCMYK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-date-tax-expired3">
            {props.dateDetermine111111212 ?? (
              <Fragment>
                <span className="registraton-tax-table-text73">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_i9g7G_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-agr3">
            {props.dateDetermine1111111212 ?? (
              <Fragment>
                <span className="registraton-tax-table-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BNyGXh'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="registraton-tax-table-container23">
            <Link href="/vehicle-registration-tax">
              <a className="registraton-tax-table-link2">
                <svg
                  width="24"
                  height="24"
                  view-box="0 0 24 24"
                  className="registraton-tax-table-icon3"
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
        <div className="registraton-tax-table-container24">
          <span className="registraton-tax-table-equipment4">
            {props.carNumber11121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_op5ajL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-no4">
            {props.collectorName11121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text74">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CnwRTs'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-licenseplate4">
            {props.dateDetermine12121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_J57K9c'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-province4">
            {props.dateDetermine112121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text69">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2SJv9Q'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-regis-date4">
            {props.dateDetermine1112121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3jUg4F'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-cost-center4">
            {props.dateDetermine11112121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text80">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XYG8zd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-division4">
            {props.dateDetermine111112121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_E17B9m'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-date-tax-expired4">
            {props.dateDetermine1111112121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4g4I2r'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-agr4">
            {props.dateDetermine11111112121 ?? (
              <Fragment>
                <span className="registraton-tax-table-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KnWBzt'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="registraton-tax-table-container25">
            <Link href="/vehicle-registration-tax">
              <a className="registraton-tax-table-link3">
                <svg
                  width="24"
                  height="24"
                  view-box="0 0 24 24"
                  className="registraton-tax-table-icon5"
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
        <div className="registraton-tax-table-container26">
          <span className="registraton-tax-table-equipment5">
            {props.carNumber1111 ?? (
              <Fragment>
                <span className="registraton-tax-table-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ADtVwb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-no5">
            {props.collectorName1111 ?? (
              <Fragment>
                <span className="registraton-tax-table-text67">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tGOjM5'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-licenseplate5">
            {props.dateDetermine1211 ?? (
              <Fragment>
                <span className="registraton-tax-table-text75">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VaoP29'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-province5">
            {props.dateDetermine11211 ?? (
              <Fragment>
                <span className="registraton-tax-table-text83">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ESKuxD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-regis-date5">
            {props.dateDetermine111211 ?? (
              <Fragment>
                <span className="registraton-tax-table-text65">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TU4jbO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-cost-center5">
            {props.dateDetermine1111211 ?? (
              <Fragment>
                <span className="registraton-tax-table-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vHeUoj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-division5">
            {props.dateDetermine11111211 ?? (
              <Fragment>
                <span className="registraton-tax-table-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_svV2VB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-date-tax-expired5">
            {props.dateDetermine111111211 ?? (
              <Fragment>
                <span className="registraton-tax-table-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qca3_6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="registraton-tax-table-car-agr5">
            {props.dateDetermine1111111211 ?? (
              <Fragment>
                <span className="registraton-tax-table-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HUeCOM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="registraton-tax-table-container27">
            <Link href="/vehicle-registration-tax">
              <a className="registraton-tax-table-link4">
                <svg
                  width="24"
                  height="24"
                  view-box="0 0 24 24"
                  className="registraton-tax-table-icon7"
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
          .registraton-tax-table-container10 {
            width: auto;
            height: auto;
            display: flex;
            overflow: scroll;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .registraton-tax-table-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: space-between;
          }
          .registraton-tax-table-container12 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .registraton-tax-table-container13 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .registraton-tax-table-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .registraton-tax-table-container15 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .registraton-tax-table-container16 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .registraton-tax-table-button10 {
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-container17 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .registraton-tax-table-container18 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .registraton-tax-table-button11 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button12 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button13 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button14 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button15 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button16 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button17 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button18 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button19 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button20 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button21 {
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-button22 {
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .registraton-tax-table-container19 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-tax-table-equipment1 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-tax-table-car-no1 {
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
          .registraton-tax-table-licenseplate1 {
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
          .registraton-tax-table-province1 {
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
          .registraton-tax-table-regis-date1 {
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
          .registraton-tax-table-cost-center1 {
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
          .registraton-tax-table-division1 {
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
          .registraton-tax-table-date-tax-expired1 {
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
          .registraton-tax-table-car-agr1 {
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
          .registraton-tax-table-action {
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
          .registraton-tax-table-container20 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-tax-table-equipment2 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-tax-table-car-no2 {
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
          .registraton-tax-table-licenseplate2 {
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
          .registraton-tax-table-province2 {
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
          .registraton-tax-table-regis-date2 {
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
          .registraton-tax-table-cost-center2 {
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
          .registraton-tax-table-division2 {
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
          .registraton-tax-table-date-tax-expired2 {
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
          .registraton-tax-table-car-agr2 {
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
          .registraton-tax-table-container21 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .registraton-tax-table-link1 {
            display: contents;
          }
          .registraton-tax-table-icon1 {
            text-decoration: none;
          }
          .registraton-tax-table-container22 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-tax-table-equipment3 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-tax-table-car-no3 {
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
          .registraton-tax-table-licenseplate3 {
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
          .registraton-tax-table-province3 {
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
          .registraton-tax-table-regis-date3 {
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
          .registraton-tax-table-cost-center3 {
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
          .registraton-tax-table-division3 {
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
          .registraton-tax-table-date-tax-expired3 {
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
          .registraton-tax-table-car-agr3 {
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
          .registraton-tax-table-container23 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .registraton-tax-table-link2 {
            display: contents;
          }
          .registraton-tax-table-icon3 {
            text-decoration: none;
          }
          .registraton-tax-table-container24 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-tax-table-equipment4 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-tax-table-car-no4 {
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
          .registraton-tax-table-licenseplate4 {
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
          .registraton-tax-table-province4 {
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
          .registraton-tax-table-regis-date4 {
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
          .registraton-tax-table-cost-center4 {
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
          .registraton-tax-table-division4 {
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
          .registraton-tax-table-date-tax-expired4 {
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
          .registraton-tax-table-car-agr4 {
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
          .registraton-tax-table-container25 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .registraton-tax-table-link3 {
            display: contents;
          }
          .registraton-tax-table-icon5 {
            text-decoration: none;
          }
          .registraton-tax-table-container26 {
            flex: initial;
            width: var(--dl-layout-size-maxwidth);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .registraton-tax-table-equipment5 {
            color: #000000;
            width: var(--dl-layout-size-medium);
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0px;
          }
          .registraton-tax-table-car-no5 {
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
          .registraton-tax-table-licenseplate5 {
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
          .registraton-tax-table-province5 {
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
          .registraton-tax-table-regis-date5 {
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
          .registraton-tax-table-cost-center5 {
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
          .registraton-tax-table-division5 {
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
          .registraton-tax-table-date-tax-expired5 {
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
          .registraton-tax-table-car-agr5 {
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
          .registraton-tax-table-container27 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-medium);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .registraton-tax-table-link4 {
            display: contents;
          }
          .registraton-tax-table-icon7 {
            text-decoration: none;
          }
          .registraton-tax-table-text26 {
            display: inline-block;
          }
          .registraton-tax-table-text27 {
            display: inline-block;
          }
          .registraton-tax-table-text28 {
            display: inline-block;
          }
          .registraton-tax-table-text29 {
            display: inline-block;
          }
          .registraton-tax-table-text30 {
            display: inline-block;
          }
          .registraton-tax-table-text31 {
            display: inline-block;
          }
          .registraton-tax-table-text32 {
            display: inline-block;
          }
          .registraton-tax-table-text33 {
            display: inline-block;
          }
          .registraton-tax-table-text34 {
            display: inline-block;
          }
          .registraton-tax-table-text35 {
            display: inline-block;
          }
          .registraton-tax-table-text36 {
            display: inline-block;
          }
          .registraton-tax-table-text37 {
            display: inline-block;
          }
          .registraton-tax-table-text38 {
            display: inline-block;
          }
          .registraton-tax-table-text39 {
            display: inline-block;
          }
          .registraton-tax-table-text40 {
            display: inline-block;
          }
          .registraton-tax-table-text41 {
            display: inline-block;
          }
          .registraton-tax-table-text42 {
            display: inline-block;
          }
          .registraton-tax-table-text43 {
            display: inline-block;
          }
          .registraton-tax-table-text44 {
            display: inline-block;
          }
          .registraton-tax-table-text45 {
            display: inline-block;
          }
          .registraton-tax-table-text46 {
            display: inline-block;
          }
          .registraton-tax-table-text47 {
            display: inline-block;
          }
          .registraton-tax-table-text48 {
            display: inline-block;
          }
          .registraton-tax-table-text49 {
            display: inline-block;
          }
          .registraton-tax-table-text50 {
            display: inline-block;
          }
          .registraton-tax-table-text51 {
            display: inline-block;
          }
          .registraton-tax-table-text52 {
            display: inline-block;
          }
          .registraton-tax-table-text53 {
            display: inline-block;
          }
          .registraton-tax-table-text54 {
            display: inline-block;
          }
          .registraton-tax-table-text55 {
            display: inline-block;
          }
          .registraton-tax-table-text56 {
            display: inline-block;
          }
          .registraton-tax-table-text57 {
            display: inline-block;
          }
          .registraton-tax-table-text58 {
            display: inline-block;
          }
          .registraton-tax-table-text59 {
            display: inline-block;
          }
          .registraton-tax-table-text60 {
            display: inline-block;
          }
          .registraton-tax-table-text61 {
            display: inline-block;
          }
          .registraton-tax-table-text62 {
            display: inline-block;
          }
          .registraton-tax-table-text63 {
            display: inline-block;
          }
          .registraton-tax-table-text64 {
            display: inline-block;
          }
          .registraton-tax-table-text65 {
            display: inline-block;
          }
          .registraton-tax-table-text66 {
            display: inline-block;
          }
          .registraton-tax-table-text67 {
            display: inline-block;
          }
          .registraton-tax-table-text68 {
            display: inline-block;
          }
          .registraton-tax-table-text69 {
            display: inline-block;
          }
          .registraton-tax-table-text70 {
            display: inline-block;
          }
          .registraton-tax-table-text71 {
            display: inline-block;
          }
          .registraton-tax-table-text72 {
            display: inline-block;
          }
          .registraton-tax-table-text73 {
            display: inline-block;
          }
          .registraton-tax-table-text74 {
            display: inline-block;
          }
          .registraton-tax-table-text75 {
            display: inline-block;
          }
          .registraton-tax-table-text76 {
            display: inline-block;
          }
          .registraton-tax-table-text77 {
            display: inline-block;
          }
          .registraton-tax-table-text78 {
            display: inline-block;
          }
          .registraton-tax-table-text79 {
            display: inline-block;
          }
          .registraton-tax-table-text80 {
            display: inline-block;
          }
          .registraton-tax-table-text81 {
            display: inline-block;
          }
          .registraton-tax-table-text82 {
            display: inline-block;
          }
          .registraton-tax-table-text83 {
            display: inline-block;
          }
          .registraton-tax-table-text84 {
            display: inline-block;
          }
          .registraton-tax-table-text85 {
            display: inline-block;
          }
          .registraton-tax-table-text86 {
            display: inline-block;
          }
          .registraton-tax-table-text87 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .registraton-tax-table-container10 {
              width: 100%;
            }
            .registraton-tax-table-container11 {
              width: 100%;
            }
            .registraton-tax-table-container17 {
              width: 100%;
            }
            .registraton-tax-table-container19 {
              width: 100%;
            }
            .registraton-tax-table-equipment1 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr1 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-action {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-container20 {
              width: 100%;
            }
            .registraton-tax-table-equipment2 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr2 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-container22 {
              width: 100%;
            }
            .registraton-tax-table-equipment3 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr3 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-container24 {
              width: 100%;
            }
            .registraton-tax-table-equipment4 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr4 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-container26 {
              width: 100%;
            }
            .registraton-tax-table-equipment5 {
              color: #000000;
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired5 {
              color: #000000;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr5 {
              color: #000000;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 1400px) {
            .registraton-tax-table-equipment1 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr1 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-action {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-equipment2 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr2 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-equipment3 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr3 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-equipment4 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr4 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-equipment5 {
              color: var(--dl-color-gray-black);
              padding-bottom: 0px;
            }
            .registraton-tax-table-car-no5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-licenseplate5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-province5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-regis-date5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-cost-center5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-division5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-date-tax-expired5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
            .registraton-tax-table-car-agr5 {
              color: var(--dl-color-gray-black);
              align-self: center;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 1000px) {
            .registraton-tax-table-container11 {
              width: 100%;
            }
            .registraton-tax-table-container17 {
              width: 100%;
            }
            .registraton-tax-table-container19 {
              width: 100%;
            }
            .registraton-tax-table-container20 {
              width: 100%;
            }
            .registraton-tax-table-container22 {
              width: 100%;
            }
            .registraton-tax-table-container24 {
              width: 100%;
            }
            .registraton-tax-table-container26 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .registraton-tax-table-car-no1 {
              align-self: center;
            }
            .registraton-tax-table-licenseplate1 {
              align-self: center;
            }
            .registraton-tax-table-province1 {
              align-self: center;
            }
            .registraton-tax-table-regis-date1 {
              align-self: center;
            }
            .registraton-tax-table-cost-center1 {
              align-self: center;
            }
            .registraton-tax-table-division1 {
              align-self: center;
            }
            .registraton-tax-table-date-tax-expired1 {
              align-self: center;
            }
            .registraton-tax-table-car-agr1 {
              align-self: center;
            }
            .registraton-tax-table-action {
              align-self: center;
            }
            .registraton-tax-table-car-no2 {
              align-self: center;
            }
            .registraton-tax-table-licenseplate2 {
              align-self: center;
            }
            .registraton-tax-table-province2 {
              align-self: center;
            }
            .registraton-tax-table-regis-date2 {
              align-self: center;
            }
            .registraton-tax-table-cost-center2 {
              align-self: center;
            }
            .registraton-tax-table-division2 {
              align-self: center;
            }
            .registraton-tax-table-date-tax-expired2 {
              align-self: center;
            }
            .registraton-tax-table-car-agr2 {
              align-self: center;
            }
            .registraton-tax-table-car-no3 {
              align-self: center;
            }
            .registraton-tax-table-licenseplate3 {
              align-self: center;
            }
            .registraton-tax-table-province3 {
              align-self: center;
            }
            .registraton-tax-table-regis-date3 {
              align-self: center;
            }
            .registraton-tax-table-cost-center3 {
              align-self: center;
            }
            .registraton-tax-table-division3 {
              align-self: center;
            }
            .registraton-tax-table-date-tax-expired3 {
              align-self: center;
            }
            .registraton-tax-table-car-agr3 {
              align-self: center;
            }
            .registraton-tax-table-car-no4 {
              align-self: center;
            }
            .registraton-tax-table-licenseplate4 {
              align-self: center;
            }
            .registraton-tax-table-province4 {
              align-self: center;
            }
            .registraton-tax-table-regis-date4 {
              align-self: center;
            }
            .registraton-tax-table-cost-center4 {
              align-self: center;
            }
            .registraton-tax-table-division4 {
              align-self: center;
            }
            .registraton-tax-table-date-tax-expired4 {
              align-self: center;
            }
            .registraton-tax-table-car-agr4 {
              align-self: center;
            }
            .registraton-tax-table-car-no5 {
              align-self: center;
            }
            .registraton-tax-table-licenseplate5 {
              align-self: center;
            }
            .registraton-tax-table-province5 {
              align-self: center;
            }
            .registraton-tax-table-regis-date5 {
              align-self: center;
            }
            .registraton-tax-table-cost-center5 {
              align-self: center;
            }
            .registraton-tax-table-division5 {
              align-self: center;
            }
            .registraton-tax-table-date-tax-expired5 {
              align-self: center;
            }
            .registraton-tax-table-car-agr5 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .registraton-tax-table-equipment1 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-tax-table-car-no1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-licenseplate1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-province1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-regis-date1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-cost-center1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-division1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-date-tax-expired1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-car-agr1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-action {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-equipment2 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-tax-table-car-no2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-licenseplate2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-province2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-regis-date2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-cost-center2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-division2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-date-tax-expired2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-car-agr2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-equipment3 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-tax-table-car-no3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-licenseplate3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-province3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-regis-date3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-cost-center3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-division3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-date-tax-expired3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-car-agr3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-equipment4 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-tax-table-car-no4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-licenseplate4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-province4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-regis-date4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-cost-center4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-division4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-date-tax-expired4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-car-agr4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-equipment5 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .registraton-tax-table-car-no5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-licenseplate5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-province5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-regis-date5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-cost-center5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-division5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-date-tax-expired5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .registraton-tax-table-car-agr5 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 390px) {
            .registraton-tax-table-equipment1 {
              align-self: center;
              text-align: center;
            }
            .registraton-tax-table-equipment2 {
              align-self: center;
              text-align: center;
            }
            .registraton-tax-table-equipment3 {
              align-self: center;
              text-align: center;
            }
            .registraton-tax-table-equipment4 {
              align-self: center;
              text-align: center;
            }
            .registraton-tax-table-equipment5 {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

RegistratonTaxTable.defaultProps = {
  dateDetermine12121: undefined,
  dateDetermine11111111111151: undefined,
  carNumber11: undefined,
  collectorName11: undefined,
  button21111111: undefined,
  dateDetermine1212: undefined,
  dateDetermine111111211: undefined,
  dateDetermine1111111212: undefined,
  button: undefined,
  dateDetermine111212: undefined,
  carNumber1111: undefined,
  dateDetermine1111111211: undefined,
  rootClassName: '',
  dateDetermine112: undefined,
  dateDetermine111111121: undefined,
  dateDetermine111112121: undefined,
  dateDetermine1111212: undefined,
  button2111111111: undefined,
  dateDetermine1112: undefined,
  button1: undefined,
  button2111: undefined,
  dateDetermine11111112121: undefined,
  dateDetermine1111112121: undefined,
  button2111111: undefined,
  dateDetermine1112121: undefined,
  dateDetermine1121: undefined,
  dateDetermine1111211: undefined,
  dateDetermine11112: undefined,
  collectorName111: undefined,
  carNumber11121: undefined,
  dateDetermine11111121: undefined,
  dateDetermine11111211: undefined,
  button211111: undefined,
  button21: undefined,
  button2: undefined,
  dateDetermine12: undefined,
  text1: undefined,
  text11: undefined,
  dateDetermine11121: undefined,
  button211111111: undefined,
  dateDetermine111211: undefined,
  text: undefined,
  collectorName1111: undefined,
  dateDetermine111121: undefined,
  dateDetermine112121: undefined,
  carNumber1112: undefined,
  button211: undefined,
  dateDetermine11111112: undefined,
  dateDetermine111111212: undefined,
  collectorName11121: undefined,
  dateDetermine1211: undefined,
  dateDetermine121: undefined,
  collectorName1112: undefined,
  carNumber111: undefined,
  dateDetermine1111121: undefined,
  dateDetermine11112121: undefined,
  button3: undefined,
  dateDetermine11212: undefined,
  dateDetermine11211: undefined,
  button21111: undefined,
  dateDetermine11111212: undefined,
  dateDetermine1111112: undefined,
  dateDetermine111112: undefined,
}

RegistratonTaxTable.propTypes = {
  dateDetermine12121: PropTypes.element,
  dateDetermine11111111111151: PropTypes.element,
  carNumber11: PropTypes.element,
  collectorName11: PropTypes.element,
  button21111111: PropTypes.element,
  dateDetermine1212: PropTypes.element,
  dateDetermine111111211: PropTypes.element,
  dateDetermine1111111212: PropTypes.element,
  button: PropTypes.element,
  dateDetermine111212: PropTypes.element,
  carNumber1111: PropTypes.element,
  dateDetermine1111111211: PropTypes.element,
  rootClassName: PropTypes.string,
  dateDetermine112: PropTypes.element,
  dateDetermine111111121: PropTypes.element,
  dateDetermine111112121: PropTypes.element,
  dateDetermine1111212: PropTypes.element,
  button2111111111: PropTypes.element,
  dateDetermine1112: PropTypes.element,
  button1: PropTypes.element,
  button2111: PropTypes.element,
  dateDetermine11111112121: PropTypes.element,
  dateDetermine1111112121: PropTypes.element,
  button2111111: PropTypes.element,
  dateDetermine1112121: PropTypes.element,
  dateDetermine1121: PropTypes.element,
  dateDetermine1111211: PropTypes.element,
  dateDetermine11112: PropTypes.element,
  collectorName111: PropTypes.element,
  carNumber11121: PropTypes.element,
  dateDetermine11111121: PropTypes.element,
  dateDetermine11111211: PropTypes.element,
  button211111: PropTypes.element,
  button21: PropTypes.element,
  button2: PropTypes.element,
  dateDetermine12: PropTypes.element,
  text1: PropTypes.element,
  text11: PropTypes.element,
  dateDetermine11121: PropTypes.element,
  button211111111: PropTypes.element,
  dateDetermine111211: PropTypes.element,
  text: PropTypes.element,
  collectorName1111: PropTypes.element,
  dateDetermine111121: PropTypes.element,
  dateDetermine112121: PropTypes.element,
  carNumber1112: PropTypes.element,
  button211: PropTypes.element,
  dateDetermine11111112: PropTypes.element,
  dateDetermine111111212: PropTypes.element,
  collectorName11121: PropTypes.element,
  dateDetermine1211: PropTypes.element,
  dateDetermine121: PropTypes.element,
  collectorName1112: PropTypes.element,
  carNumber111: PropTypes.element,
  dateDetermine1111121: PropTypes.element,
  dateDetermine11112121: PropTypes.element,
  button3: PropTypes.element,
  dateDetermine11212: PropTypes.element,
  dateDetermine11211: PropTypes.element,
  button21111: PropTypes.element,
  dateDetermine11111212: PropTypes.element,
  dateDetermine1111112: PropTypes.element,
  dateDetermine111112: PropTypes.element,
}

export default RegistratonTaxTable
