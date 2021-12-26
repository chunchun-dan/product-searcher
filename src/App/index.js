import * as React from 'react';
import InStockProductChecker from './InStorkProductChecker';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Title from './ProductList/Title';

const App = () => {
  const data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  const [filterData, setFilterData] = React.useState(data);
  const [search, setSearch] = React.useState('');
  const [isInStock, setIsInStock] = React.useState(false);

  React.useEffect(() => {
    if(isInStock) {
      setFilterData(data.filter((o) => o.stocked === true));
    } else {
      setFilterData(data);
    }
  }, [isInStock]);

  React.useEffect(() => {
    if (data.find((o) => o.name === search)) {
      setFilterData(data.filter((o) => o.name === search));
    } else {
      setFilterData(data);
    }
  }, [search]);

  return(
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <InStockProductChecker isInStock={isInStock} setIsInStock={setIsInStock}/>
      <Title />
      <ProductList product="Sporting Goods" filterData={filterData}/>
      <ProductList product="Electronics" filterData={filterData}/>
    </div>
  );
}

export default App;
