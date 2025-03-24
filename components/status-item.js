import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const StatusItem = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`status-item-container ${props.rootClassName} `}>
        <h1>
          {props.head1 ?? (
            <Fragment>
              <span className="status-item-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VMWkT_'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </h1>
        <h1 className="status-item-status-item">
          {props.statusItem1 ?? (
            <Fragment>
              <span className="status-item-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1XcRA4'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </h1>
      </div>
      <style jsx>
        {`
          .status-item-container {
            display: flex;
            position: relative;
          }
          .status-item-status-item {
            color: var(--dl-color-success-300);
          }
          .status-item-text1 {
            display: inline-block;
          }
          .status-item-text2 {
            display: inline-block;
          }
          .status-itemroot-class-name {
            align-self: center;
          }
          .status-itemroot-class-name1 {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

StatusItem.defaultProps = {
  statusItem1: undefined,
  head1: undefined,
  rootClassName: '',
}

StatusItem.propTypes = {
  statusItem1: PropTypes.element,
  head1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default StatusItem
