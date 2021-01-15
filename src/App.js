import React, { useState, useEffect, useCallback } from "react";
import { Switch, BrowserRouter, Route, Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import Sidebar from "./layouts/sidebar";
import Home from "./screens/home";
import About from "./screens/about";
import Resume from "./screens/resume";
import Portfolio from "./screens/portfolio";
import { Box, useMediaQuery } from "@material-ui/core";
import Contact from "./screens/contact";
import Loading from "./components/loading";
import { createBrowserHistory } from "history";
import { debounce } from "lodash";
const history = createBrowserHistory();
let unlisten;
function App() {
  const [loading, setLoading] = useState(false);
  const smMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const hideLoading = useCallback(debounce(() => setLoading(false), 1000), []);

  useEffect(() => {
    unlisten && unlisten();
    unlisten = history.listen(() => {
      hideLoading();
    });
  }, []);
  return (
    <BrowserRouter>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Box
            display="flex"
            flexShrink={0}
            height="100%"
            style={{ flexWrap: smMatch ? "wrap" : "no-wrap" }}
          >
            <Sidebar setLoading={setLoading} />
            <Box
              component="main"
              flexGrow={1}
              position="relative"
              style={{ width: smMatch ? "100%" : "auto" }}
            >
              {loading && <Loading />}
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
              </Switch>
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    </BrowserRouter>
  );
}

export default App;
