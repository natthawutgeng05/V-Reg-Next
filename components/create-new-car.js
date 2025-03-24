import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CreateNewCar = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`create-new-car-container10 ${props.rootClassName} `}>
        <div className="create-new-car-container11">
          <div className="create-new-car-container12">
            <h2 className="create-new-car-text10">
              {props.text14111111 ?? (
                <Fragment>
                  <span className="create-new-car-text79">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rX_kNe'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="create-new-car-container13">
          <div className="create-new-car-container14">
            <span className="create-new-car-text11">
              {props.text ?? (
                <Fragment>
                  <span className="create-new-car-text102">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8ZLsOi'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder}
              className="input"
            />
          </div>
          <div className="create-new-car-container15">
            <span className="create-new-car-text12">
              {props.text2 ?? (
                <Fragment>
                  <span className="create-new-car-text57">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_alBD1r'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder2}
              className="input"
            />
          </div>
          <div className="create-new-car-container16">
            <span className="create-new-car-text13">
              {props.text1 ?? (
                <Fragment>
                  <span className="create-new-car-text90">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8Rfw4h'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder1}
              className="input"
            />
          </div>
          <div className="create-new-car-container17">
            <span className="create-new-car-text14">
              {props.text11 ?? (
                <Fragment>
                  <span className="create-new-car-text65">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YPGgdH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <select>
              <option value="Option 1">สงขลา</option>
              <option value="Option 2">ภูเก็ต</option>
              <option value="Option 3">สุราษฎร์ธานี</option>
            </select>
          </div>
        </div>
        <div className="create-new-car-container18">
          <div className="create-new-car-container19">
            <span className="create-new-car-text15">
              {props.text14 ?? (
                <Fragment>
                  <span className="create-new-car-text58">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-vFNGz'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder5}
              className="input"
            />
          </div>
          <div className="create-new-car-container20">
            <span className="create-new-car-text16">
              {props.text23 ?? (
                <Fragment>
                  <span className="create-new-car-text85">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_CnSRYe'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder23}
              className="input"
            />
          </div>
          <div className="create-new-car-container21">
            <span className="create-new-car-text17">
              {props.text15 ?? (
                <Fragment>
                  <span className="create-new-car-text63">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-wZjL-'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <select>
              <option value="Option 1">แดง</option>
              <option value="Option 2">ดำ</option>
              <option value="Option 3">ขาว</option>
            </select>
          </div>
          <div className="create-new-car-container22">
            <span className="create-new-car-text18">
              {props.text113 ?? (
                <Fragment>
                  <span className="create-new-car-text59">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_fzFx9l'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <select>
              <option value="Option 1">ISUZU</option>
              <option value="Option 2">TOYOTA</option>
              <option value="Option 3">HONDA</option>
            </select>
          </div>
        </div>
        <div className="create-new-car-container23">
          <div className="create-new-car-container24">
            <span className="create-new-car-text19">
              {props.text141 ?? (
                <Fragment>
                  <span className="create-new-car-text71">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_nzGiY3'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder51}
              className="input"
            />
          </div>
          <div className="create-new-car-container25">
            <span className="create-new-car-text20">
              {props.text231 ?? (
                <Fragment>
                  <span className="create-new-car-text77">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Jaxb_s'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <select>
              <option value="Option 1">ดีเซล</option>
              <option value="Option 2">เบนซิล</option>
              <option value="Option 3">ไฟฟ้า</option>
            </select>
          </div>
          <div className="create-new-car-container26">
            <span className="create-new-car-text21">
              {props.text151 ?? (
                <Fragment>
                  <span className="create-new-car-text98">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_IbAMer'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <select>
              <option value="Option 1">
                รถบรรทุกเฉพาะกิจ(บรรทุกขวดเครื่องดื่ม)
              </option>
              <option value="Option 2">รถ2</option>
              <option value="Option 3">รถ3</option>
            </select>
          </div>
          <div className="create-new-car-container27">
            <span className="create-new-car-text22">
              {props.text1131 ?? (
                <Fragment>
                  <span className="create-new-car-text74">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_eLTPWf'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder1131}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container28">
          <div className="create-new-car-container29">
            <span className="create-new-car-text23">
              {props.text1411 ?? (
                <Fragment>
                  <span className="create-new-car-text73">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ybLnz4'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder511}
              className="input"
            />
          </div>
          <div className="create-new-car-container30">
            <span className="create-new-car-text24">
              {props.text2311 ?? (
                <Fragment>
                  <span className="create-new-car-text92">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KSblAa'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder2311}
              className="input"
            />
          </div>
          <div className="create-new-car-container31">
            <span className="create-new-car-text25">
              {props.text1511 ?? (
                <Fragment>
                  <span className="create-new-car-text80">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_U4YC1t'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <select>
              <option value="Option 1">2 เพลา 4 ล้อ ยาง 6 เส้น</option>
              <option value="Option 2">2 เพลา 4 บ้อ ยาง 5 เส้น</option>
              <option value="Option 3">2 เพลา 6 ล้อ ยาง 8 เส้น</option>
            </select>
          </div>
          <div className="create-new-car-container32">
            <span className="create-new-car-text26">
              {props.text11311 ?? (
                <Fragment>
                  <span className="create-new-car-text93">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Vq-mCE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder11311}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container33">
          <div className="create-new-car-container34">
            <span className="create-new-car-text27">
              {props.text141112 ?? (
                <Fragment>
                  <span className="create-new-car-text88">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zXWgBc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder51112}
              className="input"
            />
          </div>
          <div className="create-new-car-container35">
            <span className="create-new-car-text28">
              {props.text231112 ?? (
                <Fragment>
                  <span className="create-new-car-text91">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vs6Qw5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder231112}
              className="input"
            />
          </div>
          <div className="create-new-car-container36">
            <span className="create-new-car-text29">
              {props.text151112 ?? (
                <Fragment>
                  <span className="create-new-car-text82">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_IX5Lxm'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <select>
              <option value="Option 1">รถบรรทุก ส่วนบุคคล</option>
              <option value="Option 2">รถยนต์</option>
              <option value="Option 3">รถมอเตอร์ไซค์</option>
            </select>
          </div>
          <div className="create-new-car-container37">
            <span className="create-new-car-text30">
              {props.text1131112 ?? (
                <Fragment>
                  <span className="create-new-car-text78">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_GTa-U2'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <select>
              <option value="Option 1">รย 1</option>
              <option value="Option 2">รย 2</option>
              <option value="Option 3">รย 3</option>
            </select>
          </div>
        </div>
        <div className="create-new-car-container38">
          <div className="create-new-car-container39">
            <span className="create-new-car-text31">
              {props.text1411121 ?? (
                <Fragment>
                  <span className="create-new-car-text99">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PhLerQ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="date"
              required
              placeholder={props.textinputPlaceholder511121}
              className="input"
            />
          </div>
          <div className="create-new-car-container40">
            <span className="create-new-car-text32">
              {props.text2311121 ?? (
                <Fragment>
                  <span className="create-new-car-text66">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_P5ylGT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder2311121}
              className="input"
            />
          </div>
          <div className="create-new-car-container41">
            <span className="create-new-car-text33">
              {props.text1511121 ?? (
                <Fragment>
                  <span className="create-new-car-text70">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SC2OS7'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder1411121}
              className="input"
            />
          </div>
          <div className="create-new-car-container42">
            <span className="create-new-car-text34">
              {props.text11311121 ?? (
                <Fragment>
                  <span className="create-new-car-text62">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_TjRDTk'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder11311121}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container43">
          <div className="create-new-car-container44">
            <span className="create-new-car-text35">
              {props.text1411122 ?? (
                <Fragment>
                  <span className="create-new-car-text97">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SJYaW3'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder511122}
              className="input"
            />
          </div>
          <div className="create-new-car-container45">
            <span className="create-new-car-text36">
              {props.text2311122 ?? (
                <Fragment>
                  <span className="create-new-car-text103">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_e0aU3G'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder2311122}
              className="input"
            />
          </div>
          <div className="create-new-car-container46">
            <span className="create-new-car-text37">
              {props.text1511122 ?? (
                <Fragment>
                  <span className="create-new-car-text60">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_geAuYM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder1411122}
              className="input"
            />
          </div>
          <div className="create-new-car-container47">
            <span className="create-new-car-text38">
              {props.text11311122 ?? (
                <Fragment>
                  <span className="create-new-car-text72">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zO_3tR'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder11311122}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container48">
          <div className="create-new-car-container49">
            <span className="create-new-car-text39">
              {props.text14111221 ?? (
                <Fragment>
                  <span className="create-new-car-text94">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Z5ikwT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder5111221}
              className="input"
            />
          </div>
          <div className="create-new-car-container50">
            <span className="create-new-car-text40">
              {props.text23111221 ?? (
                <Fragment>
                  <span className="create-new-car-text67">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_aGvUwk'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder23111221}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container51">
          <div className="create-new-car-container52">
            <span className="create-new-car-text41">
              {props.text141111 ?? (
                <Fragment>
                  <span className="create-new-car-text68">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Kl7V2s'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <textarea
              placeholder={props.textareaPlaceholder}
              className="textarea"
            ></textarea>
          </div>
        </div>
        <div className="create-new-car-container53">
          <div className="create-new-car-container54">
            <h2 className="create-new-car-text42">
              {props.text1411111 ?? (
                <Fragment>
                  <span className="create-new-car-text75">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_H-9pyr'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="create-new-car-container55">
          <div className="create-new-car-container56">
            <span className="create-new-car-text43">
              {props.text141114 ?? (
                <Fragment>
                  <span className="create-new-car-text101">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rP0dXA'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder51114}
              className="input"
            />
          </div>
          <div className="create-new-car-container57">
            <span className="create-new-car-text44">
              {props.text231114 ?? (
                <Fragment>
                  <span className="create-new-car-text100">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_alhGLq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder231114}
              className="input"
            />
          </div>
          <div className="create-new-car-container58">
            <span className="create-new-car-text45">
              {props.text151114 ?? (
                <Fragment>
                  <span className="create-new-car-text76">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pKxrft'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder141114}
              className="input"
            />
          </div>
          <div className="create-new-car-container59">
            <span className="create-new-car-text46">
              {props.text1131114 ?? (
                <Fragment>
                  <span className="create-new-car-text83">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KH1uuR'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder1131114}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container60">
          <div className="create-new-car-container61">
            <span className="create-new-car-text47">
              {props.text141113 ?? (
                <Fragment>
                  <span className="create-new-car-text64">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_B8vA5L'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder51113}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container62">
          <div className="create-new-car-container63">
            <h2 className="create-new-car-text48">
              {props.text141111121 ?? (
                <Fragment>
                  <span className="create-new-car-text95">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_O16fF-'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="create-new-car-container64">
          <div className="create-new-car-container65">
            <span className="create-new-car-text49">
              {props.text14111 ?? (
                <Fragment>
                  <span className="create-new-car-text61">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_aVJdLE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder5111}
              className="input"
            />
          </div>
          <div className="create-new-car-container66">
            <span className="create-new-car-text50">
              {props.text23111 ?? (
                <Fragment>
                  <span className="create-new-car-text86">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_maRwev'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder23111}
              className="input"
            />
          </div>
          <div className="create-new-car-container67">
            <span className="create-new-car-text51">
              {props.text15111 ?? (
                <Fragment>
                  <span className="create-new-car-text87">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_fYFWoK'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder14111}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container68">
          <div className="create-new-car-container69">
            <span className="create-new-car-text52">
              {props.text141115 ?? (
                <Fragment>
                  <span className="create-new-car-text84">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_FKs7LQ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="file"
              required
              placeholder={props.textinputPlaceholder51115}
              className="input"
            />
          </div>
          <div className="create-new-car-container70">
            <span className="create-new-car-text53">
              {props.text231115 ?? (
                <Fragment>
                  <span className="create-new-car-text96">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mvf1yL'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              required
              placeholder={props.textinputPlaceholder231115}
              className="input"
            />
          </div>
          <div className="create-new-car-container71">
            <span className="create-new-car-text54">
              {props.text151115 ?? (
                <Fragment>
                  <span className="create-new-car-text89">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xSAWnS'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="file"
              required
              placeholder={props.textinputPlaceholder141115}
              className="input"
            />
          </div>
        </div>
        <div className="create-new-car-container72">
          <div className="create-new-car-container73">
            <button type="button" className="create-new-car-button1 button">
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="create-new-car-text81">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_3VjAjB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="create-new-car-container74">
            <Link href="/car-home">
              <a className="create-new-car-link button">
                <span>
                  {props.button41 ?? (
                    <Fragment>
                      <span className="create-new-car-text69">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_hZIxMP'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .create-new-car-container10 {
            width: var(--dl-layout-size-maxwidth);
            height: auto;
            display: flex;
            overflow: scroll;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .create-new-car-container11 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .create-new-car-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text10 {
            width: auto;
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container13 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text11 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container15 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text12 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container16 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text13 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .create-new-car-text14 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container18 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container19 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text15 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container20 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text16 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container21 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text17 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container22 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .create-new-car-text18 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container23 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container24 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text19 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text20 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container26 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text21 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container27 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .create-new-car-text22 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container28 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container29 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text23 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container30 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text24 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container31 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text25 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container32 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .create-new-car-text26 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container33 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container34 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text27 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container35 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text28 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container36 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text29 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container37 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .create-new-car-text30 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container38 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container39 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text31 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container40 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text32 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container41 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text33 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container42 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .create-new-car-text34 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container43 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container44 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text35 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container45 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text36 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container46 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text37 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container47 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .create-new-car-text38 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container48 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container49 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text39 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container50 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text40 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container51 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .create-new-car-container52 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text41 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container53 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .create-new-car-container54 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text42 {
            width: auto;
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container55 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container56 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text43 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container57 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text44 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container58 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text45 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container59 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .create-new-car-text46 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container60 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .create-new-car-container61 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text47 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container62 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .create-new-car-container63 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text48 {
            width: auto;
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container64 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container65 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text49 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container66 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text50 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container67 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text51 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container68 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .create-new-car-container69 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text52 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container70 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text53 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container71 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-text54 {
            width: var(--dl-layout-size-medium);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .create-new-car-container72 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-end;
            align-items: center;
            margin-right: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .create-new-car-container73 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-button1 {
            color: #ffffff;
            background-color: #0074f0;
          }
          .create-new-car-container74 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-halfunit);
            flex-direction: row;
          }
          .create-new-car-link {
            color: #ffffff;
            text-decoration: none;
            background-color: #bf2626;
          }
          .create-new-car-text57 {
            display: inline-block;
          }
          .create-new-car-text58 {
            display: inline-block;
          }
          .create-new-car-text59 {
            display: inline-block;
          }
          .create-new-car-text60 {
            display: inline-block;
          }
          .create-new-car-text61 {
            display: inline-block;
          }
          .create-new-car-text62 {
            display: inline-block;
          }
          .create-new-car-text63 {
            display: inline-block;
          }
          .create-new-car-text64 {
            display: inline-block;
          }
          .create-new-car-text65 {
            display: inline-block;
          }
          .create-new-car-text66 {
            display: inline-block;
          }
          .create-new-car-text67 {
            display: inline-block;
          }
          .create-new-car-text68 {
            display: inline-block;
          }
          .create-new-car-text69 {
            display: inline-block;
          }
          .create-new-car-text70 {
            display: inline-block;
          }
          .create-new-car-text71 {
            display: inline-block;
          }
          .create-new-car-text72 {
            display: inline-block;
          }
          .create-new-car-text73 {
            display: inline-block;
          }
          .create-new-car-text74 {
            display: inline-block;
          }
          .create-new-car-text75 {
            display: inline-block;
          }
          .create-new-car-text76 {
            display: inline-block;
          }
          .create-new-car-text77 {
            display: inline-block;
          }
          .create-new-car-text78 {
            display: inline-block;
          }
          .create-new-car-text79 {
            display: inline-block;
          }
          .create-new-car-text80 {
            display: inline-block;
          }
          .create-new-car-text81 {
            display: inline-block;
          }
          .create-new-car-text82 {
            display: inline-block;
          }
          .create-new-car-text83 {
            display: inline-block;
          }
          .create-new-car-text84 {
            display: inline-block;
          }
          .create-new-car-text85 {
            display: inline-block;
          }
          .create-new-car-text86 {
            display: inline-block;
          }
          .create-new-car-text87 {
            display: inline-block;
          }
          .create-new-car-text88 {
            display: inline-block;
          }
          .create-new-car-text89 {
            display: inline-block;
          }
          .create-new-car-text90 {
            display: inline-block;
          }
          .create-new-car-text91 {
            display: inline-block;
          }
          .create-new-car-text92 {
            display: inline-block;
          }
          .create-new-car-text93 {
            display: inline-block;
          }
          .create-new-car-text94 {
            display: inline-block;
          }
          .create-new-car-text95 {
            display: inline-block;
          }
          .create-new-car-text96 {
            display: inline-block;
          }
          .create-new-car-text97 {
            display: inline-block;
          }
          .create-new-car-text98 {
            display: inline-block;
          }
          .create-new-car-text99 {
            display: inline-block;
          }
          .create-new-car-text100 {
            display: inline-block;
          }
          .create-new-car-text101 {
            display: inline-block;
          }
          .create-new-car-text102 {
            display: inline-block;
          }
          .create-new-car-text103 {
            display: inline-block;
          }
          .create-new-carroot-class-name {
            width: auto;
          }
          .create-new-carroot-class-name1 {
            width: var(--dl-layout-size-maxwidth);
            overflow: visible;
          }
          @media (max-width: 1000px) {
            .create-new-car-container10 {
              width: auto;
            }
            .create-new-car-container72 {
              margin-right: var(--dl-layout-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

CreateNewCar.defaultProps = {
  textinputPlaceholder2311: 'placeholder',
  text2: undefined,
  text14: undefined,
  text113: undefined,
  textinputPlaceholder23: 'placeholder',
  text1511122: undefined,
  textinputPlaceholder511: 'placeholder',
  textinputPlaceholder1: 'placeholder',
  textinputPlaceholder51: 'placeholder',
  text14111: undefined,
  text11311121: undefined,
  text15: undefined,
  textinputPlaceholder231114: 'placeholder',
  textinputPlaceholder511122: 'placeholder',
  textinputPlaceholder11311: 'placeholder',
  textinputPlaceholder1411122: 'placeholder',
  textinputPlaceholder51114: 'placeholder',
  text141113: undefined,
  textinputPlaceholder23111221: 'placeholder',
  textinputPlaceholder1131114: 'placeholder',
  text11: undefined,
  text2311121: undefined,
  textinputPlaceholder2311121: 'placeholder',
  text23111221: undefined,
  textinputPlaceholder51112: 'placeholder',
  textinputPlaceholder141114: 'placeholder',
  text141111: undefined,
  button41: undefined,
  text1511121: undefined,
  textareaPlaceholder: 'placeholder',
  textinputPlaceholder: 'placeholder',
  textinputPlaceholder51115: 'placeholder',
  text141: undefined,
  text11311122: undefined,
  text1411: undefined,
  textinputPlaceholder23111: 'placeholder',
  rootClassName: '',
  textinputPlaceholder5: 'placeholder',
  text1131: undefined,
  text1411111: undefined,
  text151114: undefined,
  text231: undefined,
  text1131112: undefined,
  text14111111: undefined,
  text1511: undefined,
  button4: undefined,
  textinputPlaceholder11311122: 'placeholder',
  textinputPlaceholder14111: 'placeholder',
  textinputPlaceholder1131: 'placeholder',
  textinputPlaceholder5111221: 'placeholder',
  textinputPlaceholder5111: 'placeholder',
  text151112: undefined,
  text1131114: undefined,
  text141115: undefined,
  text23: undefined,
  textinputPlaceholder231112: 'placeholder',
  text23111: undefined,
  textinputPlaceholder11311121: 'placeholder',
  text15111: undefined,
  text141112: undefined,
  textinputPlaceholder231115: 'placeholder',
  text151115: undefined,
  text1: undefined,
  textinputPlaceholder2: 'placeholder',
  textinputPlaceholder141115: 'placeholder',
  text231112: undefined,
  textinputPlaceholder2311122: 'placeholder',
  text2311: undefined,
  text11311: undefined,
  text14111221: undefined,
  text141111121: undefined,
  textinputPlaceholder511121: 'placeholder',
  text231115: undefined,
  text1411122: undefined,
  textinputPlaceholder51113: 'placeholder',
  text151: undefined,
  text1411121: undefined,
  text231114: undefined,
  text141114: undefined,
  text: undefined,
  text2311122: undefined,
  textinputPlaceholder1411121: 'placeholder',
}

CreateNewCar.propTypes = {
  textinputPlaceholder2311: PropTypes.string,
  text2: PropTypes.element,
  text14: PropTypes.element,
  text113: PropTypes.element,
  textinputPlaceholder23: PropTypes.string,
  text1511122: PropTypes.element,
  textinputPlaceholder511: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder51: PropTypes.string,
  text14111: PropTypes.element,
  text11311121: PropTypes.element,
  text15: PropTypes.element,
  textinputPlaceholder231114: PropTypes.string,
  textinputPlaceholder511122: PropTypes.string,
  textinputPlaceholder11311: PropTypes.string,
  textinputPlaceholder1411122: PropTypes.string,
  textinputPlaceholder51114: PropTypes.string,
  text141113: PropTypes.element,
  textinputPlaceholder23111221: PropTypes.string,
  textinputPlaceholder1131114: PropTypes.string,
  text11: PropTypes.element,
  text2311121: PropTypes.element,
  textinputPlaceholder2311121: PropTypes.string,
  text23111221: PropTypes.element,
  textinputPlaceholder51112: PropTypes.string,
  textinputPlaceholder141114: PropTypes.string,
  text141111: PropTypes.element,
  button41: PropTypes.element,
  text1511121: PropTypes.element,
  textareaPlaceholder: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder51115: PropTypes.string,
  text141: PropTypes.element,
  text11311122: PropTypes.element,
  text1411: PropTypes.element,
  textinputPlaceholder23111: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder5: PropTypes.string,
  text1131: PropTypes.element,
  text1411111: PropTypes.element,
  text151114: PropTypes.element,
  text231: PropTypes.element,
  text1131112: PropTypes.element,
  text14111111: PropTypes.element,
  text1511: PropTypes.element,
  button4: PropTypes.element,
  textinputPlaceholder11311122: PropTypes.string,
  textinputPlaceholder14111: PropTypes.string,
  textinputPlaceholder1131: PropTypes.string,
  textinputPlaceholder5111221: PropTypes.string,
  textinputPlaceholder5111: PropTypes.string,
  text151112: PropTypes.element,
  text1131114: PropTypes.element,
  text141115: PropTypes.element,
  text23: PropTypes.element,
  textinputPlaceholder231112: PropTypes.string,
  text23111: PropTypes.element,
  textinputPlaceholder11311121: PropTypes.string,
  text15111: PropTypes.element,
  text141112: PropTypes.element,
  textinputPlaceholder231115: PropTypes.string,
  text151115: PropTypes.element,
  text1: PropTypes.element,
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder141115: PropTypes.string,
  text231112: PropTypes.element,
  textinputPlaceholder2311122: PropTypes.string,
  text2311: PropTypes.element,
  text11311: PropTypes.element,
  text14111221: PropTypes.element,
  text141111121: PropTypes.element,
  textinputPlaceholder511121: PropTypes.string,
  text231115: PropTypes.element,
  text1411122: PropTypes.element,
  textinputPlaceholder51113: PropTypes.string,
  text151: PropTypes.element,
  text1411121: PropTypes.element,
  text231114: PropTypes.element,
  text141114: PropTypes.element,
  text: PropTypes.element,
  text2311122: PropTypes.element,
  textinputPlaceholder1411121: PropTypes.string,
}

export default CreateNewCar
