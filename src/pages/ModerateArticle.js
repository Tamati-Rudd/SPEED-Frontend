import { React, useState, useEffect } from "react";
import { Box, Snackbar, Alert, Typography } from "@mui/material";
import ArticleTable from "../components/Table";
import { moderatorTableColumns } from "../components/TableColumns";
import axios from "axios";
import { deleteArticle, acceptArticle } from "../services/Express";
import { config } from "../Config";

const ModerateArticle = () => {
  const [moderationLoading, setModerationLoading] = useState(false);

  // Feedback state for Snackbar
  const [feedback, setFeedback] = useState("");
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [isFeedbackError, setIsFeedbackError] = useState(false);

  // Articles
  const [articles, setArticles] = useState([]);
  // Loading states
  const [isLoading, setIsLoading] = useState(true);

  /**
   * On page render, retrieve articles for moderation
   */
  useEffect(() => {
    axios.get(`${config.expressUrls.MODERATE_VIEW_ARTICLE}`).then((res) => {
      setArticles(res.data);
      setIsLoading(false);
    });
  }, []);

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
    if (!window.confirm("Are you sure you want to accept this acticle?"))
      return;
    setModerationLoading(true);
    acceptArticle(id)
      .then((data) => {
        setFeedback("Article has been accepted");
        setIsFeedbackError(false);
        deleteArticleFromState(id);
      })
      .catch((data) => {
        setFeedback(data.response.data.error);
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
    if (!window.confirm("Are you sure you want to reject this acticle?"))
      return;
    setModerationLoading(true);
    deleteArticle(id)
      .then((data) => {
        setFeedback("Article has been rejected");
        setIsFeedbackError(false);
        deleteArticleFromState(id);
      })
      .catch((data) => {
        setFeedback(data.response.data.error);
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
          <Typography>No Articles to Moderate</Typography>
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