import React from 'react';

const MemoComp = ({ name }) => {
  console.log('rendering memo component');
  return <div>{name}</div>;
};

// memo higher order component
export default React.memo(MemoComp);
