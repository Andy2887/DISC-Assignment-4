import React from 'react';

export const FormInput = ({id}) => (
    <div className="form-group">
        <label htmlFor={id}>{id}:</label>
        <input type="text" id={id} name={id} required/>
    </div>
);

export const Title = ({content, CN}) => (
    <h1 className={CN}>{content}</h1>
);