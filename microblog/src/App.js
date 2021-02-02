import "./App.css";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  // Any javascript is written here

  return (
    // return and using JSX
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Router>
  );
}

export default App; // exports App component and its imported in index.js , we can import other comps here .
