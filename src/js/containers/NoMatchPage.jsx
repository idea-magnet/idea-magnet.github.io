import React from "react";

class NoMatchPage extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default NoMatchPage;
