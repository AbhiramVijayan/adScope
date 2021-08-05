import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Detailes from "./pages/Detailed/Detailes";
import Overview from "./pages/Overview/Overview";
import HeaderSection from "./Section/HeaderSection/HeaderSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Switch>
      <Route path="/overview" strict exact component={Overview} />
      <Route path="/" strict exact component={Detailes} />
      

      </Switch>

     
    
      </BrowserRouter>
    </div>
  );
}

export default App;
