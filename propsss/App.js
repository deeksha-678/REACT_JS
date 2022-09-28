import React from "react";
import Classprops from "./Classprops";
class App extends React.Component {
  render() {
    return (
      <div>
        <Classprops name="Learner1" place="Bangalore" />
        <Classprops name="Learner2" place="Hyderabad" />
        <Classprops name="Learner3" place="London"/>
      </div>
    );
  }
}
export default App;