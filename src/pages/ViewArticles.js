import { React, useEffect, useState } from 'react';
import { Box } from "@mui/material";
import ArticleTable from "../components/Table";
import { moderatorTableColumns } from "../components/TableColumns";
//import { ViewArticle } from '../Express';
import axios from 'axios';
import { config } from "../Config"

/**
 * Page for searching and viewing articles in SPEED
 * @returns page components
 */
export default function ViewArticles() {
    const [year, setYear] = useState("");
    const [article, setArticle] = useState([]);
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
            <Box>
                <form>
                    <label htmlFor='year'>Publication Year: </label>
                    <input type="text" id="year" name="year" value={year} onChange={onChangeYear}></input>
                </form>
                <ArticleTable data={article} columns={moderatorTableColumns} />
            </Box>
        </Box>
    )
}
