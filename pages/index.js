import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import HeaderLogin from '../components/header-login'
import Footer from '../components/footer'

const Login = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="login-container1">
        <Head>
          <title>V-REG</title>
          <meta
            name="description"
            content="Haadthip Vehicle Registration System"
          />
          <meta property="og:title" content="V-REG" />
          <meta
            property="og:description"
            content="Haadthip Vehicle Registration System"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7efc2135-f8a0-4c34-9f56-c7a471ea9c94/ccc99100-9f2e-4a29-892d-e0dbdb7a61f0?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <HeaderLogin
          text={
            <Fragment>
              <span className="login-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_d62B6E'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></HeaderLogin>
        <div className="login-adminlogin">
          <h1 className="login-text2">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_53tgdh'),
              }}
            ></span>
          </h1>
          <div className="login-container2">
            <h1 className="login-text3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_nK-H4F'),
                }}
              ></span>
            </h1>
            <input
              type="text"
              name="username"
              required
              placeholder="Username"
              className="login-textinput1 input"
            />
          </div>
          <div className="login-container3">
            <h1 className="login-text4">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Rc0nCb'),
                }}
              ></span>
            </h1>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="login-textinput2 input"
            />
          </div>
          <Link href="/homepage">
            <a className="login-link button">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Text_axhiq3'),
                  }}
                ></span>
              </span>
            </a>
          </Link>
        </div>
        <Footer
          text1={
            <Fragment>
              <span className="login-text6">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wcZhdA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name15"
        ></Footer>
      </div>
      <style jsx>
        {`
          .login-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .login-text1 {
            display: inline-block;
          }
          .login-adminlogin {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            flex-direction: column;
            padding-bottom: 48px;
          }
          .login-text2 {
            align-self: center;
          }
          .login-container2 {
            flex: 0 0 auto;
            width: 500px;
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: row;
            justify-content: space-between;
          }
          .login-text3 {
            align-self: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .login-textinput1 {
            align-self: stretch;
          }
          .login-container3 {
            flex: 0 0 auto;
            width: 500px;
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: row;
            justify-content: space-between;
          }
          .login-text4 {
            align-self: center;
            margin-right: var(--dl-layout-space-unit);
          }
          .login-textinput2 {
            align-self: stretch;
          }
          .login-link {
            width: auto;
            height: auto;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            border-radius: 10px;
            text-decoration: none;
          }
          .login-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .login-adminlogin {
              align-items: center;
            }
            .login-container2 {
              flex-direction: column;
            }
            .login-container3 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .login-adminlogin {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .login-container2 {
              width: var(--dl-layout-size-xxlarge);
              flex-direction: column;
            }
            .login-container3 {
              width: var(--dl-layout-size-xxlarge);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .login-adminlogin {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 390px) {
            .login-adminlogin {
              margin-top: var(--dl-layout-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Login

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
