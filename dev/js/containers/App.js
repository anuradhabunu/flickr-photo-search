import React, {Component} from 'react'

import TagSearch from '../components/TagSearch';
import ImageContainer from '../components/ImageContainer';
import * as ImageAction from '../actions/imageAction';
import FlickrApi from '../helpers/FlickrApi';
import Title from '../components/Title';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

require('../../scss/main.scss');

window._flickrApi = FlickrApi;

class App extends Component{
  constructor(props) {
    super(props);
    FlickrApi.setProps(props);
  }
	render() {
    return(
  		<div>
        <Title />
        <TagSearch imageAction={this.props.imageAction}/>
        <ImageContainer imageArr={this.props.images.imageArr}/>
      </div>
    );
	}

  componentDidMount() {
    FlickrApi.requestApi();
  }
}

//function to change above component to a container . Container is basically a glue between the store and the component
function mapStateToProps(state) {
  return(
    {
      images: state.images
    }
  );
}

function mapDispatchToProps(dispatch) {
  return {
    imageAction: bindActionCreators(ImageAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
