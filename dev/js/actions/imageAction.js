export function responseFlickr(imageArr) {
  return (
    {
      type: 'RESPONSE_API',
      imageArr
    }
  );
}
