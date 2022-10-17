import { React, useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import ArticleTable from "../components/Table";
import { tableColumns } from "../components/TableColumns";
//import { ViewArticle } from '../Express';
import axios from 'axios';
import { config } from "../Config"


import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from '@mui/material/CircularProgress';


/**
 * Page for searching and viewing articles in SPEED
 * @returns page components
 */
export default function ViewArticles() {
    //article list
    const [article, setArticle] = useState([]);
    
    //find article by year
    const [year, setYear] = useState("");
    // find article by practice
    const [selectedPractice, setselectedPractice] = useState([]);

    // WIP: testing useeffect with error handling
    // useEffect(() => {
    //     ViewArticle().then((data)=> {
    //         const practices = data.map((practice) => practice.practice);
    //     }) 

    // }, []);


    // const searchPractice = (article) => {
    //     if (!article) {
    //         ViewArticle() 
    //         .then(({ data }) => {
    //           setArticle(
    //             data.filter((data) => data.sepractice === selectedPractice)
    //           );
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //         });
    //     } else {
    //         ViewArticle()
    //         .then(({ data }) => {
    //           setArticle(data.filter((data) => data.title === article));
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //         });
    //     }
    //   };


    /**
     * Retrieve article data when the year input changes
     */
    useEffect(() => {
        const getArticle = async () => {
            const res = await axios.get(`${config.expressUrls.VIEW_ARTICLE}/${year}`)
            setArticle(res.data);
        }

        getArticle();
    }, [year])

    //this is to grab the data entered from the user and set it into the year state
    const onChangeYear = (event) => {
        setYear(event.target.value);
    }

    // WIP: function checkerArticle (){
    // if    (res.data === []){
    //         alert("Error getting article");
    //     }
    // }

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
            {!article.length ?

             <><CircularProgress /><Typography>No Connection to backend</Typography></>
             
             :
            <Box>
                            <Autocomplete
              id="article-search"
              options={article.map((option) => option.publication_year)}
              renderInput={(params) => (
                <TextField {...params} label="Search Articles" />
              )}
              onChange={(event, newInputValue) => {
                searchPractice(newInputValue);
              }}
            />
                <form>
                    <label htmlFor='year'>Publication Year: </label>
                    <input type="text" id="year" name="year" value={year} onChange={onChangeYear}></input>
                </form>
                <ArticleTable data={article} columns={tableColumns} />
            </Box>
            }

        </Box>
    )
}
