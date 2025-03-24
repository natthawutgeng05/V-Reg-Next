import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import CardNavigation from '../components/card-navigation'
import Footer from '../components/footer'

const RegistrationHome = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="registration-home-container">
        <Head>
          <title>RegistrationHome - V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="RegistrationHome - V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="headerroot-class-name5"></Header>
        <div className="registration-home-features1">
          <Link href="/registration-tax">
            <a className="registration-home-link1">
              <CardNavigation
                name1={
                  <Fragment>
                    <span className="registration-home-text1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-ncOhU'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="card-navigationroot-class-name8"
                className="registration-home-component2"
              ></CardNavigation>
            </a>
          </Link>
          <Link href="/registration-changeproperties">
            <a className="registration-home-link2">
              <CardNavigation
                name1={
                  <Fragment>
                    <span className="registration-home-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_a76b2x'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="card-navigationroot-class-name9"
                className="registration-home-component3"
              ></CardNavigation>
            </a>
          </Link>
          <Link href="/registration-regis-car">
            <a className="registration-home-link3">
              <CardNavigation
                name1={
                  <Fragment>
                    <span className="registration-home-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_P9hJxN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="card-navigationroot-class-name19"
                className="registration-home-component4"
              ></CardNavigation>
            </a>
          </Link>
        </div>
        <div className="registration-home-features2">
          <Link href="/registration-cancel-and-cutoff">
            <a className="registration-home-link4">
              <CardNavigation
                name1={
                  <Fragment>
                    <span className="registration-home-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5B2Cyt'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="card-navigationroot-class-name20"
                className="registration-home-component5"
              ></CardNavigation>
            </a>
          </Link>
          <Link href="/registration-transfer">
            <a className="registration-home-link5">
              <CardNavigation
                name1={
                  <Fragment>
                    <span className="registration-home-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ydb_Gj'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="card-navigationroot-class-name21"
                className="registration-home-component6"
              ></CardNavigation>
            </a>
          </Link>
          <Link href="/registration-others">
            <a className="registration-home-link6">
              <CardNavigation
                name1={
                  <Fragment>
                    <span className="registration-home-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gVS77J'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="card-navigationroot-class-name22"
                className="registration-home-component7"
              ></CardNavigation>
            </a>
          </Link>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="registration-home-text7">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4aTKVR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name4"
        ></Footer>
      </div>
      <style jsx>
        {`
          .registration-home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .registration-home-features1 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: row;
            justify-content: space-between;
          }
          .registration-home-link1 {
            display: contents;
          }
          .registration-home-component2 {
            text-decoration: none;
          }
          .registration-home-text1 {
            display: inline-block;
          }
          .registration-home-link2 {
            display: contents;
          }
          .registration-home-component3 {
            text-decoration: none;
          }
          .registration-home-text2 {
            display: inline-block;
          }
          .registration-home-link3 {
            display: contents;
          }
          .registration-home-component4 {
            text-decoration: none;
          }
          .registration-home-text3 {
            display: inline-block;
          }
          .registration-home-features2 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: row;
            justify-content: space-between;
          }
          .registration-home-link4 {
            display: contents;
          }
          .registration-home-component5 {
            text-decoration: none;
          }
          .registration-home-text4 {
            display: inline-block;
          }
          .registration-home-link5 {
            display: contents;
          }
          .registration-home-component6 {
            text-decoration: none;
          }
          .registration-home-text5 {
            display: inline-block;
          }
          .registration-home-link6 {
            display: contents;
          }
          .registration-home-component7 {
            text-decoration: none;
          }
          .registration-home-text6 {
            display: inline-block;
          }
          .registration-home-text7 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .registration-home-features1 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .registration-home-features2 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .registration-home-features1 {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .registration-home-features2 {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default RegistrationHome

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
