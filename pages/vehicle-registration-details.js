import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CarHero from '../components/car-hero'
import CarDetailsdetails from '../components/car-detailsdetails'
import StatusItem from '../components/status-item'
import DetailsCard from '../components/details-card'
import Footer from '../components/footer'

const VehicleRegistrationDetails = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="vehicle-registration-details-container1">
        <Head>
          <title>VehicleRegistrationDetails - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:title"
            content="VehicleRegistrationDetails - V-REG"
          />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name12"></Header>
        <div className="vehicle-registration-details-research-content">
          <CarHero
            rootClassName="car-heroroot-class-name"
            scientificName1={
              <Fragment>
                <span className="vehicle-registration-details-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NP_Nr-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName11={
              <Fragment>
                <span className="vehicle-registration-details-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Cm2k82'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName12={
              <Fragment>
                <span className="vehicle-registration-details-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_nOAnIj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName111={
              <Fragment>
                <span className="vehicle-registration-details-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CKgLST'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName112={
              <Fragment>
                <span className="vehicle-registration-details-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rIr0Uz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            scientificName1111={
              <Fragment>
                <span className="vehicle-registration-details-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_C31pW3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></CarHero>
          <CarDetailsdetails
            text3={
              <Fragment>
                <span className="vehicle-registration-details-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EceSsn'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="vehicle-registration-details-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HT5N_R'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text22={
              <Fragment>
                <span className="vehicle-registration-details-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OXx0-5'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button4={
              <Fragment>
                <span className="vehicle-registration-details-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qRnQOc'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="vehicle-registration-details-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ybXMMw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text212={
              <Fragment>
                <span className="vehicle-registration-details-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_76LNkX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            button41={
              <Fragment>
                <span className="vehicle-registration-details-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9A3nnz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="vehicle-registration-details-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uV0xXF'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="vehicle-registration-details-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_USYeCj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2112={
              <Fragment>
                <span className="vehicle-registration-details-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MtcbDb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="vehicle-registration-details-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_pYsj3D'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading21={
              <Fragment>
                <span className="vehicle-registration-details-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ktrcMi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21112={
              <Fragment>
                <span className="vehicle-registration-details-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JNKpBW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading111={
              <Fragment>
                <span className="vehicle-registration-details-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__Ey3Ta'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading211={
              <Fragment>
                <span className="vehicle-registration-details-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VzwKd4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text211112={
              <Fragment>
                <span className="vehicle-registration-details-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kBxzTY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading1111={
              <Fragment>
                <span className="vehicle-registration-details-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_a4-txq'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading2111={
              <Fragment>
                <span className="vehicle-registration-details-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1BgT0W'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2111112={
              <Fragment>
                <span className="vehicle-registration-details-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tCtGMb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text21111111={
              <Fragment>
                <span className="vehicle-registration-details-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Wt9GVx'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="car-detailsdetailsroot-class-name"
          ></CarDetailsdetails>
          <div className="vehicle-registration-details-container2">
            <div className="vehicle-registration-details-container3">
              <StatusItem
                head1={
                  <Fragment>
                    <span className="vehicle-registration-details-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vJq_Lv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                statusItem1={
                  <Fragment>
                    <span className="vehicle-registration-details-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ah7eus'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="status-itemroot-class-name"
              ></StatusItem>
              <div className="vehicle-registration-details-container4">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGNhcnxlbnwwfHx8fDE3NDE4ODE2NzV8MA&amp;ixlib=rb-4.0.3&amp;h=400"
                  className="vehicle-registration-details-image"
                />
                <button
                  type="button"
                  className="vehicle-registration-details-button button"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bI5izB'),
                    }}
                  ></span>
                </button>
              </div>
            </div>
            <div className="vehicle-registration-details-container5">
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Bbrld6'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_o700o-'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="rootClassName9"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_S2tJWC'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZB8R1n'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="rootClassName11"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_CbAvS5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_N59PR4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="rootClassName13"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eiS1og'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_NHTskY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="rootClassName15"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text46">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_mKLTZI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_zQgs2Y'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="details-cardroot-class-name16"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text48">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ziv09g'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text49">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_m9ytxA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="details-cardroot-class-name17"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text50">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_RPNCTZ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text51">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gGGJkl'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="details-cardroot-class-name18"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text52">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_AvFntp'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text53">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_TZNxzb'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="details-cardroot-class-name19"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text54">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_NJmZMv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text55">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_77-3ph'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="details-cardroot-class-name20"
              ></DetailsCard>
              <DetailsCard
                title1={
                  <Fragment>
                    <span className="vehicle-registration-details-text56">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9PRK58'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="vehicle-registration-details-text57">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9Nsw-r'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="details-cardroot-class-name21"
              ></DetailsCard>
            </div>
          </div>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="vehicle-registration-details-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gWDyQm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name11"
        ></Footer>
      </div>
      <style jsx>
        {`
          .vehicle-registration-details-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .vehicle-registration-details-research-content {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: column;
          }
          .vehicle-registration-details-text10 {
            display: inline-block;
          }
          .vehicle-registration-details-text11 {
            display: inline-block;
          }
          .vehicle-registration-details-text12 {
            display: inline-block;
          }
          .vehicle-registration-details-text13 {
            display: inline-block;
          }
          .vehicle-registration-details-text14 {
            display: inline-block;
          }
          .vehicle-registration-details-text15 {
            display: inline-block;
          }
          .vehicle-registration-details-text16 {
            color: #ffbd59;
            display: inline-block;
            text-decoration: underline;
          }
          .vehicle-registration-details-text17 {
            display: inline-block;
          }
          .vehicle-registration-details-text18 {
            display: inline-block;
          }
          .vehicle-registration-details-text19 {
            display: inline-block;
          }
          .vehicle-registration-details-text20 {
            display: inline-block;
          }
          .vehicle-registration-details-text21 {
            display: inline-block;
          }
          .vehicle-registration-details-text22 {
            display: inline-block;
          }
          .vehicle-registration-details-text23 {
            display: inline-block;
          }
          .vehicle-registration-details-text24 {
            display: inline-block;
          }
          .vehicle-registration-details-text25 {
            display: inline-block;
          }
          .vehicle-registration-details-text26 {
            display: inline-block;
          }
          .vehicle-registration-details-text27 {
            display: inline-block;
          }
          .vehicle-registration-details-text28 {
            display: inline-block;
          }
          .vehicle-registration-details-text29 {
            display: inline-block;
          }
          .vehicle-registration-details-text30 {
            display: inline-block;
          }
          .vehicle-registration-details-text31 {
            display: inline-block;
          }
          .vehicle-registration-details-text32 {
            display: inline-block;
          }
          .vehicle-registration-details-text33 {
            display: inline-block;
          }
          .vehicle-registration-details-text34 {
            display: inline-block;
          }
          .vehicle-registration-details-text35 {
            display: inline-block;
          }
          .vehicle-registration-details-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: row;
            justify-content: space-between;
          }
          .vehicle-registration-details-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .vehicle-registration-details-text36 {
            display: inline-block;
          }
          .vehicle-registration-details-text37 {
            display: inline-block;
          }
          .vehicle-registration-details-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: space-between;
            margin-left: var(--dl-layout-space-fourunits);
            margin-right: var(--dl-layout-space-fourunits);
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .vehicle-registration-details-image {
            flex: 1;
            width: 260px;
            height: 336px;
            align-self: center;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius8);
            margin-bottom: var(--dl-layout-space-twounits);
            object-position: left;
          }
          .vehicle-registration-details-button {
            color: var(--dl-color-gray-white);
            width: 200px;
            height: auto;
            align-self: center;
            text-align: center;
            background-color: rgb(20, 67, 114);
          }
          .vehicle-registration-details-container5 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .vehicle-registration-details-text38 {
            display: inline-block;
          }
          .vehicle-registration-details-text39 {
            display: inline-block;
          }
          .vehicle-registration-details-text40 {
            display: inline-block;
          }
          .vehicle-registration-details-text41 {
            display: inline-block;
          }
          .vehicle-registration-details-text42 {
            display: inline-block;
          }
          .vehicle-registration-details-text43 {
            display: inline-block;
          }
          .vehicle-registration-details-text44 {
            display: inline-block;
          }
          .vehicle-registration-details-text45 {
            display: inline-block;
          }
          .vehicle-registration-details-text46 {
            display: inline-block;
          }
          .vehicle-registration-details-text47 {
            display: inline-block;
          }
          .vehicle-registration-details-text48 {
            display: inline-block;
          }
          .vehicle-registration-details-text49 {
            display: inline-block;
          }
          .vehicle-registration-details-text50 {
            display: inline-block;
          }
          .vehicle-registration-details-text51 {
            display: inline-block;
          }
          .vehicle-registration-details-text52 {
            display: inline-block;
          }
          .vehicle-registration-details-text53 {
            display: inline-block;
          }
          .vehicle-registration-details-text54 {
            display: inline-block;
          }
          .vehicle-registration-details-text55 {
            display: inline-block;
          }
          .vehicle-registration-details-text56 {
            display: inline-block;
          }
          .vehicle-registration-details-text57 {
            display: inline-block;
          }
          .vehicle-registration-details-text58 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .vehicle-registration-details-research-content {
              align-items: center;
            }
            .vehicle-registration-details-container2 {
              flex-direction: column;
            }
            .vehicle-registration-details-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-layout-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .vehicle-registration-details-research-content {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .vehicle-registration-details-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .vehicle-registration-details-research-content {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .vehicle-registration-details-image {
              width: 250px;
              height: 250px;
            }
            .vehicle-registration-details-container5 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 390px) {
            .vehicle-registration-details-research-content {
              height: 1967px;
              margin-top: 204px;
            }
          }
        `}
      </style>
    </>
  )
}

export default VehicleRegistrationDetails

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
