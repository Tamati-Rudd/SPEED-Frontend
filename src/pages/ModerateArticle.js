import { React, useState, useEffect } from "react";
import { Box, Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import ArticleTable from "../components/Table";
import { moderatorTableColumns } from "../components/test";
import { CurrentUrlContext } from "../context/CurrentUrlContext";
import { CurrentUserContext } from "../context/CurrentUserContext";
import {
  deleteArticle,
  getArticle,
  moderateArticle,
} from "../services/articlesService";
import axios from 'axios';

/**
 * Page for moderating submitted articles. Each article is either accepted or rejected
 * @returns Page components
 */
const ModerateArticle = () => {
  // Current URL state
  const [, setSelectedUrl] = useContext(CurrentUrlContext);
  const [, setCurrentUser] = useContext(CurrentUserContext);

  // Articles
  const [articles, setArticles] = useState([]);

  // Loading states
  const [isLoading, setIsLoading] = useState(true);
  const [moderationLoading, setModerationLoading] = useState(false);

  // Feedback state for Snackbar
  const [feedback, setFeedback] = useState("");
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [isFeedbackError, setIsFeedbackError] = useState(false);

  /**
   * Show moderation table
   */
  useEffect(() => {
    getArticle()
      .then((data) => {
        const articles = data.data.filter((article) => !article.moderated);
        setArticles(articles.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });


  }, [setSelectedUrl, setCurrentUser]);

  /**
   * Retrieve submitted article data
   */
   useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(`http://localhost:4000/moderate/moderateArticles`); // http://localhost:4000/articles/view/ location of the article and submitted is the input from the user
      setArticles(res.data);
    }
    getArticles();
  }, [articles])

  /*
     * Deletes an article from the articles state array.
     *
     * @param {*} id
     */
  const deleteArticleFromState = (id) => {
    const newArticles = articles.filter((article) => article._id !== id);
    setArticles(newArticles);
  };

  /*
   * Function to moderate an article as approved. This will change the moderated value for an article to true
   *  and persist this change to the database.
   *
   * @param {*} id
   * @returns
   */
  const handleAccept = (id) => () => {
    setModerationLoading(true);
    moderateArticle(id)
      .then((data) => {
        setFeedback(data.data.msg);
        setIsFeedbackError(false);
        deleteArticleFromState(id);
      })
      .catch((data) => {
        setFeedback(data.data.error);
        setIsFeedbackError(true);
      })
      .finally(() => {
        setFeedbackOpen(true);
        setModerationLoading(false);
      });
  };

  /**
   * Function to moderate an article as rejected. This will delete the article from the database.
   *
   * @param {*} id
   * @returns
   */
  const handleReject = (id) => () => {
    setModerationLoading(true);
    deleteArticle(id)
      .then((data) => {
        setFeedback(data.data.msg);
        setIsFeedbackError(false);
        deleteArticleFromState(id);
      })
      .catch((data) => {
        setFeedback(data.data.error);
        setIsFeedbackError(true);
      })
      .finally(() => {
        setFeedbackOpen(true);
        setModerationLoading(false);
      });
  };
  
  /**
     * Handles closing the snackbar feedback.
     * @param {*} event
     * @param {*} reason
     * @returns
     */
  const handleFeedbackClose = (event, reason) => {
    if (reason === "clickaway") return;
    setFeedbackOpen(false);
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
      <h1>Moderate Articles</h1>
      <Box>
        {isLoading ? (
          <></>
        ) : (
          <ArticleTable
            data={articles}
            columns={moderatorTableColumns}
            isModerator={true}
            handleAccept={handleAccept}
            handleReject={handleReject}
            moderationLoading={moderationLoading}
          />
        )}
      </Box>
      <Snackbar
        open={feedbackOpen}
        autoHideDuration={5000}
        onClose={handleFeedbackClose}
      >
        <Alert
          onClose={handleFeedbackClose}
          severity={isFeedbackError ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {feedback}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ModerateArticle;