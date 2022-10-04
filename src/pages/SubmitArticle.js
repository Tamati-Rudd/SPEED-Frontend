import { React, useEffect, useState } from 'react';
import FormInput from '../components/FormInput';
import { submitArticle } from '../Express';

/**
 * This page handles the entry and submission of article details
 * @returns page components
 */
export default function SubmitArticle() {
    const [articleData, setArticleData] = useState({
        title: "",
        author: "",
        publication_year: "",
        volume_number: "",
        issue_number: "",
        doi: "",
        se_practice: "",
        claim: "",
        level_of_evidence: ""
    });

    const [formQuestions, setFormQuestions] = useState([
        {
            field: "title",
            label: "Title: ",
            type: "text",
            placeholder: "Enter article title",
            disabled: false,
            required: true,
            input: ""
        }
    ]);
    const [submitted, setSubmitted] = useState("");

    useEffect(() => {
        console.log(formQuestions);
    }, [formQuestions])

    /**
     * Handle pressing of the submit button
     */
    const onClickSubmit = () => {
        formQuestions.forEach(question => {
            console.log(question);
        })

        // let result = submitArticle(articleData).then(() => {
        //     console.log(result);
        //     setSubmitted("Your article has been submitted for review!");
        // })
        // .catch(() => {
        //     console.error("An error occured");
        //     setSubmitted("An error occured while attempting to submit your article. Please try again later");
        // })
    }

    return (
        <div>
            <form>
                {formQuestions ? formQuestions.map((question, key) => (
                    <FormInput question={question} key={key}/>
                )) : <h4>Failed to load form questions</h4>}
            </form>
            <button onClick={onClickSubmit}>Submit</button>
            <p>{submitted}</p>
        </div>
    )
}