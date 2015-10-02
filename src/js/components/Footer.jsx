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
                        <li><a href="https://fb.com/bhkkwok" target="_blank">Facebook</a></li>
                        <li><a href="https://twitter.com/xobkwok" target="_blank">Twitter</a></li>
                        <li><a href="https://linkedin.com/in/bhkkwok" target="_blank">LinkedIn</a></li>
                        <li><a href="https://www.behance.net/xobkwok" target="_blank">Behance</a></li>
                        <li><a href="https://github.com/billykwok" target="_blank">GitHub</a></li>
                    </ul>
                    <p>Designed and developed by <a href="https://fb.com/bhkkwok" target="_blank">Billy Kwok</a> © 2015</p>
                    <p>Build with Bootstrap v4.0.0-alpha and React.</p>
                </div>
            </footer>
        );
    }
}

export default Navbar;
