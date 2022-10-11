import { React } from 'react';
import FormInput from '../components/FormInput';
import { FormQuestions } from '../components/FormQuestions';
import { submitArticle } from '../Express';


import { Box, Button } from "@mui/material";
/**
 * This page handles the entry and submission of article details
 * @returns page components
 */
export default function SubmitArticle() {
    /**
     * Handle pressing of the submit button
     */
    const onClickSubmit = () => {
        if (FormQuestions[0].input !== "" && FormQuestions[1].input !== "" && FormQuestions[2].input !== "" && FormQuestions[3].input.match(/^\d{4}$/)) {
            //Build articleData JSON 
            let articleData = {};
            FormQuestions.forEach(question => {
                articleData[question.field] = question.input;
            })
            articleData.level_of_evidence = "";

            //Submit article
            submitArticle(articleData).then(() => {
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

        <Box
        sx={{
            bgcolor: "#fff",
            margin: "12px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        <Box>

        <div>
            <h2>Submit an Article</h2>
            <p>* required</p>
            <form>
                {FormQuestions ? FormQuestions.map((question, key) => (
                    <FormInput question={question} key={key} />
                    )) : <h4>Failed to load form questions</h4>}
            </form>
            <Button className="submitButton" variant="contained" onClick={onClickSubmit}>Submit</Button>
            <br />
        </div>
    
        </Box>
        </Box>
    )
}