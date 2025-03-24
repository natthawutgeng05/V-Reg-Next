import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ResearcherNameHeader = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`researcher-name-header-container ${props.rootClassName} `}
      >
        <h1 className="researcher-name-header-text1">
          {props.researcherName1 ?? (
            <Fragment>
              <span className="researcher-name-header-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-2DEas'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </h1>
      </div>
      <style jsx>
        {`
          .researcher-name-header-container {
            display: flex;
            position: relative;
          }
          .researcher-name-header-text1 {
            font-size: 2em;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .researcher-name-header-text2 {
            display: inline-block;
          }

          @media (max-width: 390px) {
            .researcher-name-header-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

ResearcherNameHeader.defaultProps = {
  researcherName1: undefined,
  rootClassName: '',
}

ResearcherNameHeader.propTypes = {
  researcherName1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ResearcherNameHeader
