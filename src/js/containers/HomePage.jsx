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
                        <p className="m-b-0">IdeaMagnet is where ideas meet people.</p>
                        <p><small>Find a dreamer like yourself here...</small></p>
                        <img className="ideas-meet-ppl"
                            src="/img/brain.png" />
                    </div>
                </section>
                <section className="jumbotron">
                    <div className="container">
                        <h4 className="text-center">We help you to...</h4>
                        <hr />
                        <div className="row text-center">
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <img className="col-img-home"
                                    src="/img/chat.png" />
                                <h5>Test out your idea and gather feedbacks</h5>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <img className="col-img-home"
                                    src="/img/idea.png" />
                                <h5>Promote your idea</h5>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <img className="col-img-home"
                                    src="/img/target.png" />
                                <h5>Find and attract like-minded partners</h5>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <img className="col-img-home"
                                    src="/img/agent.png" />
                                <h5>Manage partnering request/invitation</h5>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container p-t-lg">
                    <h4 className="text-center m-b-md">How it works</h4>
                    <div className="row text-center">
                        <div className="col-xs-12 col-lg-6 m-b-lg">
                            <h5>1. Got a brilliant idea? Post your idea here!</h5>
                            <img className="col-img-home"
                                src="/img/how-idea.png" />
                        </div>
                        <div className="col-xs-12 col-lg-6 m-b-lg">
                            <h5>2. We make it visible to potential partners</h5>
                            <img className="col-img-home"
                                src="/img/how-promote.png" />
                        </div>
                        <div className="col-xs-12 col-lg-6 m-b-lg">
                            <h5>3. We gather the info of interested partners for you</h5>
                            <img className="col-img-home"
                                src="/img/how-info.png" />
                        </div>
                        <div className="col-xs-12 col-lg-6 m-b-lg">
                            <h5>4. "Date" potential partners to see if she/he matches</h5>
                            <img className="col-img-home"
                                src="/img/how-meet.png" />
                        </div>
                    </div>
                </section>
                <section className="container p-t p-b-lg">
                    <h4 className="text-center m-b-md">Your idea can be a...</h4>
                    <div className="text-center m-b-md">
                        <span className="label label-outline">Startup Idea</span>
                        <span className="label label-outline">New Innovation</span>
                        <span className="label label-outline">Design Artwork</span>
                        <span className="label label-outline">Music Band</span>
                        <span className="label label-outline">Community Project</span>
                        <span className="label label-outline">Social Campaign</span>
                        <span className="label label-outline">...</span>
                    </div>
                </section>
                <section className="jumbotron jumbotron-vision">
                    <div className="container text-center">
                        <p className="banner-sentence m-b-md">Your team is waiting for you!</p>
                        <img className="banner-img" src="/img/team.png" />
                    </div>
                </section>
                <section className="container p-y-lg">
                    <h4 className="text-center m-b-md">Why hesitate? Post your idea now!</h4>
                    <IdeaForm />
                </section>
            </div>
        );
    }
}

export default HomePage;
