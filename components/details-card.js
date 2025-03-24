import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DetailsCard = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`details-card-feature-card ${props.rootClassName} `}>
        <h2 className="details-card-text1">
          {props.title1 ?? (
            <Fragment>
              <span className="details-card-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2yb2MN'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </h2>
        <span className="details-card-text2">
          {props.description1 ?? (
            <Fragment>
              <span className="details-card-text4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2b5_tY'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .details-card-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .details-card-text1 {
            font-weight: 600;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .details-card-text2 {
            color: var(--dl-color-gray-700);
          }
          .details-card-text3 {
            display: inline-block;
          }
          .details-card-text4 {
            display: inline-block;
          }
          .details-cardroot-class-name {
            width: 100%;
          }

          @media (max-width: 479px) {
            .details-card-text1 {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

DetailsCard.defaultProps = {
  title1: undefined,
  description1: undefined,
  rootClassName: '',
}

DetailsCard.propTypes = {
  title1: PropTypes.element,
  description1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default DetailsCard
