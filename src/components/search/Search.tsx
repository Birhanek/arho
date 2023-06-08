import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputBase, SearchUpperComponent, SearchWrapper } from './searchComponents'
import { useAppDispatch } from '../../app/hook';
import { searching } from '../../feature/product/productSlice';



const Search = () => {
  const [search,setSearch] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmitSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    dispatch(searching(event.target.value))
  }
  return (
    <SearchUpperComponent>
        <SearchWrapper> <SearchIcon/> </SearchWrapper>
        <SearchInputBase value={search} onChange={handleSubmitSearch} placeholder="Search entire store here . . . " inputProps={{ 'aria-label': 'search' }}/>   
    </SearchUpperComponent>
  )
}

export default Search