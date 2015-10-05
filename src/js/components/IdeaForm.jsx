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
            <form action="https://docs.google.com/forms/d/16loz9r2dMkNFYe7pCaAyvnmpfkFuC73n-l2IGy1OCSs/formResponse" id="ss-form" method="POST" onSubmit target="_self">
                <input aria-label="Name  " id="entry_434090862" name="entry.434090862" required type="text"/>
                <input aria-label="Headline  " id="entry_1528002768" name="entry.1528002768" required type="text"/>
                <textarea aria-label="Description  " cols={0} id="entry_683747925" name="entry.683747925" required rows={8} />
                <input aria-label="Category  " id="entry_153174159" name="entry.153174159" required type="text"/>
                <input aria-label="Role Needed  " className="ss-q-short" id="entry_1102303679" name="entry.1102303679" type="text"/>
                <input aria-label="Location  " className="ss-q-short" id="entry_1647388585" name="entry.1647388585" type="text"/>
                <input aria-label="Logo Upload file via sendspace www.sendspace.com " id="entry_1981649088" name="entry.1981649088" type="text"/>
                <input aria-label="Tags please use '#' to separate each tag e.g. #Idea #about_tag " id="entry_7391417" name="entry.7391417" type="text"/>
                <textarea aria-label="Other supporting materials  " cols={0} id="entry_187020441" name="entry.187020441" rows={8} />
                <input name="draftResponse" type="hidden" defaultValue="[,,'4582699068367531326']" />
                <input name="pageHistory" type="hidden" defaultValue={0} />
                <input name="fvv" type="hidden" defaultValue={0} />
                <input name="fbzx" type="hidden" defaultValue={4582699068367531326} />
                <input className="jfk-button jfk-button-action " id="ss-submit" name="submit" type="submit" defaultValue="Submit" />
            </form>
        );
    }
}

export default IdeaForm;
