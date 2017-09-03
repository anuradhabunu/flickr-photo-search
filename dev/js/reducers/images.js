const initialState = {
  imageArr: []
};

const images = (state = initialState, action) => {
  switch (action.type) {
    case 'RESPONSE_API':
      return Object.assign({}, state, {imageArr: action.imageArr});
    default:
      return state;
  }
}

export default images;