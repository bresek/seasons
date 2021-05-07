import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     )

//     return(
//         <div>
//             Lattitude
//         </div>
//     )
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }


  componentDidMount() {
      //recomended place for loading data
      console.log('my component was rendered to the screen')
        window.navigator.geolocation.getCurrentPosition(
          (position) => {this.setState({ lat: position.coords.latitude });},
          (err) => this.setState({ errorMessage: err.message })); }

  componentDidUpdate() {
      console.log('my component did rerender!')
  }

  render() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return (
        <div class="ui negative message">
          <i className="close icon"></i>
          <div className="header">Error:</div>
          <p>{errorMessage}</p>
        </div>
      );
    } else if (!errorMessage && lat) {
      return (
        <div className="ui visible message">
          <p>Latitude: {lat}</p>
        </div>
      );
    } else {
      return (
        <div className="ui icon message">
          <i className="notched circle loading icon"></i>
          <div className="content">
            <div className="header">Just one second</div>
            <p>We're fetching your location for you.</p>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
