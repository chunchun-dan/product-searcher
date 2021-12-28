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
    const matchedData = data.filter((o) => o.name.toLocaleLowerCase().includes(search.toLowerCase()));
    if(isInStock) {
      setFilterData(matchedData.filter((o) => o.stocked === true));
    } else {
      setFilterData(matchedData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, isInStock]);

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
