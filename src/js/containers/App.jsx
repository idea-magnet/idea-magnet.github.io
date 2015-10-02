import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SCROLL_THRESHOLD = 360;

class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };
    constructor(props) {
        super(props);
        this.state = { isNavbarOpaque: false };
        this.scrollHandler = () => {
            const scrollTop = document.documentElement.scrollTop
                || document.body.scrollTop;
            if (scrollTop >= SCROLL_THRESHOLD && !this.state.isNavbarOpaque) {
                this.setState({ isNavbarOpaque: true });
            } else if (scrollTop < SCROLL_THRESHOLD && this.state.isNavbarOpaque) {
                this.setState({ isNavbarOpaque: false });
            }
        };
    }
    componentDidMount() {
        document.addEventListener("scroll", this.scrollHandler, false);
    }
    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHandler, false);
    }
    render() {
        return (
            <div className="site">
                <Navbar className={ this.state.isNavbarOpaque ? "navbar-opaque" : "" } />
                <main className="site-content">
                    { this.props.children }
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
