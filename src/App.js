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
      scales: [],
      chords: [],
      scaleKeys: [],
      chordKeys: []
    };
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    firebase.database().ref().child('scales').on('value', snapshot => {
      this.setState({
        scales: snapshot.val()
      })
    });

    firebase.database().ref().child('chords').on('value', snapshot => {
      this.setState({
        chords: snapshot.val()
      })
    });

    firebase.database().ref().child('scalekeys').on('value', snapshot => {
      this.setState({
        scaleKeys: snapshot.val()
      })
    });

    firebase.database().ref().child('chordkeys').on('value', snapshot => {
      this.setState({
        chordKeys: snapshot.val()
      })
    });
  }

  handleClick() {

  }


  render() {

    let scaleStyles = {
      width: '90px',
      height: '15px',
      fontSize: '8px',
      display: 'none'
    }

    let chordStyles = {
      width: '90px',
      height: '15px',
      fontSize: '8px',
      display: 'none'
    }

    let keyStyles = {
      width: '115px',
      height: '30px',
      fontSize: '8px',
      display: 'flex',
      justifyContent: 'center',
      margin: '0 auto'
    }

    let keyContainer = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '32%',
      justifyContent: 'center',
      margin: '0 auto',
      height: '128px',
      paddingBottom: '5px'
    }

    let btnContainer = {
    }

    let scaleBtn = this.state.scales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let chordBtn = this.state.chords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let scaleKeysBtn = this.state.scaleKeys.map((result, i) => (
      <button key={i} style={keyStyles}>{result}</button>
    ))

    let chordKeysBtn = this.state.chordKeys.map((result, i) => (
      // Make button trigger a mp3 from DB
      // Make button trigger a png from DB
      <button key={i} style={keyStyles} onClick={ () => {this.handleClick()} }>{result}</button>
    ))
    
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Scales and Chords</h1>
        <div style={btnContainer}>
          <div style={keyContainer}>
          {scaleKeysBtn}
          </div>
          <div style={keyContainer}>
          {chordKeysBtn}
          </div>
          {scaleBtn}
          {chordBtn}
        </div>
      </div>
    );
  }
}
export default App;