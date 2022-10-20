import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Box, Grid } from "@mui/material";

/**
 * This reusable component manages a single form input on the submit and analysis pages
 * @param {*} props question data
 */
export default function FormInput(props) {
  const [inputSettings, setInputSettings] = useState({ input: "" });

  useEffect(() => {
    setInputSettings({
      label: props.question.label, //Display text of the question
      field: props.question.field, //Name/ID of the question
      type: props.question.type, //Type of the question
      placeholder: props.question.placeholder, //Placeholder text for the question
      disabled: props.question.disabled, //Whether the question input can be edited
      required: props.question.required, //Whether the question input is required
      input: props.input, //User response
    });
  }, [
    props.input,
    props.question.disabled,
    props.question.field,
    props.question.label,
    props.question.placeholder,
    props.question.required,
    props.question.type,
  ]);

  /**
   * Handle the user input being changed
   * @param {} e event object
   */
  const handleInputChange = (e) => {
    setInputSettings({ ...inputSettings, input: e.target.value });
  };

  /**
   * When the inputSettings state is updated, update the state in the parent component
   */
  useEffect(() => {
    props.question["input"] = inputSettings.input;
  }, [inputSettings, props.question]);

  return (
    <Box sx={{ flexGrow: 1 }} className="FormInputDiv">
      <Grid container spacing={3} columns={16}>
        <Grid item xs={7}>
          <Typography xs={3}>
            {inputSettings.label}
            {inputSettings.required && "* "}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id={inputSettings.field}
            name={inputSettings.field}
            title={inputSettings.field}
            type={inputSettings.type}
            size="75"
            placeholder={inputSettings.placeholder}
            value={inputSettings.input} // user input
            required={inputSettings.required}
            disabled={inputSettings.disabled}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
      </Grid>
      <br></br>
    </Box>
  );
}
