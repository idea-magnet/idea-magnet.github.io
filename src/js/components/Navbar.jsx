import React from "react";
import { Link } from "react-router";

class Navbar extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };
    static defaultProps = { className: "" };

    getExtraClassName() {
        return this.props.className ? " " + this.props.className : "";
    }

    render() {
        return (
            <header className={ "navbar navbar-fixed-top navbar-dark bg-inverse".concat(this.getExtraClassName()) }>
                <div className="container">
                    <span className="navbar-brand">
                        <Link to="/"><img src="/img/logo.png" /></Link>
                    </span>
                    <button className="navbar-toggler hidden-sm-up pull-right" type="button" data-toggle="collapse" data-target="#bd-main-nav">&#9776;</button>
                    <div className="collapse navbar-toggleable-xs pull-right" id="bd-main-nav">
                        <nav className="nav navbar-nav">
                            <span className="nav-item nav-link active"><Link to="/">Home</Link></span>
                            <span className="nav-item nav-link"><Link to="/design">Design</Link></span>
                            <span className="nav-item nav-link"><Link to="/tech">Tech</Link></span>
                            <span className="nav-item nav-link"><Link to="/contact">Contact</Link></span>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;
