import React from "react";
import IdeaForm from "../components/IdeaForm";

class HomePage extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };

    render() {
        return (
            <div className="page page-home">
                <section className="home-cover">
                    <div className="home-cover-content">
                        <p>Where ideas meet people...</p>
                        <img className="ideas-meet-ppl"
                            src="/img/ideas-meet-ppl.png" />
                    </div>
                </section>
                <section className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4"></div>
                        </div>
                    </div>
                </section>
                <section>
                    <IdeaForm />
                </section>
            </div>
        );
    }
}

export default HomePage;
