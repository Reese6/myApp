export default () => {
  const metaToken = document.querySelector('[name="csrfmiddlewaretoken"]');

  return {
    name: 'csrfmiddlewaretoken',
    value: metaToken ? metaToken.value : '',
  };
};
