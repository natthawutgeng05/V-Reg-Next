import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CardNavigation from '../components/card-navigation'
import Footer from '../components/footer'

const Homepage = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="homepage-container1">
        <Head>
          <title>Homepage - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="Homepage - V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name"></Header>
        <div className="homepage-research-categories">
          <div className="homepage-container2">
            <h1 className="homepage-text1">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_1zA6_7'),
                }}
              ></span>
            </h1>
            <span className="homepage-text2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_mgIIAb'),
                }}
              ></span>
            </span>
          </div>
        </div>
        <div className="homepage-container3">
          <div className="homepage-blog">
            <div className="homepage-container4">
              <Link href="/car-home">
                <a className="homepage-link1">
                  <CardNavigation
                    name1={
                      <Fragment>
                        <span className="homepage-text3">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_zOtx1g'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    }
                    rootClassName="card-navigationroot-class-name6"
                    className="homepage-component2"
                  ></CardNavigation>
                </a>
              </Link>
            </div>
            <div className="homepage-container5">
              <Link href="/registration-home">
                <a className="homepage-link2">
                  <CardNavigation
                    name1={
                      <Fragment>
                        <span className="homepage-text4">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_TV3VBk'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    }
                    rootClassName="card-navigationroot-class-name7"
                    className="homepage-component3"
                  ></CardNavigation>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="homepage-text5">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jPgFP4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .homepage-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .homepage-research-categories {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .homepage-container2 {
            width: 100%;
            height: 144px;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: 29px;
            justify-content: center;
            background-color: #d9d9d9;
          }
          .homepage-text1 {
            color: rgb(20, 67, 114);
          }
          .homepage-text2 {
            color: rgb(61, 113, 183);
            font-size: 20px;
            max-width: 600px;
            margin-top: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .homepage-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .homepage-blog {
            width: 1243px;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            align-self: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .homepage-container4 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .homepage-link1 {
            display: contents;
          }
          .homepage-component2 {
            text-decoration: none;
          }
          .homepage-text3 {
            display: inline-block;
          }
          .homepage-container5 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .homepage-link2 {
            display: contents;
          }
          .homepage-component3 {
            text-decoration: none;
          }
          .homepage-text4 {
            display: inline-block;
          }
          .homepage-text5 {
            display: inline-block;
          }
          @media (max-width: 1000px) {
            .homepage-container2 {
              height: 189px;
            }
            .homepage-container3 {
              flex-direction: row;
            }
            .homepage-blog {
              width: 1000px;
              height: 751px;
              flex-wrap: wrap;
              align-self: flex-start;
              align-items: stretch;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              flex-direction: column;
              justify-content: space-between;
            }
            .homepage-container4 {
              align-self: center;
              margin-right: 0px;
              justify-content: space-between;
            }
            .homepage-container5 {
              align-self: center;
              margin-right: 0px;
              justify-content: space-between;
            }
          }
          @media (max-width: 991px) {
            .homepage-text1 {
              text-align: center;
            }
            .homepage-text2 {
              text-align: center;
            }
            .homepage-blog {
              flex-direction: column;
            }
            .homepage-container4 {
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .homepage-container5 {
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .homepage-container2 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .homepage-blog {
              width: 767px;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .homepage-container2 {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .homepage-blog {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 390px) {
            .homepage-container2 {
              height: 208px;
            }
            .homepage-text1 {
              text-align: center;
            }
            .homepage-container3 {
              flex-direction: row;
            }
            .homepage-blog {
              height: 1389px;
              flex-direction: column;
            }
            .homepage-container4 {
              margin-right: 0px;
            }
            .homepage-container5 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Homepage

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
