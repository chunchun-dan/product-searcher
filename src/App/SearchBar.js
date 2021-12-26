import * as React from 'react';

type Props = {
  search: string,
  setSearch: () => string,
}

const SearchBar = ({
  search,
  setSearch,
}: Props) => {

  return(
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."/>
    </div>
  )
}

export default SearchBar;
