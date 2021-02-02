import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { deepOrange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
  },
  media: {
    height: 190,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const BlogList = ({ blogs, title, handleDelete }) => {
  const classes = useStyles();

  //   const blogs = props.blogs;
  //   const title = props.title;

  //   console.log(props);
  console.log(blogs);

  return (
    <Grid>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <Card
          className={classes.root}
          key={blog.id}
          style={{ marginLeft: "30em", marginRight: "30em" }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {blog.title}
              </Typography>
              <Avatar className={classes.orange}>VB </Avatar>
              By Author {blog.author}
              <Typography variant="body2" color="textSecondary" component="p">
                {blog.body.substr(0, 390) + "..."}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Link to={`/blogs/${blog.id}`}>View More</Link>
          {/* <CardActions> */}
          {/* <Link to={`/blogs/${blog.id}`}>Learn More</Link> */}
          {/* <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(blog.id)}
            >
              Delete
            </Button> */}
          {/* </CardActions> */}
        </Card>
      ))}
    </Grid>
  );
};

export default BlogList;
