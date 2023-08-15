import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const {image,link}=this.props.profile;
        return (
            <div style={{display:'inline-block',width:50,margin:5}}>
                <img src={image} alt='socialProfile' link={link} style={{width:30, height:30}}/>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h3>Connect with me!</h3>
                {
                    SOCIAL_PROFILES.map(
                        SOCIAL_PROFILE => { return(<SocialProfile key={SOCIAL_PROFILE.id} profile={SOCIAL_PROFILE} /> )})
                }
            </div>
        )
    }
}

export default SocialProfiles;