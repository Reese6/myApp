import React from 'react'
import { render } from 'react-dom';

function Index() {
  return (
    <div>
      HELLO JSX
    </div>
  );
}

export default (() => {
  const root = document.getElementById('root');

  render(<Index />, root);
})();


// (() => {
//   const div = document.createElement('div');
//   document.body.appendChild(div);

//   const insertTime = () => {
//     div.innerHTML = new Date();
//   };
//   insertTime();

//   const timer = setInterval(insertTime, 1000);
// })();
