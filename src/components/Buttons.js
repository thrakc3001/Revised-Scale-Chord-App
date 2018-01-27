import React, { Component } from 'react';
import '../css/Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: ''
    };
  }

  render() {

    let scaleBtn = this.props.scales.map((result, i) => (
        <button key={i} onClick={ () => (this.setState( {currentImg : this.props.URLs[i - 1]} ))}>{result}</button>
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

    let chordBtn = this.props.chords.map((result, i) => (
      <button key={i} onClick={ () => (this.setState( {currentImg : this.props.URLs[i+119]} ))}>{result}</button>
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

    let allSclBtns = [];
    for (var q = 0; q < 12; q++) {
      allSclBtns.push(<div key={q} className={this.props.scalekeys[q + 1]} 
                                   style={{display: this.props.currentMenu === q + 1 ? 'flex' : 'none'}}>{allScales[q]}</div>);
    }
    let allChoBtns = [];
    for (var r = 0; r < 12; r++) {
      allChoBtns.push(<div key={r} className={this.props.chordkeys[r + 1]} 
                                   style={{display: this.props.currentMenu === r + 13 ? 'flex' : 'none'}}>{allChords[r]}</div>);
    }

    return (
      <div>
        <img alt="png" src={this.state.currentImg} />
        {allSclBtns}
        {allChoBtns}
      </div>
    );
  }
}
export default Buttons;