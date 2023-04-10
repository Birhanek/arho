import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputBase, SearchUpperComponent, SearchWrapper } from './searchComponents'


const Search = () => {
  return (
    <SearchUpperComponent>
        <SearchWrapper> <SearchIcon/> </SearchWrapper>
        <SearchInputBase placeholder="Search entire store here . . . " inputProps={{ 'aria-label': 'search' }}/>   
    </SearchUpperComponent>
  )
}

export default Search