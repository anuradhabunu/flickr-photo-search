import React, {Component} from 'react';

export default class ImageComponent extends Component {
  render() {
    return(
      <div className='imageElement inlineBlock'>
        <img className='imageStyle' src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}
