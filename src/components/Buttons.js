import React, { Component } from 'react';
import '../css/Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: './placeholder/amajor.png',
      currentMp3: './placeholder/amajor.mp3',
      currentType: 'A Major'
    };
  }

  changeNotes(img, snd, type) {
    this.setState({currentImg : img, currentMp3 : snd, currentType : type});
    setTimeout(function() {
      let audioStuff = document.getElementById('audio');
      audioStuff.play();
    }, 50);
  }

  render() {

    let imgArray = this.props.imgURLs;
    imgArray = imgArray.sort();
    let mp3Array = this.props.musURLs;
    mp3Array = mp3Array.sort();

    let scaleBtn = this.props.scales.map((result, i) => (
        <button key={i} onClick={ () => {this.changeNotes(imgArray[i-1], mp3Array[i-1], this.props.scales[i])}}>{result}</button>
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
      <button key={i} onClick={ () => {this.changeNotes(imgArray[i+119], mp3Array[i+119], this.props.chords[i])}}>{result}</button>
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
        <div id='imageContainer'>
          <img alt="png" src={this.state.currentImg} />
        </div>
        <h2>{this.state.currentType}</h2>
        <audio controls id='audio' src={this.state.currentMp3}></audio>
        <div className='sclBox'>{allSclBtns}</div>
        <div className='choBox'>{allChoBtns}</div>
      </div>
    );
  }
}
export default Buttons;