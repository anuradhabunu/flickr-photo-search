import React, {Component} from 'react';

export default class TagSearch extends Component {
  buttonClicked() {
    this.props.imageAction.onClickButton(this.refs.newText.value);
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