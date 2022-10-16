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
     * On render, retrieve the list of articles. If successful, populate the dropdown
     */
    useEffect(() => {
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

        getAcceptedArticles();
    }, []);

    useEffect(() => {
        console.log(selectedOption)
    }, [selectedOption]);

    /**
     * Handle pressing of the submit button
     */
    const onClickSubmit = () => {
        console.log("TODO: SUBMIT");
    };

    const updateSelected = (e) => {
        setSelectedOption("");
        setTimeout(() => setSelectedOption(e.value), 1);
        
        // console.log(selectedOption.value);
        // if (selectedOption.value[question.field]) {
        //     return selectedOption.value[question.field];
        // } else {
        //     return "";
        // }
        // console.log(article);
        // FormQuestions.forEach(question => {
            
            
        //     if (article[question.field]) {
        //         console.log(article[question.field])
        //         question.input = article[question.field]
                
        //     }
        //     console.log(question.input);
        //     // 
        // })
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

                       

                        <br />
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

