import "./App.css";
import "./lib/font-awesome/css/font-awesome.min.css";
import "./lib/ionicons/css/ionicons.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { NavProvider } from "./Context/NavContext";
import { DataProvider } from "./Context/DataContext";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <NavProvider>
          <AnimatePresence>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </AnimatePresence>
        </NavProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
