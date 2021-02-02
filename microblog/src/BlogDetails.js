import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <Box>
      <h2>Blog Details - {id}</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Author - {blog.author}</p>
          <h4>{blog.body}</h4>
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Delete
          </Button>
        </article>
      )}
    </Box>
  );
};

export default BlogDetails;
