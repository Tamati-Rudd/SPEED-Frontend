import { React, useEffect, useState } from 'react';
import FormInput from '../components/FormInput';
import { FormQuestions } from '../components/FormQuestions';
import { submitArticle } from '../Express';

/**
 * This page handles the entry and submission of article details
 * @returns page components
 */
export default function SubmitArticle() {
    /**
     * Handle pressing of the submit button
     */
    const onClickSubmit = () => {
        console.log("TEST")
        if (FormQuestions[0].input !== "" && FormQuestions[1].input !== "" && FormQuestions[3].input.match(/^\d{4}$/)) {
            //Build articleData JSON 
            let articleData = {};
            FormQuestions.forEach(question => {
                articleData[question.field] = question.input;
            })
            articleData.level_of_evidence = "";

            console.log(articleData);
            //Submit article
            let result = submitArticle(articleData).then(() => {
                console.log(result);
                alert("Your article has been submitted for review!");
            })
            .catch((err) => {
                console.error(err);
                alert("An error occured while attempting to submit your article. Please try again later");     
            })
        } else {
            alert("Please fill out all required fields");
        }
    }

    return (
        <div>
            <h2>Submit an Article</h2>
            <p>* required</p>
            <form>
                {FormQuestions ? FormQuestions.map((question, key) => (
                    <FormInput question={question} key={key}/>
                )) : <h4>Failed to load form questions</h4>}
            </form>
            <button className="submitButton" onClick={onClickSubmit}>Submit</button>
            <br />
        </div>
    )
}