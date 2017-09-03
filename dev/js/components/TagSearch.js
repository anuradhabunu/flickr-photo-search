import React, {Component} from 'react';
import FlickrApi  from '../helpers/FlickrApi'; 

export default class TagSearch extends Component {
  buttonClicked() {
    FlickrApi.requestApi(this.refs.newText.value);
  }

  keyPress(e) {
    if (e.charCode === 13) {
      this.buttonClicked();
    }
  }

  render() {
    return(
      <div>
        <input ref='newText' className='inlineBlock search-bar' type = "text" placeholder = "Please Enter Tag" onKeyPress={this.keyPress.bind(this)} />
        <button className='inlineBlock search-button' onClick={this.buttonClicked.bind(this)}>Search</button>
      </div>
    );
  }
}