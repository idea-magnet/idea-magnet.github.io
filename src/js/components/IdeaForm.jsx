import React from "react";

class IdeaForm extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };
    render() {
        return (
            <form action="https://docs.google.com/forms/d/16loz9r2dMkNFYe7pCaAyvnmpfkFuC73n-l2IGy1OCSs/formResponse" method="POST" id="ss-form" target="_self">
                <ol role="list" className="ss-question-list" style={{ paddingLeft: 0 }}>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item ss-item-required ss-text">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_434090862">
                                    <div className="ss-q-title">Name
                                        <label htmlFor="itemView.getDomIdToLabel()" aria-label="(Required field)" />
                                        <span className="ss-required-asterisk" aria-hidden="true">*</span>
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto" />
                                </label>
                                <input type="text" name="entry.434090862" defaultValue className="ss-q-short" id="entry_434090862" dir="auto" aria-label="Name  " aria-required="true" required title />
                                <div className="error-message" id="1318419302_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item ss-item-required ss-text">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_1528002768">
                                    <div className="ss-q-title">Headline
                                        <label htmlFor="itemView.getDomIdToLabel()" aria-label="(Required field)" />
                                        <span className="ss-required-asterisk" aria-hidden="true">*</span>
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto" />
                                </label>
                                <input type="text" name="entry.1528002768" defaultValue className="ss-q-short" id="entry_1528002768" dir="auto" aria-label="Headline  " aria-required="true" required title />
                                <div className="error-message" id="774625217_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item ss-item-required ss-paragraph-text">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_683747925">
                                    <div className="ss-q-title">Description
                                        <label htmlFor="itemView.getDomIdToLabel()" aria-label="(Required field)" />
                                        <span className="ss-required-asterisk" aria-hidden="true">*</span>
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto" />
                                </label>
                                <textarea name="entry.683747925" rows={ 8 } cols={ 0 } className="ss-q-long" id="entry_683747925" dir="auto" aria-label="Description  " aria-required="true" required />
                                <div className="error-message" id="746609281_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item ss-item-required ss-text">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_153174159">
                                    <div className="ss-q-title">Category
                                        <label htmlFor="itemView.getDomIdToLabel()" aria-label="(Required field)" />
                                        <span className="ss-required-asterisk" aria-hidden="true">*</span>
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto" />
                                </label>
                                <input type="text" name="entry.153174159" defaultValue className="ss-q-short" id="entry_153174159" dir="auto" aria-label="Category  " aria-required="true" required title />
                                <div className="error-message" id="559863430_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item ss-item-required ss-checkbox">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_1232463891">
                                    <div className="ss-q-title">Role Needed
                                        <label htmlFor="itemView.getDomIdToLabel()" aria-label="(Required field)" />
                                        <span className="ss-required-asterisk" aria-hidden="true">*</span>
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto" />
                                </label>
                                <ul className="ss-choices ss-choices-required" role="group" aria-label="Role Needed  ">
                                    <li className="ss-choice-item">
                                        <label>
                                            <span className="ss-choice-item-control goog-inline-block">
                                                <input type="checkbox" name="entry.1102303679" defaultValue="Business Development" id="group_1102303679_1" role="checkbox" className="ss-q-checkbox" aria-required="true" />
                                            </span>
                                            <span className="ss-choice-label">Business Development</span>
                                        </label>
                                    </li>
                                    <li className="ss-choice-item">
                                        <label>
                                            <span className="ss-choice-item-control goog-inline-block">
                                                <input type="checkbox" name="entry.1102303679" defaultValue="Software Development" id="group_1102303679_2" role="checkbox" className="ss-q-checkbox" aria-required="true" />
                                            </span>
                                            <span className="ss-choice-label">Software Development</span>
                                        </label>
                                    </li>
                                    <li className="ss-choice-item">
                                        <label>
                                            <span className="ss-choice-item-control goog-inline-block">
                                                <input type="checkbox" name="entry.1102303679" defaultValue="Designer" id="group_1102303679_3" role="checkbox" className="ss-q-checkbox" aria-required="true" />
                                            </span>
                                            <span className="ss-choice-label">Designer</span>
                                        </label>
                                    </li>
                                    <li className="ss-choice-item">
                                        <label>
                                            <span className="ss-choice-item-control goog-inline-block">
                                                <input type="checkbox" name="entry.1102303679" defaultValue="__other_option__" id="group_1102303679_4" role="checkbox" className="ss-q-checkbox ss-q-other-toggle" aria-required="true" />
                                            </span>
                                            <span className="ss-choice-label">Other:</span>
                                        </label>
                                        <span className="ss-q-other-container goog-inline-block">
                                            <input type="text" name="entry.1102303679.other_option_response" defaultValue className="ss-q-other" id="entry_1102303679_other_option_response" dir="auto" aria-label="Other" />
                                        </span>
                                    </li>
                                </ul>
                                <div className="error-message" id="1232463891_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item  ss-text">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_1647388585">
                                    <div className="ss-q-title">Location
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto" />
                                </label>
                                <input type="text" name="entry.1647388585" defaultValue className="ss-q-short" id="entry_1647388585" dir="auto" aria-label="Location  " title />
                                <div className="error-message" id="640316165_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item  ss-text">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_1981649088">
                                    <div className="ss-q-title">Logo
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto">Upload file via sendspace <a href="https://www.google.com/url?q=http://www.sendspace.com&sa=D&usg=AFQjCNEsVqTWBRk3kUSqToGHKw3NU3uGqA">www.sendspace.com</a></div>
                                </label>
                                <input type="text" name="entry.1981649088" defaultValue className="ss-q-short" id="entry_1981649088" dir="auto" aria-label="Logo Upload file via sendspace www.sendspace.com " title />
                                <div className="error-message" id="479733342_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item  ss-text">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_7391417">
                                    <div className="ss-q-title">Tags
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto">please use '#' to separate each tag e.g. #Idea #about_tag</div>
                                </label>
                                <input type="text" name="entry.7391417" defaultValue className="ss-q-short" id="entry_7391417" dir="auto" aria-label="Tags please use '#' to separate each tag e.g. #Idea #about_tag " title />
                                <div className="error-message" id="123747115_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <div className="ss-form-question errorbox-good" role="listitem">
                        <div dir="auto" className="ss-item  ss-paragraph-text">
                            <div className="ss-form-entry">
                                <label className="ss-q-item-label" htmlFor="entry_187020441">
                                    <div className="ss-q-title">Other supporting materials
                                    </div>
                                    <div className="ss-q-help ss-secondary-text" dir="auto" />
                                </label>
                                <textarea name="entry.187020441" rows={ 8 } cols={ 0 } className="ss-q-long" id="entry_187020441" dir="auto" aria-label="Other supporting materials  " />
                                <div className="error-message" id="671677210_errorMessage" />
                                <div className="required-message">This is a required question</div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="draftResponse" defaultValue="['-174559389245749141']" />
                    <input type="hidden" name="pageHistory" defaultValue={ 0 } />
                    <input type="hidden" name="fvv" defaultValue={ 0 } />
                    <input type="hidden" name="fbzx" defaultValue={ -174559389245749141 } />
                    <div className="ss-item ss-navigate">
                        <table id="navigation-table">
                            <tbody>
                                <tr>
                                    <td className="ss-form-entry goog-inline-block" id="navigation-buttons" dir="ltr">
                                        <input type="submit" name="submit" defaultValue="Submit" id="ss-submit" className="jfk-button jfk-button-action " />
                                        <div className="ss-password-warning ss-secondary-text">Never submit passwords through Google Forms.</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ol>
            </form>
        );
    }
}

export default IdeaForm;
