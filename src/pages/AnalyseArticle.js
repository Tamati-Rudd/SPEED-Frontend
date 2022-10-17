import { React, useEffect, useState } from 'react';
import Select from 'react-select';
import FormInput from "../components/FormInput";
import { FormQuestions } from "../components/FormQuestions";
import { retrieveAcceptedArticles, submitAnalysis } from "../services/Express";
import { Box, Button, Stack } from "@mui/material";

/**
 * Analysis page for the SPEED website
 * @returns Analysis page components
 */
export default function AnalyseArticle() {
    const [selectedOption, setSelectedOption] = useState("");
    const [articleOptions, setArticleOptions] = useState([]);
    const [noOptionsMessage, setNoOptionsMessage] = useState("Loading articles...");

    /**
     * On render, call getAcceptedArticles
     */
    useEffect(() => {
        getAcceptedArticles();
    }, []);

    /**
     * Retrieve the list of accepted articles, and populate the dropdown list with the article titles
     */
    const getAcceptedArticles = async () => {
        let acceptedArticles = await retrieveAcceptedArticles();
        if (acceptedArticles === 1) { //No articles found
            setNoOptionsMessage("No remaining articles to analyse");
        } else if (acceptedArticles === 2) { //Network/server error
            setNoOptionsMessage("A network or server error occured. Please try again later");
        } else { //Setup options array for dropdown
            let buildOptions = [];
            acceptedArticles.map((article, key) => (
                buildOptions.push({ value: article, label: article.title, key: key })
            ));
            setArticleOptions(buildOptions);
            setNoOptionsMessage("No remaining articles to analyse");
        }
    }

    /**
     * Update the selected article and reset the input form
     * @param {*} e selected article
     */
    const updateSelected = (e) => {
        setSelectedOption("");
        setTimeout(() => setSelectedOption(e.value), 1);
    }

    /**
     * Handle pressing of the submit button
     */
    const onClickSubmit = () => {
        //Build article data JSON and validate input
        let articleData = {};
        let valid = true;
        let feedback = "Please enter the following before submitting\n"
        FormQuestions.forEach((question) => {
            articleData[question.field] = question.input.trim();
            switch (question.validation) {
                case "not empty": //Test for empty input
                case "not empty (analyst)":
                    if (question.input.trim() === "") {
                        valid = false;
                        feedback += `${question.label} fill out this field\n`
                    }
                    break;
                case "year": //Test year regex
                    if (!question.input.match(/^\d{4}$/)) {
                        valid = false;
                        feedback += `${question.label} enter a year value\n`
                    }
                    break;
                case "level": //Test for evidence level
                    if (!["high", "medium", "low"].includes(question.input.toLowerCase().trim())) {    
                        valid = false;
                        feedback += `${question.label} enter an evidence level (High, Medium or Low)\n`
                    }
                    break;
                default: //No validation
                    break;
            }
        });

        //If validation passed, submit the analysis and make the article searchable on SPEED
        if (valid) {
            articleData._id = selectedOption._id;
            submitAnalysis(articleData)
                .then(() => { //Reset page
                    alert("Your analysis has been submitted, and the article is now searchable on SPEED");
                    setArticleOptions([]);
                    setSelectedOption("");
                    getAcceptedArticles();
                })
                .catch((err) => {})
        } else {
            alert(feedback);
        }
    };

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
                <Stack gap={4}>
                    <Stack spacing={1} alignItems="center">
                        <h1>Analyse an Article</h1>
                        <Select
                            defaultValue={selectedOption}
                            onChange={updateSelected}
                            options={articleOptions}
                            placeholder={"Select an article to analyse"}
                            noOptionsMessage={() => noOptionsMessage}
                            isClearable={false}
                            isSearchable={true}
                        />
                        <br />
                        {selectedOption === "" ? null :
                            <>
                                <p>* required</p>
                                <form>
                                    {FormQuestions ? (
                                        FormQuestions.map((question, key) => (
                                            <FormInput question={question} input={selectedOption[question.field]} key={key} />
                                        ))
                                    ) : (
                                        <h4>Failed to load form questions</h4>
                                    )}
                                </form>
                                <Button variant="contained" onClick={onClickSubmit}>
                                    Submit Analysis
                                </Button>
                            </>
                        }
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

