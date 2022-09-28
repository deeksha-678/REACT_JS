import React,{Component} from "react";
class App extends Component {
  constructor()
  {
    super();
    this.state={
      data: "Tom"
    }
  }
  updateData()
  {
   this.setState({data:"Peter"})
  }
  render()
  {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.updateData()}> Update data </button>
      </div>
    );
  }
}

export default App;