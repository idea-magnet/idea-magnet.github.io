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
    getClassName() {
        return "navbar navbar-fixed-top".concat(
            this.props.className ? " " + this.props.className : "");
    }
    render() {
        return (
            <header className={ this.getClassName() }>
                <div className="container">
                    <span className="navbar-brand">
                        <Link to="/"><div className="navbar-brand-img" /></Link>
                    </span>
                    {/*
                        <button className="navbar-toggler hidden-sm-up pull-right"
                            type="button" data-toggle="collapse"
                            data-target="#bd-main-nav">&#9776;</button>
                        <div className="collapse navbar-toggleable-xs pull-right"
                            id="bd-main-nav">
                            <nav className="nav navbar-nav">
                                <span className="nav-item nav-link active">
                                    <Link to="/">Home</Link>
                                </span>
                                <span className="nav-item nav-link">
                                    <Link to="/new">New Idea</Link>
                                </span>
                            </nav>
                        </div>
                    */}
                </div>
            </header>
        );
    }
}

export default Navbar;
