import React from 'react';

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type='text' name='' id='' />
    </div>
  );
});

export default FRInput;
