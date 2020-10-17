import React from "react";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Header from "./Header";
import "./App.css";
import Home from  "./Home";

function App() {
  return (
    <Router>
      <div className="app">
      
       <Switch>
          <Route path ="/checkout">
           <h1>
            checkout
           </h1>
          </Route>
          <Route path ="/login">
           <h1>
            Login Page
           </h1>
          </Route>
          <Route path ="/">
            <Header />
           <h1>
            <Home />
           </h1>
         </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
