import { React } from "react";
import FormInput from "../components/FormInput";
import { FormQuestions } from "../components/FormQuestions";
import { submitArticle } from "../services/Express";
import { Box, Button, Stack } from "@mui/material";
import bibtexParse from "bibtex-parse-js";

/**
 * This page handles the entry and submission of article details
 * @returns page components
 */
export default function SubmitArticle() {
  const navigate = useNavigate();

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
          if (question.input === "") {
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
        default: //No validation
          break;
      }
    });

    if (valid) {
      articleData.se_practice = "";
      articleData.claimed_benefit = "";
      articleData.level_of_evidence = "";

      //Submit article
      submitArticle(articleData)
        .then(() => {
          alert("Your article has been submitted for review!");
          navigate("/home");
        })
        .catch((err) => {
          alert(
            "An error occured while attempting to submit your article. Please try again later"
          );
        });
    } else {
      alert(feedback);
    }
  };

  function handleFileUpload(e) {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e.target.result);

      let parsedFile = bibtexParse.toJSON(e.target.result);

      FormInput(parsedFile[0].entryTags);
    };
    fileReader.readAsText(file);
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
            <h1>Submit an Article</h1>
            <p>*required</p>
            <form>
              {FormQuestions ? (
                FormQuestions.map((question, key) => (
                  question.analystOnly ? null : <FormInput question={question} input={""} key={key} />
                ))
              ) : (
                <h4>Failed to load form questions</h4>
              )}
            </form>

            <input type="file" onChange={handleFileUpload} accept=".bibtex"></input>
      <p id="fileUploadInfo">
        Accepted file formats include bibtex. Only upload one article per bibtex
        file.
      </p>
      &nbsp;
      &nbsp;
      
            <Button variant="contained" onClick={onClickSubmit}>
              Submit
            </Button>
            <br />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
