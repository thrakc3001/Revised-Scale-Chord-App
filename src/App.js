import React, { Component } from 'react';
import * as firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAqdmIXzFsSxJ2x508PrWIL3xqxNbpmZuM",
    authDomain: "scales-and-chords-3001.firebaseapp.com",
    databaseURL: "https://scales-and-chords-3001.firebaseio.com",
    projectId: "scales-and-chords-3001",
    storageBucket: "scales-and-chords-3001.appspot.com",
    messagingSenderId: "1047207785286"
  };
firebase.initializeApp(config);
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    firebase.database().ref().child('scales').on('value', snapshot => {
      this.setState({
        data: snapshot.val()
      })
    });
  }


  render() {

    let btnStyles = {
      width: '90px',
      height: '15px',
      fontSize: '8px'
    }

    let btn = this.state.data.map((result, i) => (
      <button key={i} style={btnStyles}>{result}</button>
    ))
    
    return (
      <div>
        {btn}
      </div>
    );
  }
}
export default App;