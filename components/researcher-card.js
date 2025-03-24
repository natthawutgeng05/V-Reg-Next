import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ResearcherCard = (props) => {
  const translate = useTranslations()
  return (
    <>
      <Link href="/vehicle-registration-others">
        <a className="researcher-card-link">
          <div
            className={`researcher-card-testimonial-card ${props.rootClassName} `}
          >
            <div className="researcher-card-container1">
              <div className="researcher-card-container2">
                <span className="researcher-card-text1">
                  {props.name1 ?? (
                    <Fragment>
                      <span className="researcher-card-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_mUfr-Q'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="researcher-card-text2">
                  {props.division1 ?? (
                    <Fragment>
                      <span className="researcher-card-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_M_Clpc'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="researcher-card-text3">
                  {props.email1 ?? (
                    <Fragment>
                      <span className="researcher-card-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_URrUx4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .researcher-card-link {
            display: contents;
          }
          .researcher-card-testimonial-card {
            width: 260px;
            height: 304px;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .researcher-card-container1 {
            width: 260px;
            height: 313px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=400');
            background-position: center;
          }
          .researcher-card-container2 {
            left: 0px;
            width: 260px;
            height: 100px;
            display: flex;
            position: absolute;
            align-self: flex-start;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: flex-end;
            background-color: #144372cc;
          }
          .researcher-card-text1 {
            color: #ffffff;
            font-size: 12px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            padding-left: 16px;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .researcher-card-text2 {
            color: #fffdfd;
            font-size: 12px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-left: 16px;
            margin-bottom: 8px;
            text-transform: capitalize;
          }
          .researcher-card-text3 {
            color: #fffdfd;
            font-size: 12px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            margin-left: 16px;
            margin-bottom: var(--dl-layout-space-unit);
            text-transform: capitalize;
          }
          .researcher-card-text4 {
            display: inline-block;
          }
          .researcher-card-text5 {
            display: inline-block;
          }
          .researcher-card-text6 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .researcher-card-text2 {
              align-self: center;
            }
            .researcher-card-text3 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .researcher-card-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .researcher-card-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .researcher-card-text1 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .researcher-card-text2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .researcher-card-text3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

ResearcherCard.defaultProps = {
  division1: undefined,
  name1: undefined,
  email1: undefined,
  rootClassName: '',
}

ResearcherCard.propTypes = {
  division1: PropTypes.element,
  name1: PropTypes.element,
  email1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ResearcherCard
