import React from 'react';

// With JSX
// const Hello = () => {
//   return (
//     <div className='dummyClass'>
//       <h1>Hello Himanshu</h1>
//     </div>
//   );
// };

// Without JSX
const Hello = () => {
  return React.createElement(
    'div',
    { id: 'hello', className: 'dummyClass' },
    React.createElement('h1', null, 'Hello Himanshu')
  );
};
export default Hello;
