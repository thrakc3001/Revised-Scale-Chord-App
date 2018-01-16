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
      ascales: [],
      bbscales: [],
      bscales: [],
      cscales: [],
      csscales: [],
      dscales: [],
      ebscales: [],
      escales: [],
      fscales: [],
      fsscales: [],
      gscales: [],
      gsscales: [],
      achords: [],
      bbchords: [],
      bchords: [],
      cchords: [],
      cschords: [],
      dchords: [],
      ebchords: [],
      echords: [],
      fchords: [],
      fschords: [],
      gchords: [],
      abchords: [],
      scaleKeys: [],
      chordKeys: []
    };
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    let scaleskeys = ['a', 'bb', 'b', 'c', 'cs', 'd', 'eb', 'e', 'f', 'fs', 'g', 'gs'];
    for (var i = 0; i < scaleskeys.length; i++) {
      let keyscales = scaleskeys[i] + 'scales';
      firebase.database().ref().child(keyscales).on('value', snapshot => {
        let stateObject = {[keyscales] : snapshot.val()};
        this.setState(stateObject)
      });
    }

    let chordskeys = ['a', 'bb', 'b', 'c', 'cs', 'd', 'eb', 'e', 'f', 'fs', 'g', 'ab'];
    for (var j = 0; j < chordskeys.length; j++) {
      let keychords = chordskeys[j] + 'chords';
      firebase.database().ref().child(keychords).on('value', snapshot => {
        let stateObject = {[keychords] : snapshot.val()};
        this.setState(stateObject)
      });
    }

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

    // for (var i = 0; i < scaleskeys.length; i++) {
    //   let ascaleBtn = this.state.ascales.map((result, i) => (
    //     <button key={i} style={scaleStyles}>{result}</button>
    //   ))
    // }

    let ascaleBtn = this.state.ascales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let bbscaleBtn = this.state.bbscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let bscaleBtn = this.state.bscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let cscaleBtn = this.state.cscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let csscaleBtn = this.state.csscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let dscaleBtn = this.state.dscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let ebscaleBtn = this.state.ebscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let escaleBtn = this.state.escales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let fscaleBtn = this.state.fscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let fsscaleBtn = this.state.fsscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let gscaleBtn = this.state.gscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))

    let gsscaleBtn = this.state.gsscales.map((result, i) => (
      <button key={i} style={scaleStyles}>{result}</button>
    ))



    let achordBtn = this.state.achords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let bbchordBtn = this.state.bbchords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let bchordBtn = this.state.bchords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let cchordBtn = this.state.cchords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let cschordBtn = this.state.cschords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let dchordBtn = this.state.dchords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let ebchordBtn = this.state.ebchords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let echordBtn = this.state.echords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let fchordBtn = this.state.fchords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let fschordBtn = this.state.fschords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let gchordBtn = this.state.gchords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))

    let abchordBtn = this.state.abchords.map((result, i) => (
      <button key={i} style={chordStyles}>{result}</button>
    ))



    let scaleKeysBtn = this.state.scaleKeys.map((result, i) => (
      <button key={i} style={keyStyles}>{result}</button>
    ))

    let chordKeysBtn = this.state.chordKeys.map((result, i) => (
      <button key={i} style={keyStyles} onClick={ () => {this.handleClick()} }>{result}</button>
    ))
    
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Scales and Chords</h1>
        <div style={btnContainer}>
          <div style={keyContainer}>{scaleKeysBtn}</div>
          <div style={keyContainer}>{chordKeysBtn}</div>
          {ascaleBtn}
          {bbscaleBtn}
          {bscaleBtn}
          {cscaleBtn}
          {csscaleBtn}
          {dscaleBtn}
          {ebscaleBtn}
          {escaleBtn}
          {fscaleBtn}
          {fsscaleBtn}
          {gscaleBtn}
          {gsscaleBtn}
          {achordBtn}
          {bbchordBtn}
          {bchordBtn}
          {cchordBtn}
          {cschordBtn}
          {dchordBtn}
          {ebchordBtn}
          {echordBtn}
          {fchordBtn}
          {fschordBtn}
          {gchordBtn}
          {abchordBtn}
        </div>
      </div>
    );
  }
}
export default App;