import React, { Component } from 'react';
import Keys from './components/Keys.js'
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

let http = require('http');
setInterval(function() {
    http.get('http://scales-and-chords.herokuapp.com');
}, 200000);

firebase.initializeApp(config);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scales: [],
      chords: [],
      scalekeys: [],
      chordkeys: [],
      imgURLs: [],
      mp3URLs: []
    };
  }

  componentDidMount() {
    let datas = ['scales', 'chords', 'scalekeys', 'chordkeys'];
    for (var s = 0; s < datas.length; s++) {
      this.getData(datas[s]);
    }

    for (var t = 1; t < 313; t++) {
      if (t < 10) {
        this.getStorage('00' + t)
      }
      if (t >= 10 && t < 100) {
        this.getStorage('0' + t)
      }
      if (t >= 100) {this.getStorage(t)
      }
    }
  }

  getData(data) {
    firebase.database().ref().child(data).on('value', snapshot => {
      let stateObject = {[data] : snapshot.val()};
      this.setState(stateObject);
    });
  }

  getStorage(data) {
    firebase.storage().ref().child(`images/${data}.png`).getDownloadURL().then((url) => {
      this.setState(prevState => ({ 
        imgURLs: [...prevState.imgURLs, url] 
      }));
    });
    firebase.storage().ref().child(`mp3s/${data}.mp3`).getDownloadURL().then((url) => {
      this.setState(prevState => ({ 
        mp3URLs: [...prevState.mp3URLs, url] 
      }));
    });
  }

  render() {
    return (
      <div>
        <h1>Scales and Chords</h1>
        <div className='main'>
          <Keys scalekeys={this.state.scalekeys} chordkeys={this.state.chordkeys} scales={this.state.scales} 
                chords={this.state.chords} musURLs={this.state.mp3URLs} imgURLs={this.state.imgURLs} />
        </div>
      </div>
    );
  }
}
export default App;