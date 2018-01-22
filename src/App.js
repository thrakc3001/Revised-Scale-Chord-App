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
      scalekeys: [],
      chordkeys: [],
      currentMenu: -1,
      images: []
    };
  }


  componentDidMount() {
    let datas = ['scales', 'chords', 'scalekeys', 'chordkeys'];
    for (var s = 0; s < datas.length; s++) {
      this.getData(datas[s]);
    }

    for (var t = 1; t < 3; t++) {
      this.getStorage(t);
    }
  }


  getData(data) {
    firebase.database().ref().child(data).on('value', snapshot => {
      let stateObject = {[data] : snapshot.val()};
      this.setState(stateObject);
    });
  }
  // SOMEHOW GET THIS FUCKING URL OUTSIDE THIS FUNCTION WITHOUT USING AN ARRAY
  getStorage(data) {
    firebase.storage().ref().child(`images/${data}.png`).getDownloadURL().then(function(url) {
      console.log(url);
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

    let scaleKeysBtn = this.state.scalekeys.map((result, i) => (
      <button key={i} className='keyStyles' onClick={ () => {this.menuToggle(i)} }>{result}</button>
    ))
    let chordKeysBtn = this.state.chordkeys.map((result, i) => (
      <button key={i} className='keyStyles' onClick={ () => {this.menuToggle(i+12)} }>{result}</button>
    ))
    let allSclBtns = [];
    for (var q = 0; q < 12; q++) {
      allSclBtns.push(<div key={q} className={this.state.scalekeys[q + 1]} 
                                   style={{display: this.state.currentMenu === q + 1 ? 'flex' : 'none'}}>{allScales[q]}</div>);
    }
    let allChoBtns = [];
    for (var r = 0; r < 12; r++) {
      allChoBtns.push(<div key={r} className={this.state.chordkeys[r + 1]} 
                                   style={{display: this.state.currentMenu === r + 13 ? 'flex' : 'none'}}>{allChords[r]}</div>);
    }

    return (
      <div>
        <h1>Scales and Chords</h1>
        <img src={this.state.images} alt='png'/>
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