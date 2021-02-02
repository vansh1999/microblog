import { deepOrange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

import useFetch from "./useFetch";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Home = () => {
  const classes = useStyles();

  // const [blogs, setBlog] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlog(newBlogs);
  // };

  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(blogs);

  // }, []);

  const { data: blogs, isTrue, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}

      {isTrue && (
        <Grid
          container
          spacing={12}
          alignItems="center"
          justify="center"
          style={{ marginLeft: "75vh", minHeight: "50vh" }}
          className={classes.root}
          item
          xs={6}
        >
          <CircularProgress color="primary" />
        </Grid>
      )}

      {blogs && <BlogList blogs={blogs} title="All blogs !" />}

      {blogs && (
        <BlogList
          blogs={blogs.filter((ele) => ele.author == "vansh")}
          title="Vansh blogs !"
        />
      )}
    </div>
  );
};

export default Home;
