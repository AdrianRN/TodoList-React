import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TodosList from "./components/TodosList";


function App() {
  return (
    <div id="app" className="flex flex-col container max-w-md mx-auto md:pt-8">
      <Router>
          <section>
            <Switch>
              <Route exact path="/" component={TodosList} />
            </Switch>
          </section>

          
      </Router>
    </div>
  );
}

export default App;
