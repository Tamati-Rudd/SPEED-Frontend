import { React, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ArticleTable from "../components/Table";
import { tableColumns } from "../components/TableColumns";
//import { ViewArticle } from '../Express';
import axios from "axios";
import { config } from "../Config";

import {CircularProgress, Autocomplete, TextField, Grid} from "@mui/material";


/**
 * Page for searching and viewing articles in SPEED
 * @returns page components
 */
export default function ViewArticles() {
  //article list
  const [article, setArticle] = useState([]);

  //find article by year
  const [filteredYear, setFilteredYear] = useState("");
  // find article by practice

const filteredItem = article.filter(item => {
  return item.publication_year.toString().toLowerCase().includes(filteredYear.toLowerCase());
})

/**
 * Retrieve article data when the year input changes
 */
useEffect(() => {
  const getArticle = async () => {
    const res = await axios.get(`${config.expressUrls.VIEW_ARTICLE}`);
    setArticle(res.data);
  };
  
  getArticle();
}, []);

//this is to grab the data entered from the user and set it into the year state
// function onChangeYear(event) {
  //   const value = event.target.value;
  //   setFilteredYear(article.filter(article =>
  //       article.toLowerCase().includes(value.toLowerCase()))
  //       ) 
  //     }
  
  
  
  
  // the article map is used to display each column on the data that is stored in the collection
  // note for columns that do not store data it will be displayed as empty currently
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
      <h1>Articles</h1>
      {!article.length ? (
        <>
          <CircularProgress />
          <Typography>No Connection to backend</Typography>
        </>
      ) : (
        <Box> 
        <Grid container spacing={2}>
          <Grid item xs={6}>
          {/* <label htmlFor="yeFar">Publication Year: </label> */}
            <Autocomplete
        id=""
        freeSolo
        onChange={(e) => setFilteredYear(e)}
        options={article.sort(
          (a, b) => -b.publication_year.localeCompare(a.publication_year)
          ).map((option) => option.publication_year)}
          renderInput={(params) => <TextField {...params}   
          
          value={filteredYear}
          id="year"
          name="year"
          onChange={(event) => setFilteredYear(event.target.value)}
            />}
            noOptionsText={"No results found"}
        />
         </Grid>
          <Grid item xs={6}>
        <TextField/>
        <input type="text" id="year" name="year" ></input>

          </Grid>
          
          <Grid item xs={12}>
          
          <ArticleTable data={filteredItem} columns={tableColumns} /> 
          </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
