export default () => {
  const str = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  return str.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};
