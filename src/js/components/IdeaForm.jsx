import React from "react";
import ReactSelect from "react-select";
import { Form, Decorator as FormsyElement } from "formsy-react";

const categoryOptions = [
    { value: "startup", label: "Startup" },
    { value: "innovation", label: "Innovation" },
    { value: "community_project", label: "Community Project" },
    { value: "art_and_design", label: "Art and Design" },
    { value: "music", label: "Music" },
    { value: "fun", label: "Fun" },
    { value: "other", label: "Other" }
];

const rolesNeededOptions = [
    { value: "graphic_designer", label: "Graphic Designer" },
    { value: "ui_ux_designer", label: "UI/UX Designer" },
    { value: "marketer", label: "Marketer" },
    { value: "sales", label: "Sales" },
    { value: "mobile_developer", label: "Mobile Developer" },
    { value: "backend_developer", label: "Backend Developer" },
    { value: "web_developer", label: "Web Developer" },
    { value: "business_development", label: "Business Development" },
    { value: "adviser", label: "Adviser" },
    { value: "co_founder", label: "Co-founder" },
    { value: "helper", label: "Helper" }
];

@FormsyElement()
class InputName extends React.Component {
    render() {
        return (
            <div className="form-group row">
                <label htmlFor="entry_434090862"
                    className="col-xs-12 col-sm-3 col-md-2 col-lg-push-2 col-lg-2 form-control-label">Name*</label>
                <div className="col-xs-12 col-sm-9 col-md-10 col-lg-push-2 col-lg-7">
                    <input type="text"
                        id="entry_434090862"
                        className="form-control"
                        name="entry.434090862"
                        placeholder="Idea Name"
                        value={this.props.getValue()}
                        onChange={(e) => this.props.setValue(e.target.value)}
                        validations="isEmptyString"
                        validationError="This is not a valid email"
                        required />
                </div>
                <p className="help-block text-muted"><small>{ this.props.getErrorMessage() }</small></p>
            </div>
        );
    }
}

class IdeaForm extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };
    constructor(props) {
        super(props);
        this.state = { canSubmit: false };
    }
    render() {
        return (
            <Form
                onSubmit={this.submit}
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                action="https://docs.google.com/forms/d/16loz9r2dMkNFYe7pCaAyvnmpfkFuC73n-l2IGy1OCSs/formResponse"
                method="POST"
                target="_self">

                <InputName />

                <div className="form-group row">
                    <label htmlFor="entry_1528002768"
                        className="col-xs-12 col-sm-3 col-md-2 col-lg-push-2 col-lg-2 form-control-label">Headline*</label>
                    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-push-2 col-lg-7">
                        <input type="text"
                            id="entry_1528002768"
                            className="form-control"
                            name="entry.1528002768"
                            placeholder="Headline"
                            validations="isEmptyString"
                            validationError="This is not a valid email"
                            required />
                        <p className="help-block text-muted"><small>A short sentence about your idea.</small></p>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="entry_153174159"
                        className="col-xs-12 col-sm-3 col-md-2 col-lg-push-2 col-lg-2 form-control-label">Category*</label>
                    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-push-2 col-lg-7">
                        <ReactSelect id="entry_153174159"
                            name="entry.153174159"
                            value=""
                            options={categoryOptions}
                            placeholder="Category"
                            validations="isEmptyString"
                            validationError="This is not a valid email"
                            required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="entry_683747925"
                        className="col-xs-12 col-sm-3 col-md-2 col-lg-push-2 col-lg-2 form-control-label">Description*</label>
                    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-push-2 col-lg-7">
                        <textarea id="entry_683747925"
                            className="form-control"
                            name="entry.683747925"
                            rows={8}
                            placeholder="Description"
                            validations="isEmptyString"
                            validationError="This is not a valid email"
                            required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="entry_1102303679"
                        className="col-xs-12 col-sm-3 col-md-2 col-lg-push-2 col-lg-2 form-control-label">Role(s) Needed</label>
                    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-push-2 col-lg-7">
                        <ReactSelect id="entry_1102303679"
                            name="entry.1102303679"
                            value=""
                            options={rolesNeededOptions}
                            placeholder="Role(s) Needed"
                            multi
                            allowCreate />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="entry_7391417"
                        className="col-xs-12 col-sm-3 col-md-2 col-lg-push-2 col-lg-2 form-control-label">Tags</label>
                    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-push-2 col-lg-7">
                        <ReactSelect id="entry_7391417"
                            name="entry.7391417"
                            value=""
                            multi
                            allowCreate />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="entry_1981649088"
                        className="col-xs-12 col-sm-3 col-md-2 col-lg-push-2 col-lg-2 form-control-label">Logo and Supporting Materials</label>
                    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-push-2 col-lg-7">
                        <input type="text"
                            id="entry_1981649088"
                            className="form-control"
                            placeholder="Url of logo and supporting materials"
                            name="entry.1981649088" />
                        <p className="help-block text-muted"><small>Upload logo and any other promotional graphics/documents via www.sendspace.com and paste the link here.</small></p>
                    </div>
                </div>

                <input type="hidden" name="draftResponse" defaultValue="[,,'4582699068367531326']" />
                <input type="hidden" name="pageHistory" defaultValue={0} />
                <input type="hidden" name="fvv" defaultValue={0} />
                <input type="hidden" name="fbzx" defaultValue={4582699068367531326} />

                <div className="row">
                    <div className="col-xs-12 col-xs-push-0 col-sm-9 col-sm-push-3 col-md-10 col-md-push-2 col-lg-8 col-lg-push-4">
                        <input type="submit" className="btn btn-primary" name="submit" defaultValue="Submit" disabled={!this.state.canSubmit} />
                    </div>
                </div>
            </Form>
        );
    }
    submit() { }
    enableButton() { this.setState({ canSubmit: true }); }
    disableButton() { this.setState({ canSubmit: false }); }
}

export default IdeaForm;
