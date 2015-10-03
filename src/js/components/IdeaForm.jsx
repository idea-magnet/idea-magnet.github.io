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
                { /* TODO: Form */ }
            </div>
        );
    }
}

export default IdeaForm;
