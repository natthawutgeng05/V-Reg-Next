import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DetailFields = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`detail-fields-container ${props.rootClassName} `}>
        <h1 className="detail-fields-text1">
          {props.category1 ?? (
            <Fragment>
              <span className="detail-fields-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CYOiB_'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </h1>
        <input
          type="text"
          placeholder={props.input}
          className="detail-fields-textinput input"
        />
      </div>
      <style jsx>
        {`
          .detail-fields-container {
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            justify-content: center;
          }
          .detail-fields-text1 {
            font-size: 1.5em;
            align-self: center;
          }
          .detail-fields-textinput {
            margin-left: var(--dl-layout-space-halfunit);
          }
          .detail-fields-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

DetailFields.defaultProps = {
  category1: undefined,
  input: 'name',
  rootClassName: '',
}

DetailFields.propTypes = {
  category1: PropTypes.element,
  input: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DetailFields
