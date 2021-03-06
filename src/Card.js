import React from 'react';

const Card = props => {
  return (
    <div style={{ margin: '1em' }}>
      <img src={props.avatar_url} alt="avatar" style={{ width: '70px' }} />

      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  );
};

export default Card;