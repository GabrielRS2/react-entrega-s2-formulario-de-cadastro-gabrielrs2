import { useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Welcome from "../Pages/Welcome";

function Routes() {
  const [ formData , setFormData ] = useState({});

  return (
    <Switch>
      <Route exact path="/success/:name">
        <Welcome formData={formData}/>
      </Route>
      <Route exact path="/">
        <Home setFormData={setFormData}/>
      </Route>
    </Switch>
  )
}

export default Routes;