import React, { useState, useEffect } from "react";

/**
 * This reusable component manages a single form input
 * @param {*} props question data
 */
export default function FormInput(props) {
    const [inputSettings, setInputSettings] = useState({
        label: props.question.label, //Display text of the question
        field: props.question.field, //Name/ID of the question
        type: props.question.type, //Type of the question
        placeholder: props.question.placeholder, //Placeholder text for the question
        disabled: props.question.disabled, //Whether the question input can be edited
        required: props.question.required, //Whether the question input is required 
        input: "" //User response
    })

    /**
     * Handle the user input being changed
     * @param {} e event object
     */
    const handleInputChange = (e) => {
        setInputSettings({...inputSettings, input: e.target.value});
    }

    /**
     * When the inputSettings state is updated, update the state in the parent component
     */
    useEffect(() => {
        console.log(inputSettings);
        props.question["input"] = inputSettings.input;
    }, [inputSettings])

    return (
        <div>
            <label htmlFor={inputSettings.field}>{inputSettings.label}</label>
                <input 
                    id={inputSettings.field}
                    name={inputSettings.field}
                    type={inputSettings.type} 
                    placeholder={inputSettings.placeholder}
                    value={inputSettings.input} 
                    required={inputSettings.required}
                    disabled={inputSettings.disabled}
                    onChange={handleInputChange}>
            </input>
        </div>
    )
}