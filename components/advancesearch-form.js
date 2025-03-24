import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AdvancesearchForm = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`advancesearch-form-container1 ${props.rootClassName} `}>
        <div className="advancesearch-form-container2">
          <div className="advancesearch-form-container3">
            <h1>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_4vDXBG'),
                }}
              ></span>
            </h1>
            <input
              type="text"
              placeholder={props.family}
              className="advancesearch-form-textinput10 input"
            />
            <input
              type="text"
              placeholder={props.genus}
              className="advancesearch-form-textinput11 input"
            />
            <input
              type="text"
              placeholder={props.species}
              className="advancesearch-form-textinput12 input"
            />
            <input
              type="text"
              placeholder={props.author1}
              className="advancesearch-form-textinput13 input"
            />
            <input
              type="text"
              placeholder={props.intraspecificStatus}
              className="advancesearch-form-textinput14 input"
            />
            <input
              type="text"
              placeholder={props.intraspecificName}
              className="advancesearch-form-textinput15 input"
            />
            <input
              type="text"
              placeholder={props.author2}
              className="advancesearch-form-textinput16 input"
            />
          </div>
          <div className="advancesearch-form-container4">
            <h1>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_1f4hdW'),
                }}
              ></span>
            </h1>
            <input
              type="text"
              placeholder={props.collectorName}
              className="advancesearch-form-textinput17 input"
            />
            <input
              type="text"
              placeholder={props.province}
              className="advancesearch-form-textinput18 input"
            />
            <input
              type="text"
              placeholder={props.district}
              className="advancesearch-form-textinput19 input"
            />
            <input
              type="text"
              placeholder={props.location}
              className="advancesearch-form-textinput20 input"
            />
          </div>
        </div>
        <button type="button" className="advancesearch-form-button button">
          <span>
            {props.button1 ?? (
              <Fragment>
                <span className="advancesearch-form-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_t8oyjP'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <style jsx>
        {`
          .advancesearch-form-container1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .advancesearch-form-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .advancesearch-form-container3 {
            flex: 0 0 auto;
            width: auto;
            height: 400px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .advancesearch-form-textinput10 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput11 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput12 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput13 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput14 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput15 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput16 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-container4 {
            flex: 0 0 auto;
            width: auto;
            height: 400px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .advancesearch-form-textinput17 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput18 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput19 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-textinput20 {
            margin-top: var(--dl-layout-space-halfunit);
            border-color: #000000;
            border-style: inset;
            margin-bottom: var(--dl-layout-space-halfunit);
            border-bottom-width: 1px;
          }
          .advancesearch-form-button {
            color: var(--dl-color-gray-white);
            width: 200px;
            height: auto;
            align-self: center;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            background-color: rgb(20, 67, 114);
          }
          .advancesearch-form-text4 {
            display: inline-block;
          }

          @media (max-width: 390px) {
            .advancesearch-form-container1 {
              height: 744px;
            }
            .advancesearch-form-container2 {
              height: 645px;
              flex-direction: column;
            }
            .advancesearch-form-container4 {
              margin-top: var(--dl-layout-space-unit);
            }
            .advancesearch-form-button {
              margin-top: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

AdvancesearchForm.defaultProps = {
  button1: undefined,
  rootClassName: '',
  family: 'Family',
  author1: 'Author 1',
  genus: 'Genus',
  collectorName: 'Collector Name',
  district: 'District',
  intraspecificName: 'Intraspecific Name',
  province: 'Province',
  author2: 'Author 2',
  location: 'Location',
  species: 'Species',
  intraspecificStatus: 'Intraspecific Status',
}

AdvancesearchForm.propTypes = {
  button1: PropTypes.element,
  rootClassName: PropTypes.string,
  family: PropTypes.string,
  author1: PropTypes.string,
  genus: PropTypes.string,
  collectorName: PropTypes.string,
  district: PropTypes.string,
  intraspecificName: PropTypes.string,
  province: PropTypes.string,
  author2: PropTypes.string,
  location: PropTypes.string,
  species: PropTypes.string,
  intraspecificStatus: PropTypes.string,
}

export default AdvancesearchForm
