import { React, useEffect, useState } from 'react';
import { Box } from "@mui/material";
import ArticleTable from "../components/Table";
import { moderatorTableColumns } from "../components/TableColumns";
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
    const [year, setYear] = useState("");
    const [article, setArticle] = useState([]);


    const options = article.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
          ...option
        };
      });

    //const [submitted, setSubmitted] = useState("");
    // WIP: testing useeffect with error handling
    // useEffect(() => {
    //     const getArticle = async() =>{
    //         // try{

    //             const res = await axios.get(`http://localhost:4000/articles/view/${year}`)
    //             if (res.status === 200){
    //                 setArticle(res.data);
    //             }
    //             if (res.status === 404){
    //                 alert("Error getting article");
    //             }
    //         }
    //         // }catch(e){

    //         //     if    (setArticle() !== []){
    //         //         alert("Error getting article");
    //         //     }
    //         // }
    //          //location of the article and submitted is the input from the user

    //     }
    //     getArticle();
    // }, [year])


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

             <CircularProgress />
             
             :
            <Box>
                <form>

                <Autocomplete
      id="grouped-demo"
      options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          //groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Title" />}
          />
                    <label htmlFor='year'>Publication Year: </label>
                    <input type="text" id="year" name="year" value={year} onChange={onChangeYear}></input>
                </form>
                <ArticleTable data={article} columns={moderatorTableColumns} />
            </Box>
            }

        </Box>
    )
}
