const initialState = {
  initialArr: [], 
  imageArr: []
};

const images = (state = initialState, action) => {
  switch (action.type) {
    case 'BUTTON_CLICK':
      let imageArr = state.initialArr; 
      imageArr = imageArr.filter(function(imageObj) {
        return (imageObj.tags.indexOf(action.tag) !== -1); 
      });
      return Object.assign({}, state, {imageArr});

    case 'RESPONSE_API':
      return Object.assign({}, state, {imageArr: action.imageArr});

    case 'SAVE_INITIAL_ARRAY':
      return Object.assign({}, state, {initialArr: action.imageArr});

    default:
      return state;
  }
}

export default images;