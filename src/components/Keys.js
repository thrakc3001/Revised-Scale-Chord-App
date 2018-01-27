import React, { Component } from 'react';
import Buttons from './Buttons.js'
import '../css/Keys.css';

class Keys extends Component {
  constructor(props) {
    super(props);
    this.state = {
    currentMenu: -1
    };
  }

  menuToggle(newSelection) {
    if (this.state.currentMenu === newSelection)
      this.setState({currentMenu : -1});
    else
      this.setState({currentMenu : newSelection});
  }

  render() {

    let scaleKeysBtn = this.props.scalekeys.map((result, i) => (
      <button key={i} className='keyStyles' onClick={ () => {this.menuToggle(i)} }>{result}</button>
    ))
    let chordKeysBtn = this.props.chordkeys.map((result, i) => (
      <button key={i} className='keyStyles' onClick={ () => {this.menuToggle(i+12)} }>{result}</button>
    ))

    return (
      <div>
        <div className='btnContainer'>
          <div className='keyContainer'>{scaleKeysBtn}</div>
          <div className='keyContainer'>{chordKeysBtn}</div>
        </div>
        <Buttons scales={this.props.scales} chords={this.props.chords} imgURLs={this.props.imgURLs} musURLs={this.props.musURLs} 
        currentMenu={this.state.currentMenu} scalekeys={this.props.scalekeys} chordkeys={this.props.chordkeys} />
      </div>
    );
  }
}
export default Keys;