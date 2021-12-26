import * as React from 'react';

type Props = {
  name: string,
  price: string
}

const Item = ({
  name,
  price,
}: Props) => {
  const style = {
    display: 'flex',
    justifyContent: 'space-evenly',
  }

  return(
    <div style={style}>
      <div>
        {name}
      </div>
      <div>
        {price}
      </div>
    </div>
  )
}

export default Item;
