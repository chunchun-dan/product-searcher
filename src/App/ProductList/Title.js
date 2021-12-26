import * as React from 'react';

const Title = () => {
  const style={
    display: 'flex',
    justifyContent: 'space-evenly'
  }
  return (
    <div style={style}>
      <div>
        {'Name'}
      </div>
      <div>
        {'Price'}
      </div>
    </div>
  );
}

export default Title;
