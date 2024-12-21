import React from 'react';
import { Title, FormInput, SelectInput} from '../common/UIComponents';


export default function Create() {
    return(
        <div className="create-container">
            <Title content = "Create Your Profile!" CN = "create-title"/>
            <form>
                <FormInput id="Name" />
                <SelectInput id = "Year" options = {["Freshman", "Sophomore", "Junior", "Senior", "Graduated"]} />
                <FormInput id="Hobbies" />
                <FormInput id="FunFact" />
                <button type="submit" className="submit-btn">Create Profile</button>
            </form>
        </div>
    );
}