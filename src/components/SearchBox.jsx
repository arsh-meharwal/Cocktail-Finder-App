import React from 'react'
import Wrapper from '../assets/wrappers/SearchForm'

function SearchBox() {
  return (
    <Wrapper>
        <form className='form'>
            <input type='text' name='search' className='form-input' placeholder='Search any Drink'/>
            <button className='btn' type='submit'>Search</button>
        </form>
    </Wrapper>
  )
}

export default SearchBox