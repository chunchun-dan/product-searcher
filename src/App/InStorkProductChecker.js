import * as React from 'react';

type Props = {
  isInStock: boolean,
  setIsInStock: () => boolean,
}
const InStockProductChecker = ({
  isInStock,
  setIsInStock,
}: Props) => {

  return(
    <div>
      <input
        type="checkbox"
        value={isInStock}
        onChange={(e) => setIsInStock(e.target.checked)}
      />
      <span>
        {'Only show products in stock'}
      </span>
    </div>
  )
}

export default InStockProductChecker;
