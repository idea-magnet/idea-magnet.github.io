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
            <div>
              <form action="https://docs.google.com/forms/d/16loz9r2dMkNFYe7pCaAyvnmpfkFuC73n-l2IGy1OCSs/formResponse" method="POST" id="ss-form" target="_self" onsubmit="">
                <ol role="list" class="ss-question-list" style="padding-left: 0">
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item ss-item-required ss-text">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_434090862">
                          <div class="ss-q-title">Name
                            <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                            <span class="ss-required-asterisk" aria-hidden="true">*</span>
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto"></div>
                        </label>
                        <input type="text" name="entry.434090862" value="" class="ss-q-short" id="entry_434090862" dir="auto" aria-label="Name  " aria-required="true" required="" title="">
                        <div class="error-message" id="1318419302_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item ss-item-required ss-text">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_1528002768">
                          <div class="ss-q-title">Headline
                            <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                            <span class="ss-required-asterisk" aria-hidden="true">*</span>
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto"></div>
                        </label>
                        <input type="text" name="entry.1528002768" value="" class="ss-q-short" id="entry_1528002768" dir="auto" aria-label="Headline  " aria-required="true" required="" title="">
                        <div class="error-message" id="774625217_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item ss-item-required ss-paragraph-text">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_683747925">
                          <div class="ss-q-title">Description
                            <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                            <span class="ss-required-asterisk" aria-hidden="true">*</span>
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto"></div>
                        </label>
                        <textarea name="entry.683747925" rows="8" cols="0" class="ss-q-long" id="entry_683747925" dir="auto" aria-label="Description  " aria-required="true" required=""></textarea>
                        <div class="error-message" id="746609281_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item ss-item-required ss-text">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_153174159">
                          <div class="ss-q-title">Category
                            <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                            <span class="ss-required-asterisk" aria-hidden="true">*</span>
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto"></div>
                        </label>
                        <input type="text" name="entry.153174159" value="" class="ss-q-short" id="entry_153174159" dir="auto" aria-label="Category  " aria-required="true" required="" title="">
                        <div class="error-message" id="559863430_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item ss-item-required ss-checkbox">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_1232463891">
                          <div class="ss-q-title">Role Needed
                            <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                            <span class="ss-required-asterisk" aria-hidden="true">*</span>
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto"></div>
                        </label>

                        <ul class="ss-choices ss-choices-required" role="group" aria-label="Role Needed  ">
                          <li class="ss-choice-item">
                            <label>
                              <span class="ss-choice-item-control goog-inline-block">
                                <input type="checkbox" name="entry.1102303679" value="Business Development" id="group_1102303679_1" role="checkbox" class="ss-q-checkbox" aria-required="true">
                              </span>
                              <span class="ss-choice-label">Business Development</span>
                            </label>
                          </li>
                          <li class="ss-choice-item">
                            <label>
                              <span class="ss-choice-item-control goog-inline-block">
                                <input type="checkbox" name="entry.1102303679" value="Software Development" id="group_1102303679_2" role="checkbox" class="ss-q-checkbox" aria-required="true">
                              </span>
                              <span class="ss-choice-label">Software Development</span>
                            </label>
                          </li>
                          <li class="ss-choice-item">
                            <label>
                              <span class="ss-choice-item-control goog-inline-block">
                                <input type="checkbox" name="entry.1102303679" value="Designer" id="group_1102303679_3" role="checkbox" class="ss-q-checkbox" aria-required="true">
                              </span>
                              <span class="ss-choice-label">Designer</span>
                            </label>
                          </li>
                          <li class="ss-choice-item">
                            <label>
                              <span class="ss-choice-item-control goog-inline-block">
                                <input type="checkbox" name="entry.1102303679" value="__other_option__" id="group_1102303679_4" role="checkbox" class="ss-q-checkbox ss-q-other-toggle" aria-required="true">
                              </span>
                              <span class="ss-choice-label">Other:</span>
                            </label>
                            <span class="ss-q-other-container goog-inline-block">
                              <input type="text" name="entry.1102303679.other_option_response" value="" class="ss-q-other" id="entry_1102303679_other_option_response" dir="auto" aria-label="Other">
                            </span>
                          </li>
                        </ul>
                        <div class="error-message" id="1232463891_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item  ss-text">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_1647388585">
                          <div class="ss-q-title">Location
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto"></div>
                        </label>
                        <input type="text" name="entry.1647388585" value="" class="ss-q-short" id="entry_1647388585" dir="auto" aria-label="Location  " title="">
                        <div class="error-message" id="640316165_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item  ss-text">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_1981649088">
                          <div class="ss-q-title">Logo
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto">Upload file via sendspace <a href="https://www.google.com/url?q=http://www.sendspace.com&amp;sa=D&amp;usg=AFQjCNEsVqTWBRk3kUSqToGHKw3NU3uGqA">www.sendspace.com</a></div>
                        </label>
                        <input type="text" name="entry.1981649088" value="" class="ss-q-short" id="entry_1981649088" dir="auto" aria-label="Logo Upload file via sendspace www.sendspace.com " title="">
                        <div class="error-message" id="479733342_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item  ss-text">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_7391417">
                          <div class="ss-q-title">Tags
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto">please use '#' to separate each tag e.g. #Idea #about_tag</div>
                        </label>
                        <input type="text" name="entry.7391417" value="" class="ss-q-short" id="entry_7391417" dir="auto" aria-label="Tags please use '#' to separate each tag e.g. #Idea #about_tag " title="">
                        <div class="error-message" id="123747115_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <div class="ss-form-question errorbox-good" role="listitem">
                    <div dir="auto" class="ss-item  ss-paragraph-text">
                      <div class="ss-form-entry">
                        <label class="ss-q-item-label" for="entry_187020441">
                          <div class="ss-q-title">Other supporting materials
                          </div>
                          <div class="ss-q-help ss-secondary-text" dir="auto"></div>
                        </label>
                        <textarea name="entry.187020441" rows="8" cols="0" class="ss-q-long" id="entry_187020441" dir="auto" aria-label="Other supporting materials  "></textarea>
                        <div class="error-message" id="671677210_errorMessage"></div>
                        <div class="required-message">This is a required question</div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="draftResponse" value="[,,&quot;-174559389245749141&quot;]
              ">
                  <input type="hidden" name="pageHistory" value="0">

                  <input type="hidden" name="fvv" value="0">


                  <input type="hidden" name="fbzx" value="-174559389245749141">

                  <div class="ss-item ss-navigate">
                    <table id="navigation-table">
                      <tbody>
                        <tr>
                          <td class="ss-form-entry goog-inline-block" id="navigation-buttons" dir="ltr">
                            <input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action ">
                            <div class="ss-password-warning ss-secondary-text">Never submit passwords through Google Forms.</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ol>
              </form>
            </div>
        );
    }
}

export default IdeaForm;
