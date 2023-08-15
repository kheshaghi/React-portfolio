
import React, { Component } from "react";
import PROJECTS from "./data/PROJECTS";

class Project extends Component {
    render() {
const {title,description,link,image}= this.props.project;
        return (
            <div style={{display:"inline-block", width:300,margin:10}}>
                <img src={image} alt="profile" style={{width:200, height:120}}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class projects extends Component {

    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(
                            PROJECT => {
                                // return (<div key={PROJECT.id}>{PROJECT.title}</div>)
                                return (<Project key={PROJECT.id} project={PROJECT} />)
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}
export default projects;