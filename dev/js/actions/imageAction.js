export function onClickButton(tag) {
  return (
    {
      type: 'BUTTON_CLICK',
      tag
    }
  );
}

export function responseFlickr(imageArr) {
  return (
    {
      type: 'RESPONSE_API',
      imageArr
    }
  );
}

export function saveInitialArray(imageArr) {
  return (
    {
      type: 'SAVE_INITIAL_ARRAY',
      imageArr
    }
  );
}