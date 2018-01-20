import React, { Component } from 'react';
import './css/App.css';
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
      chordKeys: [],
      currentMenu: -1
    };
  }


  componentDidMount() {
    this.getData();
  }


  getData() {

    firebase.database().ref().child('scales').on('value', snapshot => {
      this.setState({
        scales : snapshot.val()
      })
    });

    firebase.database().ref().child('chords').on('value', snapshot => {
      this.setState({
        chords : snapshot.val()
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

  menuToggle(newSelection) {
    if (this.state.currentMenu === newSelection)
      this.setState({currentMenu : -1});
    else
      this.setState({currentMenu : newSelection});
  }


  render() {

    let scaleBtn = this.state.scales.map((result, i) => (
        <button key={i}>{result}</button>
      ))

    let aScales = []; let bbScales = []; let bScales = []; let cScales = []; let csScales = []; let dScales = []; 
    let ebScales = []; let eScales = []; let fScales = []; let fsScales = []; let gScales = []; let gsScales = [];

    let allScales = [aScales, bbScales, bScales, cScales, csScales, dScales, ebScales, eScales, fScales, fsScales, gScales, gsScales];

    let l = 1;
    let m = 11;
    for (var h = 0; h < allScales.length; h++) {
      for (var i = l; i < m; i++) {
        allScales[h].push(scaleBtn[i]);
      }
      l += 10;
      m += 10;
    }

    let chordBtn = this.state.chords.map((result, i) => (
      <button key={i}>{result}</button>
    ))

    let aChords = []; let bbChords = []; let bChords = []; let cChords = []; let csChords = []; let dChords = []; 
    let ebChords = []; let eChords = []; let fChords = []; let fsChords = []; let gChords = []; let abChords = [];

    let allChords = [aChords, bbChords, bChords, cChords, csChords, dChords, ebChords, eChords, fChords, fsChords, gChords, abChords];

    let o = 1;
    let p = 17;
    for (var j = 0; j < allChords.length; j++) {
      for (var k = o; k < p; k++) {
        allChords[j].push(chordBtn[k]);
      }
      o += 16;
      p += 16;
    }



    let scaleKeysBtn = this.state.scaleKeys.map((result, i) => (
      <button key={i} className='keyStyles' onClick={ () => {this.menuToggle(i)} }>{result}</button>
    ))

    let chordKeysBtn = this.state.chordKeys.map((result, i) => (
      <button key={i} className='keyStyles' onClick={ () => {this.menuToggle(i+12)} }>{result}</button>
    ))

    let allSclBtns = [];
    for (var q = 0; q < 12; q++) {
      allSclBtns.push(<div key={q} className='allSclBtns' style={{display: this.state.currentMenu === q + 1 ? 'flex' : 'none'}}>{allScales[q]}</div>);
    }

    let allChoBtns = [];
    for (var r = 0; r < 12; r++) {
      allChoBtns.push(<div key={r} className='allChoBtns' style={{display: this.state.currentMenu === r + 13 ? 'flex' : 'none'}}>{allChords[r]}</div>);
    }


    return (
      <div>
        <h1>Scales and Chords</h1>
        <div className='btnContainer'>
          <div className='keyContainer'>{scaleKeysBtn}</div>
          <div className='keyContainer'>{chordKeysBtn}</div>
        </div>
        {allSclBtns}
        {allChoBtns}
      </div>
    );
  }
}
export default App;