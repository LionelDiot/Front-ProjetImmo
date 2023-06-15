import React, { useState, useEffect } from "react";
import Article from './article';
import ShowButton from '../Buttons/showButton';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import PaginationComponent from "../../Tools/paginationComponent";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const articlesPerPage = 3;

  const handleChange = (event, value) => {
    setPage(value);
  };


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://pawsdetente-ca7a0b6081c4.herokuapp.com/articles", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setArticles(data);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  // Calculate the total number of pages based on the total number of articles
  const pageCount = Math.ceil(articles.length / articlesPerPage);

  return (
    <div>
      <h1>Articles</h1>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {displayedArticles.map((article) => (
          <Grid item xs={2} sm={4} md={4} key={article.id}>
            <Article article={article} />
            <Link to={`/article/${article.id}`}>
              <ShowButton />
            </Link>
          </Grid>
        ))}
      </Grid>
      <PaginationComponent page={page} pageCount={pageCount} handleChange={handleChange} />

    </div>
  );
};


export default Articles;
