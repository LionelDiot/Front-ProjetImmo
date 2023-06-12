import React, { useState, useEffect } from "react";
import Article from './article';
import ShowButton from '../Buttons/showButton';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/articles", {
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


  return (
    <div>
      <h1>Articles</h1>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {articles.map((article) => (
          <Grid item xs={2} sm={4} md={4} key={article.id}>
            <Article article={article} />
            <Link to={`/article/${article.id}`}>
              <ShowButton />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};


export default Articles;
