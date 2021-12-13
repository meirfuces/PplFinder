import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home,Favorite } from "pages";

import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route 
          exact path="/favorites" component={Favorite} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* my add */}
      
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
