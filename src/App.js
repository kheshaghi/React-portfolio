import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile.png";

class App extends Component {

    state={displayBio:false};
    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     console.log('componet this', this);
    //     this.toggleBio = this.toggleBio.bind(this);
    // }
    toggleBio= () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        let bio = this.state.displayBio ? (<div>
            <p>I live in Chennai, and code every day.</p>
            <p>My favourite language is JavaScript, and I think React is awesomeee!</p>
            <p>Besides coding, I also love music and books!</p>
            <button onClick={this.toggleBio}>Show less!</button>
        </div>) : <button onClick={this.toggleBio}>Read More!</button>;
        return (
            <div>
                <img src={profile} alt="profile" className="profile"/>
                <h1>Hello!</h1>
                <div>My name is Kheshaghi. I am a software engineer.</div>
                <p>Iam looking forward to working on exciting projects</p>
                {bio}
                <hr/>
                <Projects />
                <hr/>
                <SocialProfiles />
            </div>
        )
    }

}

export default App;