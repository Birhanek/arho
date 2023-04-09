import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputBase, SearchUpperComponent, SearchWrapper } from './searchComponents'


const Search = () => {
  return (
    <SearchUpperComponent sx={{width:150, color:'green'}}>
         
        <SearchInputBase placeholder="Search entire store here . . . " inputProps={{ 'aria-label': 'search' }}/>
       <SearchWrapper><SearchIcon/></SearchWrapper>
    </SearchUpperComponent>
  )
}

export default Search