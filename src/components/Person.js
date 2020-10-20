import React from 'react';

function Person({ person: { name, email } }) {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Person;
