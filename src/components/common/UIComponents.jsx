import React from 'react';

export const FormInput = ({id}) => (
    <div className="form-group">
        <label htmlFor={id}>{id}:</label>
        <input type="text" id={id} name={id} required/>
    </div>
);

export const SelectInput = ({id, options}) => (
    <div className="form-group">
        <label htmlFor={id}>{id}:</label>
        <select id={id} name={id} required className="form-select">
            <option value="">Select your year</option>
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
)

export const Title = ({content, CN}) => (
    <h1 className={CN}>{content}</h1>
);

