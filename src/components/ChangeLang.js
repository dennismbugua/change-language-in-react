import React from "react";
import i18n from "i18next";
export default class ChangeLang extends React.Component {
  state = {
    lang: "en"
  };
  langChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
      i18n.changeLanguage(lang);
    });
  };
  render() {
    const { t } = this.props;
    const { lang } = this.state;
    return (
      <div>
        <select
          className="selectBox"
          onChange={this.langChange}
          name="lang"
          value={lang}
        >
          <option className="optionsMenu" value="en">
            English
          </option>
          <option className="optionsMenu" value="de">
            German (Deutsch)
          </option>
          <option className="optionsMenu" value="es">
            Spanish (Español)
          </option>
          <option className="optionsMenu" value="it">
            Italian (Italiano)
          </option>
          <option className="optionsMenu" value="zh">
            Chinese (中文)
          </option>
        </select>
        <p className="textToChange">{t("Hi")}</p>
        <p className="textToChange">{t("Actions")}</p>
        <p className="textToChange">{t("Welcome")}</p>
        <p className="textToChange">{t("Description")}</p>
        <p className="textToChange">{t("SelectLanguage")}</p>
      </div>
    );
  }
}
