import React, { Component } from "react";
import AppCards from "./AppCards";
import ResponseDialog from "./ResponseDialog";
import "./App.css";

class App extends Component {
  state = {
    isModalOpen: false,
    responseDetails: null
  };

  constructor(props) {
    super(props);
    this.setModalState = this.setModalState.bind(this);
    this.setResponseDetails = this.setResponseDetails.bind(this);
  }

  setModalState(modalState) {
    this.setState({ ...this.state, isModalOpen: modalState });
  }

  setResponseDetails(response) {
    this.setState({ ...this.state, responseDetails: response });
  }
  render() {
    return (
      <div className="App">
        <div className="App__navbar">Holding Company</div>
        <ResponseDialog
          isModalOpen={this.state.isModalOpen}
          setModalState={this.setModalState}
          responseDetails={this.state.responseDetails}
          setResponseDetails={this.setResponseDetails}
        ></ResponseDialog>
        <AppCards
          className="App__card"
          setModalState={this.setModalState}
          setResponseDetails={this.setResponseDetails}
        ></AppCards>
      </div>
    );
  }
}

export default App;
