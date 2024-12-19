import React from 'react';
import { Title, FormInput } from '../common/UIComponents';


export default function Create() {
    return(
        <div className="create-container">
            <Title content = "Create Your Profile!" CN = "create-title"/>
            <form>
                <FormInput id="Name" />
                <FormInput id="Year" />
                <FormInput id="Hobbies" />
                <FormInput id="FunFact" />
                <button type="submit" className="submit-btn">Create Profile</button>
            </form>
        </div>
    );
}