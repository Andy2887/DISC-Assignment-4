import React from 'react';

function Title(){
    return(
        <div style={{ color: '#392AB8', opacity: 0.8, display: 'flex', justifyContent: 'center' }}>
            <h1>Create Your Profile!</h1>
        </div>
    );
}

export default function Create() {
    return(
        <div>
            <Title />
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div>
                    <label for="Year">Year:</label>
                    <input type="text" id="year" name="year" required/>
                </div>
                <div>
                    <label for="Hobbies">Hobbies:</label>
                    <input type="text" id="Hobbies" name="Hobbies" required/>
                </div>
                <div>
                    <label for="FunFact">What is the one thing you want others to know:</label>
                    <input type="text" id="FunFact" name="FunFact" required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}