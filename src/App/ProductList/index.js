import * as React from 'react';
import Item from './Item';

type Props = {
  product: string,
  filterData: Array<any>
}

const ProductList = ({
  product,
  filterData
}: Props) => {
  const data = filterData.filter((o) => o.category === product);

  return(
    <div>
      {`${product}`}
      {data.map((o, index) => {
        return (
          <Item name={o.name} price={o.price} key={index}/>
        )
      })}
    </div>
  )
}

export default ProductList;
