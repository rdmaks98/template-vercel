import React from "react";
import IntlMessages from "util/intlMessages";

const LanguageSwitcher = props => {
    const { changeLanguage, config, selectedId } = props;
    return (
        <div className="themeChangeBlock">
            <h4>
                <IntlMessages id="languageSwitcher.label" />
            </h4>
            <div className="themeChangeBtnWrapper">
                {config.options.map(option => {
                    const { languageId, icon } = option;
                    // console.log(changeLanguage,"changeLanguagechangeLanguage");
                    // console.log(languageId,"languageIdlanguageId");
                    // console.log(option,"optionoption");
                    const customClass =
                        languageId === selectedId ? "selectedTheme" : "";
                    return (
                        <button
                            type="button"
                            key={languageId}
                            className={customClass}
                            onClick={() => {
                                changeLanguage(languageId);
                                console.log(languageId,"languageId");
                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + icon}
                                alt="flag"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
