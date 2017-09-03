import React, {Component} from 'react';
import ImageComponent from './ImageComponent';
import ImageNotFound from './ImageNotFound';

export default class ImageContainer extends Component {
  displayContent() {
    let componentArr = [];
    if (this.props.imageArr.length != 0) {
      this.props.imageArr.map((imageObj, index) => {
        componentArr.push(<ImageComponent 
          key={index}
          src={imageObj.src}
          alt={imageObj.alt}
          tags={imageObj.tags} />
        );
      })
    } else {
      componentArr.push(<ImageNotFound key='1'/>);
    }
    return componentArr;
  }

  render() {
    return (
      <div className='imageContainer'>
        {this.displayContent()}
      </div>
    );
  }
}
