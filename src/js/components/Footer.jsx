import React from "react";

class Navbar extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };
    render() {
        return (
            <footer className="bd-footer text-muted">
                <div className="container">
                    <ul className="bd-footer-links">
                        <li><a href="https://fb.com/getideamagnet" target="_blank">Facebook</a></li>
                    </ul>
                    <p>Built with love by <a href="https://fb.com/getideamagnet" target="_blank">IdeaMagnet</a> © 2015</p>
                </div>
            </footer>
        );
    }
}

export default Navbar;
