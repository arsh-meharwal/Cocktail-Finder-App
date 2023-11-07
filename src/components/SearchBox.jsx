import React from 'react'
import Wrapper from '../assets/wrappers/SearchForm'

function SearchBox() {
  return (
    <Wrapper>
        <form className='form'>
            <input type='text' name='search' className='form-input' placeholder='type to search any drink'/>
            <button className='btn' type='submit'>Submit</button>
        </form>
    </Wrapper>
  )
}

export default SearchBox