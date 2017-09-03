let _props;

class FlickrApi {
  responseApi(data) {
    let imageArr = [];
    if (typeof data === 'object' && data.items.length !== 0) {
      data.items.map((imageDetail, index) => {
        const imageObj = {};
        imageObj.src = decodeURIComponent(imageDetail.media.m);
        imageObj.alt = imageDetail.title;
        imageObj.tags = imageDetail.tags;
        imageArr.push(imageObj);
        return;
      })
    }
    _props.imageAction.saveInitialArray(imageArr);
    _props.imageAction.responseFlickr(imageArr); 
  }

  requestApi() {
    const script = document.createElement('script');
    script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=_flickrApi.responseApi';
    document.head.appendChild(script);
  }

  setProps(props) {
    _props = props;
  } 


}

export default new FlickrApi();
