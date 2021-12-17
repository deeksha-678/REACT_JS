import React from "react";
import Axios from "./component/Axios";
import Axios1 from "./component/Axios1";
import Axios2 from "./component/Axios2";
class App extends React.Component {
  render() {
    return (
      <div>
        <Axios/>
        <Axios1/>
        <Axios2/>
      </div>
    );
  }
}
export default App;
