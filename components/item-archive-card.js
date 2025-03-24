import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ItemArchiveCard = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`item-archive-card-testimonial-card ${props.rootClassName} `}
      >
        <Link href="/detail">
          <a className="item-archive-card-link">
            <div className="item-archive-card-container1">
              <div className="item-archive-card-container2">
                <span className="item-archive-card-text1">
                  {props.itemName1 ?? (
                    <Fragment>
                      <span className="item-archive-card-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Z1PvyJ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="item-archive-card-text2">
                  {props.commonName1 ?? (
                    <Fragment>
                      <span className="item-archive-card-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_zbhGvJ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="item-archive-card-text3">
                  {props.thaiName1 ?? (
                    <Fragment>
                      <span className="item-archive-card-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1WcQpR'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .item-archive-card-testimonial-card {
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
          }
          .item-archive-card-link {
            display: contents;
          }
          .item-archive-card-container1 {
            width: 260px;
            height: 313px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            background-size: auto;
            justify-content: flex-end;
            text-decoration: none;
            background-image: url('https://play.teleporthq.io/static/svg/placeholders/no-image.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .item-archive-card-container2 {
            width: 260px;
            height: 305px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: #0000006e;
          }
          .item-archive-card-text1 {
            color: #ffffff;
            font-size: 24px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .item-archive-card-text2 {
            color: #fffdfd;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 8px;
            text-transform: capitalize;
          }
          .item-archive-card-text3 {
            color: #fffdfd;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            text-transform: capitalize;
          }
          .item-archive-card-text4 {
            display: inline-block;
          }
          .item-archive-card-text5 {
            display: inline-block;
          }
          .item-archive-card-text6 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .item-archive-card-text2 {
              align-self: center;
            }
            .item-archive-card-text3 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .item-archive-card-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .item-archive-card-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .item-archive-card-text1 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .item-archive-card-text2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .item-archive-card-text3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

ItemArchiveCard.defaultProps = {
  itemName1: undefined,
  commonName1: undefined,
  thaiName1: undefined,
  rootClassName: '',
}

ItemArchiveCard.propTypes = {
  itemName1: PropTypes.element,
  commonName1: PropTypes.element,
  thaiName1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ItemArchiveCard
