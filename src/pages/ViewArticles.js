import { React, useEffect, useState } from "react";
import ArticleTable from "../components/Table";
import { tableColumns } from "../components/TableColumns";
import axios from "axios";
import { config } from "../Config";

import { Box, TextField, Grid } from "@mui/material";

/**
 * Page for searching and viewing articles in SPEED
 * @returns page components
 */
export default function ViewArticles() {
  //article list
  const [article, setArticle] = useState([]);

  //find article by year
  const [filteredYear, setFilteredYear] = useState("");

  /*
   *filters the article by checking if the publication year of the article is within a certain range
   */
  const filteredItem = article.filter((item) => {
    return item.publication_year
      .toString()
      .toLowerCase()
      .includes(filteredYear.toString().toLowerCase()); // compares user input against the publication year in data
  });

  /**
   * Retrieve article data when the year input changes
   */
  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(`${config.expressUrls.VIEW_ARTICLE}`); //function to return all of its data at once
      setArticle(res.data); //sets the data retrieved from axios
    };

    getArticle();
  }, []);

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
      <h1>View Articles</h1>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid>
            <TextField
              value={filteredYear}
              id="year"
              name="year"
              label="Search by Publication Year"
              onChange={(event) => setFilteredYear(event.target.value)}
              autocomplete="off"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <ArticleTable data={filteredItem} columns={tableColumns} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
